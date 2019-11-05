import Taro from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import NavigationService from '@/nice-router/navigation.service'
import Config from '@/utils/config'

import EleFlex from './container/ele-flex'
import './styles.scss'
import EleHelper from './ele-helper'

@connect(({ genericpage }) => ({ ...genericpage }))
export default class GenericPage extends Taro.PureComponent {
  static options = {
    addGlobalClass: true,
  }

  componentDidMount() {
    const { pageTitle = '' } = this.props
    Taro.setNavigationBarTitle({ title: pageTitle })
    console.log(this.$router.params)
    const { q } = this.$router.params
    if (q) {
      const uri = decodeURIComponent(q)
      NavigationService.view(uri)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pageTitle: currentTitle = '' } = this.props
    const { pageTitle: nextPageTitle = '' } = nextProps
    if (currentTitle !== nextPageTitle) {
      Taro.setNavigationBarTitle({ title: nextPageTitle })
    }
  }

  onShareAppMessage(res) {
    const { pageTitle = Config.name, pageLinkToUrl = Config.api.FooterHome } = this.props

    if (res.from === 'button') {
      const { target: { dataset = {} } = {} } = res
      const { share = {} } = dataset
      const { shareTitle, linkToUrl, imageUrl } = share
      const encodePath = encodeURIComponent(linkToUrl || pageLinkToUrl)
      return {
        title: shareTitle || pageTitle,
        path: `/pages/generic-page?q=${encodePath}`,
        imageUrl,
      }
    }
    const encodePath = encodeURIComponent(pageLinkToUrl)
    console.log('share ....', encodePath)
    return {
      title: pageTitle,
      path: encodePath,
    }
  }

  render() {
    console.log('this.props', this.props)
    const rootClass = EleHelper.classNames('generic-page', this.props.className)
    return (
      <View className={rootClass}>
        <EleFlex {...this.props} />
      </View>
    )
  }
}
