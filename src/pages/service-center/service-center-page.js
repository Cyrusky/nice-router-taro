import Taro from '@tarojs/taro'
import { AtGrid, AtSearchBar } from 'taro-ui'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import ShortcutsCard from '@/components/common/shortcuts-card'
import m_ from '@/utils/mini-lodash'
import groupBy from 'lodash/groupBy'
import forEach from 'lodash/forEach'

import './styles.scss'

import servicesData from './service-center.json'
import buildingIcon from '../../assets/icon/icon_loupan@2x.png'
import commerceIcon from '../../assets/icon/icon_liansuo@2x.png'
import LocaleService from '../../service/locale.service'


export default class ServiceCenterPage extends Taro.PureComponent {

  static options = {
    addGlobalClass: true,
  }

  state = {
    keyword: '',
    searchHistory: [],
  }

  handleKeywordSearch = ({ keyword }) => {
    this.setState({ keyword })
  }
  onChange = (keyword) => {
    this.setState({
      keyword,
    })
  }

  onActionClick = () => {
    const { keyword, searchHistory = [] } = this.state
    console.log('开始搜索')
    const txt = m_.trim(keyword)
    if (!m_.find(searchHistory, { keyword: txt })) {
      console.log('search ', txt)
      const list = m_.concat({ id: Date.now(), keyword: txt }, m_.slice(searchHistory, 0, 3))
      this.setState({
        searchHistory: list,
      })
    }

  }

  render() {
    const { shortcutsList = defaultShortcutsList } = this.props
    const { searchHistory = [] } = this.state
    const historyCls = classNames('search-bar-history', {
      'space-around': searchHistory.length === 4,
    })

    const serviceCenterName = m_.keys(servicesData)[0]
    const serviceGroup = groupBy(servicesData[serviceCenterName], 'viewGroup')
    const serviceGroupList = []
    forEach(serviceGroup, (services, groupName = '') => {
      const gridData = services.map(it => {
        const { odTermKey, fieldTermKey, isMultipleTerm } = it
        const name = LocaleService.mtrans(odTermKey, fieldTermKey, isMultipleTerm)
        return ({
          ...it,
          value: name,
          image: it.imageUrl,
        })
      })
      serviceGroupList.push({
        id: gridData,
        name: groupName === '__no_group' ? '菜单' : groupName,
        gridData,
      })
    })


    return (
      <View className='service-center-page'>
        <View className='search-bar'>
          <AtSearchBar
            actionName='搜一下'
            value={this.state.keyword}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />

          {
            searchHistory.length > 0 && (
              <View className={historyCls}>
                {
                  searchHistory.map(it => (
                    <View
                      key={it.id}
                      className='search-bar-history-keyword'
                      onClick={this.handleKeywordSearch.bind(this, it)}
                    >
                      {it.keyword}
                    </View>
                  ))
                }
              </View>
            )
          }

        </View>

        {
          shortcutsList.length > 0 && (
            <View className='change-request-bar'>
              <ShortcutsCard list={shortcutsList} title='常用功能' />
            </View>
          )
        }

        {
          serviceGroupList.map(it => (
            <View className='view-group' key={it.id}>
              <View className='view-group-title'>
                {it.name}
              </View>
              <View className='grid-container'>
                <AtGrid mode='square' className='service-grid' data={it.gridData} onClick={this.handleClick} />
              </View>
            </View>
          ))
        }

      </View>
    )
  }
}

const defaultShortcutsList = [
  {
    code: 'FINE_DECORATION',
    icon: buildingIcon,
    title: '发起申请',
  },
  {
    code: 'BIZ_CHAIN',
    icon: commerceIcon,
    title: '我发起',
  },
]
