import viewConfig from './viewmapping.config'

// const baseURL = 'https://demo2.doublechaintech.com/storedev/wxappService/' //后端服务地址
const baseURL = 'http://localhost:8080/exam/' //后端服务地址

const niceRouterConfig = {
  // name: 'nice-router',
  baseURL,
  version: 1,
  appType: 'mini-program',
  viewConfig,
  backendRouterPageKeyBlackList: ['refreshPage/', 'goBack/', 'goPrevious/'],
  backendRouterPageBlackList: ['NetworkException', 'EditProfileForm', 'Login', 'Me', 'UserDetail'],
  api: {
    GenericPageMock: 'mock/',

    FooterHome: 'wxappService/viewHomePage/',
    // FooterHome: 'socialProductManager/listByUser/EU000001/',
    FooterMe: 'wxappService/viewMePage/',
    FooterServiceCenter: 'wxappService/viewServiceCenterPage/',
    UpdateProfileInfo: 'wxappService/updateProfileInfo/:name/:avatar/',
    UpdatePhoneNumber: 'wxappService/updatePhoneNumber/:encryptedData/:iv/',

    Login: 'wxappService/clientLogin/',
    VerifyCode: 'sendVerifyCode/:mobile/',
    OSSToken: 'customGetOssToken/',
  },
}

const Config = {
  ...niceRouterConfig,
  name: 'NiceRouter App Start',
  goBackSkipScreen: [],
  useWxLogin: false,
  useVcode: false,
  usePassword: true,
}

console.log('***********   current env  ***********   ')
console.log('config.js is', Config)
export default Config
