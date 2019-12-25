import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import EleCarousel from '@/genericpage/elements/ele-carousel'
import ActionFloor from '@/components/common/action-floor'
import Listof from '../../listof/listof'

import './home.scss'
import SectionBar from '../service-center/section-bar'

const defaultImageUrl = 'http://www.eastphoto.cn/indexImages/ep-012136603.jpg'

@connect(({ home }) => ({ ...home }))
export default class HomePage extends Taro.PureComponent {
  // carousel,
  // change request
  // icon list
  // 展开 list个
  render() {
    const {
      slideList = [{ imageUrl: defaultImageUrl }, { imageUrl: defaultImageUrl }],
      actionList = [1, 2, 3, 4, 5],
      sectionList = [{ title: '业务列表', brief: 'EnglishName', linkToUrl: './', list: [] }],
    } = this.props

    return (
      <View className='home-page'>
        <EleCarousel items={slideList} height={220} />
        <View className='home-page-action-floor'>
          <ActionFloor actions={actionList} />
        </View>
        {sectionList.map((section) => {
          const { id, title, linkToUrl, brief, list } = section
          return (
            <View key={`${id}_${title}`} className='home-page-section'>
              <SectionBar title={title} brief={brief} linkToUrl={linkToUrl} />
              <Listof list={list} />
            </View>
          )
        })}
      </View>
    )
  }
}
