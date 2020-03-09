import Taro from '@tarojs/taro'
import { AtGrid, AtSearchBar } from 'taro-ui'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import ShortcutsCard from '@/components/common/shortcuts-card'
import { connect } from '@tarojs/redux'
import m_ from '@/utils/mini-lodash'
import groupBy from 'lodash/groupBy'
import forEach from 'lodash/forEach'
import { ajaxPullDownRefresh } from '@/utils/index'
import NavigationService from '@/nice-router/navigation.service'
import Config from '@/utils/config'
import './styles.scss'

@connect(({ serviceCenter }) => ({ ...serviceCenter }))
class ServiceCenterPage extends Taro.Component {
  static options = {
    addGlobalClass: true,
  }

  state = {
    keyword: '',
    searchHistory: [],
  }

  componentDidMount() {
    NavigationService.view(Config.api.FooterServiceCenter)
  }

  onPullDownRefresh = () => {
    ajaxPullDownRefresh(Config.api.FooterServiceCenter)
  }

  handleKeywordSearch = ({ keyword }) => {
    this.setState({ keyword })
  }
  onChange = (keyword) => {
    this.setState({
      keyword,
    })
  }

  onSearchActionClick = () => {
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

  handleClick = (action) => {
    NavigationService.view(action)
  }

  render() {
    // const { actionList = defaultShortcutsList,sectionList=ServiceCenterTools.getServices() } = this.props
    const { actionList = [], sectionList = [] } = this.props
    const { searchHistory = [] } = this.state
    const historyCls = classNames('search-bar-history', {
      'space-around': searchHistory.length === 4,
    })

    const serviceGroup = groupBy(sectionList, 'viewGroup')
    const serviceGroupList = []

    forEach(serviceGroup, (serviceList, groupName = '') => {
      const gridData = serviceList.map((it) => {
        return {
          ...it,
          value: it.title,
          image: it.icon || it.imageUrl,
        }
      })

      const name = groupName === '__no_group' ? '菜单' : groupName
      serviceGroupList.push({
        id: name,
        name,
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
            onActionClick={this.onSearchActionClick.bind(this)}
          />

          {searchHistory.length > 0 && (
            <View className={historyCls}>
              {searchHistory.map((it) => {
                const { id, keyword } = it
                return (
                  <View
                    key={id}
                    className='search-bar-history-keyword'
                    onClick={this.handleKeywordSearch.bind(this, it)}
                  >
                    {keyword}
                  </View>
                )
              })}
            </View>
          )}
        </View>

        {actionList.length > 0 && (
          <View className='change-request-bar'>
            <ShortcutsCard list={actionList} title='常用功能' />
          </View>
        )}

        {serviceGroupList.map((it) => {
          const { id, name, gridData } = it
          return (
            <View className='view-group' key={id}>
              <View className='view-group-title'>{name}</View>
              <View className='grid-container'>
                <AtGrid mode='square' className='service-grid' data={gridData} onClick={this.handleClick} />
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

export default ServiceCenterPage

// const defaultShortcutsList = [
//   {
//     code: 'FINE_DECORATION',
//     icon: buildingIcon,
//     title: '发起申请',
//   },
//   {
//     code: 'BIZ_CHAIN',
//     icon: commerceIcon,
//     title: '我发起',
//   },
// ]
