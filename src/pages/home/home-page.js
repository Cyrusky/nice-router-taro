import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import EleCarousel from '@/genericpage/elements/ele-carousel'
import ActionFloor from '@/components/common/action-floor'

import './home.scss'

@connect(({ home }) => ({ ...home }))
export default class HomePage extends Taro.PureComponent {
  // carousel,
  // change request
  // icon list
  // 展开 list个
  render() {
    const { slideList = [] } = this.props

    return (
      <View className='home-page'>
        <EleCarousel items={slideList} height={200} />
        <ActionFloor actions={[1]} />
      </View>
    )
  }
}
