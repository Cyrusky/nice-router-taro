import Taro from '@tarojs/taro'
import { Form, View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import EleButton from '@/genericpage/elements/ele-button'
import NavigationService from '@/nice-router/navigation.service'
import { formatTime } from '@/utils/index'

import StorageTools from '@/nice-router/storage-tools'
import EleInput from '@/genericpage/form/ele-input'
import './styles.scss'
import ChooseQuestion from '../org/choose-question'

const KEY = 'new-survey'

@connect(({ survey }) => ({ ...survey }))
class SurveyPage extends Taro.PureComponent {
  static options = {
    addGlobalClass: true,
  }

  componentDidMount() {
    Taro.setNavigationBarTitle({ title: '健康状况调查表' })
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

  handleSubmit = () => {
    const { actions = {}, surveyId } = this.props
    const { addClass, submit } = actions
    if (!surveyId) {
      NavigationService.view(addClass, { surveyDate: '+' })
      return
    }

    const payload = {
      formKey: KEY,
      submit: (formData) => {
        console.log('submit-form', formData)

        const { studentName, ...answer } = formData

        NavigationService.post(
          submit,
          {
            answer: JSON.stringify(answer),
            surveyId,
            studentName,
          },
          {
            navigationOptions: { method: 'redirectTo' },
          }
        )
      },
    }

    console.log('form submit from recommend-project page', payload, this.props)
    Taro.eventCenter.trigger('form-submit', payload)
  }

  onShareAppMessage(res) {
    console.log(res)
    const { actions } = this.props

    const { share = {} } = actions
    const { shareTitle, linkToUrl, imageUrl } = share
    const encodePath = encodeURIComponent(linkToUrl)
    return {
      title: shareTitle,
      path: `/pages/biz/survey/survey-page?q=${encodePath}`,
      imageUrl,
    }
  }

  handleNameChange = (value) => {
    StorageTools.set('student-name', value)
  }

  render() {
    const { surveyId, school, schoolClass, surveyDate, questionList = [] } = this.props

    let questionDate = Date.now()
    let submitBtn = '确认提交'
    let studentName = '确认创建问卷'

    if (surveyId) {
      // 如果是家长填表
      studentName = StorageTools.get('student-name')
      questionDate = surveyDate
      submitBtn = '提交'
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <View className='survey-page'>
          <View class='question-org'>
            {school}-{schoolClass}
          </View>

          <View class='question-time'>问卷时间： {formatTime(questionDate)}</View>

          <View class='question-user'>
            <EleInput
              formKey={KEY}
              name='studentName'
              title='姓名'
              defaultValue={studentName}
              placeholder='学生或调查对象姓名'
              onChange={this.handleNameChange}
            />
          </View>

          <View class='question-list'>
            {questionList.map((it, idx) => {
              const { id, type, title, placeholder, candidateValues } = it
              const labelTxt = `${idx + 1}. ${title}`
              return (
                <View key={id} className='question-list-item'>
                  {type === 'input' ? (
                    <EleInput
                      name={id}
                      title={labelTxt}
                      placeholder={placeholder}
                      formKey={KEY}
                      className='newquestion-input'
                    />
                  ) : (
                    <ChooseQuestion formKey={KEY} name={id} title={labelTxt} options={candidateValues} />
                  )}
                </View>
              )
            })}
          </View>

          <View className='footer-button'>
            <View className='footer-button-btn'>
              <EleButton btnType='submit' title={submitBtn} />
            </View>
          </View>
        </View>
      </Form>
    )
  }
}

export default SurveyPage