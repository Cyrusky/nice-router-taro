const serviceData = {
  examUser: [
    {
      fieldName: 'StartExamList',
      title: '开始考试名单',
      icon: 'hourglass-start',
      viewGroup: '首页动作',
      page: 'home',
      linkToUrl: 'startExamManager/listByExamUser/:examUser/',
    },

    {
      fieldName: 'AnswerQuestionList',
      title: '回答问题列表',
      icon: 'question',
      viewGroup: '题目相关',
      page: 'me',
      linkToUrl: 'answerQuestionManager/listByExamUser/:examUser/',
    },

    {
      fieldName: 'WechatLoginInfoList',
      title: '微信登录信息列表',
      icon: 'info',
      viewGroup: '个人相关',
      page: 'me',
      linkToUrl: 'wechatLoginInfoManager/listByExamUser/:examUser/',
    },

    {
      fieldName: 'ExamList',
      title: '考试名单',
      icon: '500px',
      viewGroup: '首页动作',
      page: 'home',
      linkToUrl: 'examManager/listByExamUser/:examUser/',
    },

    {
      fieldName: 'FaultAnswerList',
      title: '错误的答案列表',
      icon: '500px',
      viewGroup: '题目相关',
      page: 'me',
      linkToUrl: 'faultAnswerManager/listByExamUser/:examUser/',
    },
  ],
}

export default serviceData
