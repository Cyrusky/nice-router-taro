import isEmpty from 'lodash/isEmpty'

import LocaleService from '../service/locale.service'
import servicesData from './service-center.data.js'
import commerceIcon from '../assets/icon/icon_liansuo@2x.png'

const defaultApp = 'platform'

const getServicesByPage = (page = '') => {
  const key = isEmpty(page) ? defaultApp : `${defaultApp}-${page}`
  return translateService(servicesData[key])
}
const getServicesForMe = () => getServicesByPage('me')
const getServicesFormHome = () => getServicesByPage('home')

const translateService = (services = []) => {
  return services.map((it) => {
    const { odTermKey, fieldTermKey, isMultipleTerm } = it
    const name = LocaleService.mtrans(odTermKey, fieldTermKey, isMultipleTerm)
    return {
      ...it,
      title: name,
      icon: commerceIcon,
    }
  })
}

const ServiceCenterTools = {
  getServicesForMe,
  getServicesFormHome,
  getServicesByPage,
}

export default ServiceCenterTools
