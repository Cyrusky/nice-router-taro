import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import slice from 'lodash/slice'
import NavigationService from '@/nice-router/navigation.service'

import './styles.scss'

const defaultImageUrl = 'http://www.eastphoto.cn/indexImages/ep-012136603.jpg'

export default class ActionFloor extends Taro.PureComponent {
  handleClick = (item) => {
    NavigationService.view(item)
  }

  render() {
    const { actions = [] } = this.props
    if (actions.length === 0) {
      return null
    }

    let firstFloor = []
    let secondFloor = []

    if (actions.length < 3) {
      secondFloor = actions
    }
    if (actions.length >= 3) {
      firstFloor = slice(actions, 0, 3)
      secondFloor = slice(actions, 3, 5)
    }

    return (
      <View className='action-floor'>
        {firstFloor.length > 0 && (
          <View className='action-floor-first'>
            <View className='action-floor-first-left' onClick={() => this.handleClick()}>
              <Image mode='scaleToFill' src={defaultImageUrl} />
            </View>

            <View className='action-floor-first-right' onClick={() => this.handleClick()}>
              <View className='action-floor-first-right-top' onClick={() => this.handleClick()}>
                <Image mode='scaleToFill' src={defaultImageUrl} />
              </View>

              <View className='action-floor-first-right-bottom' onClick={() => this.handleClick()}>
                <Image mode='scaleToFill' src={defaultImageUrl} />
              </View>
            </View>
          </View>
        )}

        {secondFloor.length > 0 && (
          <View className='action-floor-second'>
            <View className='action-floor-second-left' onClick={() => this.handleClick()}>
              <Image mode='scaleToFill' src={defaultImageUrl} />
            </View>
            {secondFloor[1] && (
              <View className='action-floor-second-right' onClick={() => this.handleClick()}>
                <Image mode='scaleToFill' src={defaultImageUrl} />
              </View>
            )}
          </View>
        )}
      </View>
    )
  }
}
