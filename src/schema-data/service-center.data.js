const serviceData = {
  platform: [
    {
      name: 'questionList',
      odTermKey: 'question',
      fieldTermKey: 'platform.question_list',
      isMultipleTerm: false,
      icon: 'question',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'questionManager/listByPlatform/:platform/',
    },

    {
      name: 'examRankingList',
      odTermKey: 'exam_ranking',
      fieldTermKey: 'platform.exam_ranking_list',
      isMultipleTerm: false,
      icon: '500px',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'examRankingManager/listByPlatform/:platform/',
    },

    {
      name: 'wechatUserList',
      odTermKey: 'wechat_user',
      fieldTermKey: 'platform.wechat_user_list',
      isMultipleTerm: false,
      icon: 'user',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'wechatUserManager/listByPlatform/:platform/',
    },
  ],
  'platform-home': [
    {
      name: 'changeRequestList',
      odTermKey: 'change_request',
      fieldTermKey: 'platform.change_request_list',
      isMultipleTerm: false,
      icon: 'exchange-alt',
      viewGroup: '变更',
      mobileViewGroup: 'home',
      linkToUrl: 'changeRequestManager/listByPlatform/:platform/',
    },

    {
      name: 'registrationList',
      odTermKey: 'registration',
      fieldTermKey: 'platform.registration_list',
      isMultipleTerm: false,
      icon: 'at',
      viewGroup: 'xxx',
      mobileViewGroup: 'home',
      linkToUrl: 'registrationManager/listByPlatform/:platform/',
    },
  ],
  wechatUser: [
    {
      name: 'startExamList',
      odTermKey: 'start_exam',
      fieldTermKey: 'wechat_user.start_exam_list',
      isMultipleTerm: false,
      icon: 'hourglass-start',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'startExamManager/listByWechatUser/:wechatUser/',
    },

    {
      name: 'answerQuestionList',
      odTermKey: 'answer_question',
      fieldTermKey: 'wechat_user.answer_question_list',
      isMultipleTerm: false,
      icon: 'question',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'answerQuestionManager/listByWechatUser/:wechatUser/',
    },

    {
      name: 'wechatLoginInfoList',
      odTermKey: 'wechat_login_info',
      fieldTermKey: 'wechat_user.wechat_login_info_list',
      isMultipleTerm: false,
      icon: 'info',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'wechatLoginInfoManager/listByWechatUser/:wechatUser/',
    },

    {
      name: 'examList',
      odTermKey: 'exam',
      fieldTermKey: 'wechat_user.exam_list',
      isMultipleTerm: false,
      icon: '500px',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'examManager/listByWechatUser/:wechatUser/',
    },

    {
      name: 'faultAnswerList',
      odTermKey: 'fault_answer',
      fieldTermKey: 'wechat_user.fault_answer_list',
      isMultipleTerm: false,
      icon: '500px',
      viewGroup: '__no_group',
      mobileViewGroup: '',
      linkToUrl: 'faultAnswerManager/listByWechatUser/:wechatUser/',
    },
  ],
}

export default serviceData
