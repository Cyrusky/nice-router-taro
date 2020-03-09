import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import EleCarousel from '@/genericpage/elements/ele-carousel'
import ActionFloor from '@/components/common/action-floor'

import NavigationService from '@/nice-router/navigation.service'
import Config from '@/utils/config'
import { ajaxPullDownRefresh } from '@/utils/index'
import SectionBar from '@/components/common/section-bar'
import Listof from '../../listof/listof'

import './home.scss'

const defaultImageUrl = 'http://www.eastphoto.cn/indexImages/ep-012136603.jpg'

@connect(({ home }) => ({ ...home }))
class HomePage extends Taro.PureComponent {
  componentDidMount() {
    NavigationService.view(Config.api.FooterHome)
  }

  onPullDownRefresh() {
    ajaxPullDownRefresh(Config.api.FooterHome)
  }

  // carousel,
  // change request
  // icon list
  // 展开 list个
  render() {
    const { slideList = defaultSlideList, actionList = [], sectionList = defaultSectionList } = this.props

    return (
      <View className='home-page'>
        <EleCarousel items={slideList} height={220} />
        <View className='home-page-action-floor'>
          <ActionFloor actions={actionList} />
        </View>
        {sectionList.map((section) => {
          const { id, title, linkToUrl, brief, displayMode } = section
          const list = this.props[id] || []
          return (
            <View key={`${id}_${title}`} className='home-page-section'>
              <SectionBar title={title} brief={brief} linkToUrl={linkToUrl} />
              <Listof list={list} displayMode={displayMode} />
            </View>
          )
        })}
      </View>
    )
  }
}

export default HomePage
const defaultSlideList = [{ videoUrl: defaultImageUrl, imageUrl: defaultImageUrl }, { imageUrl: defaultImageUrl }]
const defaultSectionList = [{ title: '业务列表', brief: 'EnglishName', linkToUrl: './', list: [] }]
// const defaultActionList = [
//   {
//     title: '中华',
//     brief: '牛逼',
//     imageUrl: defaultImageUrl,
//   },
//   {
//     title: '玉溪',
//     brief: '也很牛逼',
//   },
//   3,
//   4,
//   5,
// ]
