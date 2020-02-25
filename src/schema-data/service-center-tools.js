import keys from 'lodash/keys'
import isEmpty from 'lodash/isEmpty'
import servicesData from './service-center.data.js'
import commerceIcon from '../assets/icon/icon_liansuo@2x.png'

const defaultApp = keys(servicesData)[0] || 'platform'

const getServices = (page) => {
  const services = servicesData[defaultApp] || []
  return services
    .filter((it) => isEmpty(page) || it.page === page)
    .map((it) => ({
      ...it,
      icon: commerceIcon,
    }))
}

const ServiceCenterTools = {
  getServices,
}

export default ServiceCenterTools
