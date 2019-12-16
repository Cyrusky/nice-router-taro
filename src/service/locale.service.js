import localeData from './locale.data'

const customLocaleMessage = []
const messages = {}

localeData.forEach(item => messages[item.key] = item)
customLocaleMessage.forEach(item => messages[item.key] = item)

function trans(termKey) {
  var result = messages[termKey]
  if (!result) {
    return termKey + ' Not Found!'
  }
  return result.chinese
}

function mtrans(baseTermKey, extraTermKey, isMultiple) {
  if (!isMultiple) {
    return trans(baseTermKey)
  }
  return `${trans(baseTermKey)}(${trans(extraTermKey)})`

}

const LocaleService = {
  mtrans,
  trans,
}
export default LocaleService
