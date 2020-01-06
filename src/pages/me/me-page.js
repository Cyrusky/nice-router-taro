import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import NavigationService from '@/nice-router/navigation.service'
import ShortcutsCard from '@/components/common/shortcuts-card'
import Config from '@/utils/config'
import { AtIcon } from 'taro-ui'

import './me.scss'

import buildingIcon from '../../assets/icon/icon_loupan@2x.png'
import commerceIcon from '../../assets/icon/icon_liansuo@2x.png'
import ServiceCenterTools from '../../schema-data/service-center-tools'

const defaultAvatar = 'http://www.eastphoto.cn/indexImages/ep-012136603.jpg'

const Box_Navigator_List = [
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

@connect(({ me }) => ({ ...me }))
export default class MePage extends Taro.PureComponent {
  componentDidMount() {
    NavigationService.view(Config.api.FooterMe)
  }

  handleOpenProfile = () => {
    const { userInfo } = this.props
    NavigationService.view(userInfo)
  }

  handleClick = (item) => {
    NavigationService.view(item)
  }

  render() {
    const defaultLineItem = ServiceCenterTools.getServicesForMe()
    console.log('defaultLineItemdefaultLineItemdefaultLineItem', defaultLineItem)
    const {
      boxNavigatorList = Box_Navigator_List,
      lineItemNavigatorList = defaultLineItem,
      name = '用户',
      brief = 'Level 1',
      imageUrl,
    } = this.props

    return (
      <View className='me-page'>
        <View className='me-page-header'>
          <View className='me-page-header-top'>
            <View className='avatar' onClick={this.handleOpenProfile}>
              <Image src={imageUrl || defaultAvatar} />
            </View>

            <View className='content'>
              <View className='content-name'>{name}</View>
              <View className='content-brief'>{brief}</View>
            </View>
          </View>
          <View className='me-page-header-footer'>
            <ShortcutsCard list={boxNavigatorList} />
          </View>
        </View>
        <View className='me-page-body'>
          <View className='service'>
            {lineItemNavigatorList.map((it) => {
              const { code } = it
              return (
                <View key={code} className='service-line' onClick={this.handleClick.bind(this, it)}>
                  <View className='service-line-left'>
                    <Image mode='widthFix' src={it.icon || it.imageUrl || defaultAvatar} />
                  </View>
                  <View className='service-line-title'>{it.title}</View>
                  <View className='service-line-right'>
                    <AtIcon size={18} value='chevron-right' />
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}
