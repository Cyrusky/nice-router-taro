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
import { ajaxPullDownRefresh, formatTime } from '@/utils/index'
import SectionBar from '@/components/common/section-bar'

import EleActionList from '@/genericpage/elements/ele-action-list'
import './styles.scss'

const SHOW_AS_INLIN_TEXT = ['text', 'date', 'time', 'status', 'object']

@connect(({ detail3 }) => ({ ...detail3 }))
class DetailPage3 extends Taro.Component {
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
    ajaxPullDownRefresh(this.props)
  }

  handleClick = (action, id) => {
    NavigationService.view(action, { id })
  }

  getDisplayValue = (item) => {
    const { type, fieldName, displayField } = item
    let displayValue = this.props[fieldName]

    if (type === 'date') {
      displayValue = formatTime(displayValue)
    }

    if (type === 'time') {
      displayValue = formatTime(displayValue, 'yyyy-MM-dd HH:MM')
    }

    if (type === 'status') {
      displayValue = `${displayValue.name} (${displayValue.code})`
    }

    if (type === 'object') {
      if (displayValue) {
        return {
          ...displayValue,
          displayValue: displayValue[displayField],
        }
      }
    }
    return { displayValue }
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
          {propList.map((propItem) => {
            const { id: key, type, label } = propItem

            const inlineText = SHOW_AS_INLIN_TEXT.includes(type)

            const rootCls = classNames('prop-section-item', {
              inline: inlineText,
              link: NavigationService.isActionLike(propItem),
              [type]: true,
            })

            const { displayValue, id: itemId } = this.getDisplayValue(propItem)

            return (
              <View key={key} className={rootCls}>
                <View className='prop-section-item-label'>{label}</View>
                <View className='prop-section-item-value'>
                  {inlineText && (
                    <Text
                      className='prop-section-item-value-text'
                      onClick={this.handleClick.bind(this, propItem, itemId)}
                    >
                      {displayValue}
                    </Text>
                  )}

                  {type === 'longText' && <Text className='prop-section-item-value-longText'>{displayValue}</Text>}

                  {type === 'file' && (
                    <View className='prop-section-item-value-file'>
                      <EleActionList
                        list={[
                          {
                            id: 'open-document',
                            btnType: 'open-document',
                            linkToUrl: displayValue,
                            title: '查看',
                          },
                          {
                            id: 'download-document',
                            btnType: 'download',
                            linkToUrl: displayValue,
                            title: '下载',
                          },
                        ]}
                      />
                    </View>
                  )}

                  {type === 'image' && (
                    <ServerImage
                      my-class='prop-section-item-value-image'
                      src={displayValue}
                      size='large'
                      mode='widthFix'
                    />
                  )}

                  {type === 'imageList' && <EleCarousel items={displayValue} />}
                </View>
              </View>
            )
          })}
        </View>

        {sectionList.map((section) => {
          const { id, title, linkToUrl, brief, displayMode } = section
          const list = this.props[id] || []
          return (
            <View key={`${id}_${title}`}>
              <View className='section-list'>
                <SectionBar title={title} brief={brief} linkToUrl={linkToUrl} />
              </View>
              <Listof list={list} displayMode={displayMode} />
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

export default DetailPage3
