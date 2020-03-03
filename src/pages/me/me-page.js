import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import NavigationService from '@/nice-router/navigation.service'
import ShortcutsCard from '@/components/common/shortcuts-card'
import Config from '@/utils/config'
import { AtIcon } from 'taro-ui'
import ServerImage from '@/components/image/server-image'

import './me.scss'

import buildingIcon from '../../assets/icon/icon_loupan@2x.png'
import commerceIcon from '../../assets/icon/icon_liansuo@2x.png'
import ServiceCenterTools from '../../schema-data/service-center-tools'
import isArray from 'lodash/isArray'
import values from 'lodash/values'

const defaultAvatar = 'http://www.eastphoto.cn/indexImages/ep-012136603.jpg'

const defaultServices = ServiceCenterTools.getServices('me')

const defaultActionList = [
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
class MePage extends Taro.PureComponent {
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
    const {
      actionList = defaultActionList,
      sectionList = defaultServices,
      name = '用户',
      brief = 'Level 1',
      imageUrl,
    } = this.props

    const sections = isArray(sectionList) ? sectionList : values(sectionList)

    return (
      <View className='me-page'>
        <View className='me-page-header'>
          <View className='me-page-header-top'>
            <View className='avatar' onClick={this.handleOpenProfile}>
              <ServerImage my-class='avatar-image' src={imageUrl || defaultAvatar} />
            </View>

            <View className='content'>
              <View className='content-name'>{name}</View>
              <View className='content-brief'>{brief}</View>
            </View>
          </View>
          <View className='me-page-header-footer'>
            <ShortcutsCard list={actionList} />
          </View>
        </View>

        <View className='me-page-body'>
          {sections.length > 0 && (
            <View className='service'>
              {sections.map((it) => {
                const { code } = it
                return (
                  <View key={code} className='service-line' onClick={this.handleClick.bind(this, it)}>
                    <View className='service-line-left'>
                      <ServerImage
                        my-class='service-line-left-image'
                        mode='widthFix'
                        src={it.icon || it.imageUrl || defaultAvatar}
                      />
                    </View>
                    <View className='service-line-title'>{it.title}</View>
                    <View className='service-line-right'>
                      <AtIcon size={18} value='chevron-right' />
                    </View>
                  </View>
                )
              })}
            </View>
          )}
        </View>
      </View>
    )
  }
}

export default MePage
