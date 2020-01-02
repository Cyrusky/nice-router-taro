import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, Video, View } from '@tarojs/components'

import NavigationService from '@/nice-router/navigation.service'
import { toRpx } from '@/utils/index'
import isEmpty from 'lodash/isEmpty'

import './ele.scss'
import EleImage from './ele-image'
import EleHelper from '../ele-helper'

export default class EleCarousel extends Taro.PureComponent {
  static options = {
    addGlobalClass: true,
  }

  static defaultProps = {
    items: [],
    height: 167,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular: true,
    indicatorColor: 'rgba(255, 255, 255, 0.6)',
    indicatorActiveColor: '#fff',
    indicatorDots: null,
    customStyle: {},
    className: null,
  }

  handleClick = (item = {}) => {
    if (NavigationService.isActionLike(item)) {
      NavigationService.view(item)
      return
    }

    const { videoUrl = '', imageUrl } = item

    if (isEmpty(videoUrl) && !isEmpty(imageUrl)) {
      Taro.previewImage({ urls: [imageUrl] })
    }
  }

  render() {
    const {
      items,
      height,
      autoplay,
      interval,
      duration,
      circular,
      indicatorColor,
      indicatorActiveColor,
      indicatorDots,
      customStyle,
      className,
    } = this.props

    const style = { ...customStyle, height: toRpx(height) }

    const showDots = indicatorDots === null ? items.length > 1 : indicatorDots

    const rootClass = EleHelper.classNames('ele-carousel', className)
    return (
      <View className={rootClass} style={style}>
        <Swiper
          autoplay={autoplay}
          interval={interval}
          duration={duration}
          circular={circular}
          indicatorColor={indicatorColor}
          indicatorActiveColor={indicatorActiveColor}
          indicatorDots={showDots}
          style={style}
        >
          {items.map((it) => {
            const { videoUrl = '', imageUrl } = it
            return (
              <SwiperItem key={it.id} onClick={this.handleClick.bind(this, it)}>
                {videoUrl.length > 0 ? (
                  <View>
                    <Video
                      src={videoUrl}
                      controls
                      autoplay={it.autoplay}
                      poster={imageUrl}
                      initialTime='0'
                      loop
                      muted={false}
                      style={style}
                    />
                  </View>
                ) : (
                  <EleImage {...it} customStyle={style} />
                )}
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    )
  }
}
