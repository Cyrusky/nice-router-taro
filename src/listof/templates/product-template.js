import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import ServerImage from '@/components/image/server-image'
import '../listof.scss'
import { getImageUrl } from '../listof-helper'

export default class ProductTemplate extends Taro.PureComponent {
  static options = {
    addGlobalClass: true,
  }

  render() {
    const { item = {} } = this.props
    const { preTag = '精', tags = [], brand, brief, title, listPrice, salePrice } = item
    const src = getImageUrl(item)

    let prefixTag = preTag
    if (salePrice && salePrice < listPrice) {
      prefixTag = '促'
    }
    if (tags.length === 0) {
      tags.push(`${salePrice}`)
      tags.push(brand)
    }
    return (
      <View className='product'>
        <View className='product-img'>
          <ServerImage src={src} />
        </View>
        <View class='content'>
          <View className='content-title'>
            {preTag.length > 0 && (
              <AtTag className='red-tag' size='small' active>
                {prefixTag}
              </AtTag>
            )}
            <Text className='content-title-txt' style={{ marginLeft: '10px' }}>
              {`${brand} ${title} ${brief}`}{' '}
            </Text>
          </View>
          <View className='content-footer'>
            <Text className='content-footer-price' numberOfLines={1}>{`￥${listPrice}`}</Text>
            {tags.map((it) => (
              <AtTag className='red-tag-tiny' key={it} size='small' active>
                {it}
              </AtTag>
            ))}
          </View>
        </View>
      </View>
    )
  }
}
