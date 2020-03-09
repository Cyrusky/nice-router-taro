import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import ShortcutsCard from '@/components/common/shortcuts-card'
import { connect } from '@tarojs/redux'

import Listof from '@/listof/listof'
import EleCarousel from '@/genericpage/elements/ele-carousel'
import classNames from 'classnames'
import ServerImage from '@/components/image/server-image'
import { AtButton } from 'taro-ui'
import NavigationService from '@/nice-router/navigation.service'
import { formatTime } from '@/utils/index'
import SectionBar from '@/components/common/section-bar'
import { LoadingType } from '@/nice-router/nice-router-util'

import './styles.scss'

@connect(({ detail }) => ({ ...detail }))
class DetailPage extends Taro.Component {
  static options = {
    addGlobalClass: true,
  }

  componentDidMount() {
    const { pageTitle = '' } = this.props
    Taro.setNavigationBarTitle({ title: pageTitle })
  }

  componentWillReceiveProps(nextProps) {
    const { pageTitle: currentTitle = '' } = this.props
    const { pageTitle: nextPageTitle = '' } = nextProps
    if (currentTitle !== nextPageTitle) {
      Taro.setNavigationBarTitle({ title: nextPageTitle })
    }
  }

  onPullDownRefresh = () => {
    NavigationService.ajax(
      this.props.linkToUrl,
      {},
      {
        onSuccess: () => Taro.stopPullDownRefresh(),
        loading: LoadingType.modal,
      }
    )
  }

  handleClick = (action) => {
    NavigationService.view(action)
  }

  getObjectDisplayValue = (obj, field) => {
    console.log('obj+field', obj, field, obj[field])
    if (obj) {
      return obj[field]
    }
    return obj
  }

  render() {
    const { propList = [], actionList = [], sectionList = [], footerActionList = [] } = this.props

    return (
      <View className='detail-page'>
        {actionList.length > 0 && (
          <View className='action-bar'>
            <ShortcutsCard list={actionList} title='常用功能' />
          </View>
        )}

        <View className='prop-section'>
          {propList.map((it) => {
            const { id, type, label, fieldName, displayField } = it
            let value = this.props[fieldName]

            const inlineText = !(type === 'longText' || type === 'image' || type === 'imageList')
            const rootCls = classNames('prop-section-item', {
              inline: inlineText,
              link: NavigationService.isActionLike(it),
            })
            if (type === 'date') {
              value = formatTime(value)
            }
            if (type === 'time') {
              value = formatTime(value, 'yyyy-MM-dd HH:MM')
            }

            if (type === 'status') {
              value = `${value.name} (${value.code})`
            }

            if (type === 'object') {
              value = this.getObjectDisplayValue(value, displayField)
            }

            return (
              <View key={id} className={rootCls}>
                <View className='prop-section-item-label'>{label}</View>
                <View className='prop-section-item-value'>
                  {inlineText && (
                    <Text className='prop-section-item-value-text' onClick={this.handleClick.bind(this, it)}>
                      {value}
                    </Text>
                  )}

                  {type === 'image' && (
                    <ServerImage my-class='prop-section-item-value-image' src={value} size='large' mode='widthFix' />
                  )}

                  {type === 'imageList' && <EleCarousel items={value} />}
                </View>
              </View>
            )
          })}
        </View>

        {sectionList.map((section) => {
          const { id, title, linkToUrl, brief } = section
          const list = this.props[id] || []
          return (
            <View key={`${id}_${title}`}>
              <View className='section-list'>
                <SectionBar title={title} brief={brief} linkToUrl={linkToUrl} />
              </View>
              <Listof list={list} />
            </View>
          )
        })}

        {footerActionList && (
          <View className='footer-button'>
            {footerActionList.map((it) => {
              const { id, code, title } = it
              return (
                <View key={id + code} className='footer-button-btn'>
                  <AtButton type='primary' onClick={this.handleClick.bind(this, it)}>
                    {title}
                  </AtButton>
                </View>
              )
            })}
          </View>
        )}
      </View>
    )
  }
}

export default DetailPage
