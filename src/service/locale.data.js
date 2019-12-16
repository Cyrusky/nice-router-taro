
const localeData=[
  {key: 'platform', chinese: '平台', english: 'Platform'},
  {key: 'platform.id', chinese: 'ID', english: 'Id'},
  {key: 'platform.name', chinese: '名称', english: 'Name'},
  {key: 'platform.description', chinese: '描述', english: 'Description'},
  {key: 'platform.version', chinese: '版本', english: 'Version'},
  {key: 'platform.change_request_type_list', chinese: '更改请求类型列表', english: 'Change Request Type List'},
  {key: 'platform.change_request_list', chinese: '变更请求列表', english: 'Change Request List'},
  {key: 'platform.exam_status_list', chinese: '考试状态列表', english: 'Exam Status List'},
  {key: 'platform.question_list', chinese: '问题列表', english: 'Question List'},
  {key: 'platform.exam_ranking_list', chinese: '考试排名', english: 'Exam Ranking List'},
  {key: 'platform.wechat_user_list', chinese: '微信用户列表', english: 'Wechat User List'},
  {key: 'change_request_type', chinese: '变更请求类型', english: 'Change Request Type'},
  {key: 'change_request_type.id', chinese: 'ID', english: 'Id'},
  {key: 'change_request_type.name', chinese: '名称', english: 'Name'},
  {key: 'change_request_type.code', chinese: '代码', english: 'Code'},
  {key: 'change_request_type.icon', chinese: '图标', english: 'Icon'},
  {key: 'change_request_type.display_order', chinese: '显示顺序', english: 'Display Order'},
  {key: 'change_request_type.bind_types', chinese: '绑定类型', english: 'Bind Types'},
  {key: 'change_request_type.step_configuration', chinese: '步配置', english: 'Step Configuration'},
  {key: 'change_request_type.platform', chinese: '平台', english: 'Platform'},
  {key: 'change_request_type.version', chinese: '版本', english: 'Version'},
  {key: 'change_request_type.change_request_list', chinese: '变更请求列表', english: 'Change Request List'},
  {key: 'change_request', chinese: '变更请求', english: 'Change Request'},
  {key: 'change_request.id', chinese: 'ID', english: 'Id'},
  {key: 'change_request.name', chinese: '名称', english: 'Name'},
  {key: 'change_request.create_time', chinese: '创建时间', english: 'Create Time'},
  {key: 'change_request.remote_ip', chinese: '远程Ip', english: 'Remote Ip'},
  {key: 'change_request.request_type', chinese: '请求类型', english: 'Request Type'},
  {key: 'change_request.platform', chinese: '平台', english: 'Platform'},
  {key: 'change_request.version', chinese: '版本', english: 'Version'},
  {key: 'change_request.registration_list', chinese: '登记列表', english: 'Registration List'},
  {key: 'change_request.start_exam_list', chinese: '开始考试名单', english: 'Start Exam List'},
  {key: 'registration', chinese: '登记', english: 'Registration'},
  {key: 'registration.id', chinese: 'ID', english: 'Id'},
  {key: 'registration.nick_name', chinese: '昵称', english: 'Nick Name'},
  {key: 'registration.avatar', chinese: '头像', english: 'Avatar'},
  {key: 'registration.change_request', chinese: '变更请求', english: 'Change Request'},
  {key: 'registration.version', chinese: '版本', english: 'Version'},
  {key: 'start_exam', chinese: '开始考试', english: 'Start Exam'},
  {key: 'start_exam.id', chinese: 'ID', english: 'Id'},
  {key: 'start_exam.nick_name', chinese: '昵称', english: 'Nick Name'},
  {key: 'start_exam.user', chinese: '用户', english: 'User'},
  {key: 'start_exam.change_request', chinese: '变更请求', english: 'Change Request'},
  {key: 'start_exam.version', chinese: '版本', english: 'Version'},
  {key: 'exam_status', chinese: '考试状态', english: 'Exam Status'},
  {key: 'exam_status.id', chinese: 'ID', english: 'Id'},
  {key: 'exam_status.name', chinese: '名称', english: 'Name'},
  {key: 'exam_status.code', chinese: '代码', english: 'Code'},
  {key: 'exam_status.platform', chinese: '平台', english: 'Platform'},
  {key: 'exam_status.version', chinese: '版本', english: 'Version'},
  {key: 'exam_status.exam_list', chinese: '考试名单', english: 'Exam List'},
  {key: 'question', chinese: '检查问题', english: 'Question'},
  {key: 'question.id', chinese: 'ID', english: 'Id'},
  {key: 'question.topic', chinese: '主题', english: 'Topic'},
  {key: 'question.level', chinese: '水平', english: 'Level'},
  {key: 'question.option_a', chinese: 'A选项', english: 'Option A'},
  {key: 'question.option_b', chinese: 'B选项', english: 'Option B'},
  {key: 'question.option_c', chinese: 'C选项', english: 'Option C'},
  {key: 'question.option_d', chinese: 'D选项', english: 'Option D'},
  {key: 'question.option_e', chinese: 'E选项', english: 'Option E'},
  {key: 'question.right_answer', chinese: '正确的答案', english: 'Right Answer'},
  {key: 'question.platform', chinese: '平台', english: 'Platform'},
  {key: 'question.version', chinese: '版本', english: 'Version'},
  {key: 'question.answer_list', chinese: '答案列表', english: 'Answer List'},
  {key: 'question.user_answer_list', chinese: '用户回答列表', english: 'User Answer List'},
  {key: 'question.fault_answer_list', chinese: '错误的答案列表', english: 'Fault Answer List'},
  {key: 'exam_ranking', chinese: '考试排名', english: 'Exam Ranking'},
  {key: 'exam_ranking.id', chinese: 'ID', english: 'Id'},
  {key: 'exam_ranking.name', chinese: '名称', english: 'Name'},
  {key: 'exam_ranking.avatar', chinese: '头像', english: 'Avatar'},
  {key: 'exam_ranking.platform', chinese: '平台', english: 'Platform'},
  {key: 'exam_ranking.version', chinese: '版本', english: 'Version'},
  {key: 'answer', chinese: '回答', english: 'Answer'},
  {key: 'answer.id', chinese: 'ID', english: 'Id'},
  {key: 'answer.title', chinese: '标题', english: 'Title'},
  {key: 'answer.comment', chinese: '评论', english: 'Comment'},
  {key: 'answer.question', chinese: '检查问题', english: 'Question'},
  {key: 'answer.version', chinese: '版本', english: 'Version'},
  {key: 'wechat_user', chinese: '微信用户', english: 'Wechat User'},
  {key: 'wechat_user.id', chinese: 'ID', english: 'Id'},
  {key: 'wechat_user.name', chinese: '名称', english: 'Name'},
  {key: 'wechat_user.avatar', chinese: '头像', english: 'Avatar'},
  {key: 'wechat_user.create_time', chinese: '创建时间', english: 'Create Time'},
  {key: 'wechat_user.user_type', chinese: '用户类型', english: 'User Type'},
  {key: 'wechat_user.platform', chinese: '平台', english: 'Platform'},
  {key: 'wechat_user.version', chinese: '版本', english: 'Version'},
  {key: 'wechat_user.start_exam_list', chinese: '开始考试名单', english: 'Start Exam List'},
  {key: 'wechat_user.wechat_login_info_list', chinese: '微信登录信息列表', english: 'Wechat Login Info List'},
  {key: 'wechat_user.exam_list', chinese: '考试名单', english: 'Exam List'},
  {key: 'wechat_user.fault_answer_list', chinese: '错误的答案列表', english: 'Fault Answer List'},
  {key: 'wechat_login_info', chinese: '微信登录信息', english: 'Wechat Login Info'},
  {key: 'wechat_login_info.id', chinese: 'ID', english: 'Id'},
  {key: 'wechat_login_info.wechat_user', chinese: '微信用户', english: 'Wechat User'},
  {key: 'wechat_login_info.app_id', chinese: '应用程序Id', english: 'App Id'},
  {key: 'wechat_login_info.open_id', chinese: '开放Id', english: 'Open Id'},
  {key: 'wechat_login_info.session_key', chinese: '会话密钥', english: 'Session Key'},
  {key: 'wechat_login_info.last_update_time', chinese: '最后更新时间', english: 'Last Update Time'},
  {key: 'wechat_login_info.version', chinese: '版本', english: 'Version'},
  {key: 'exam', chinese: '考试', english: 'Exam'},
  {key: 'exam.id', chinese: 'ID', english: 'Id'},
  {key: 'exam.name', chinese: '名称', english: 'Name'},
  {key: 'exam.create_time', chinese: '创建时间', english: 'Create Time'},
  {key: 'exam.status', chinese: '状态', english: 'Status'},
  {key: 'exam.user', chinese: '用户', english: 'User'},
  {key: 'exam.score', chinese: '分数', english: 'Score'},
  {key: 'exam.version', chinese: '版本', english: 'Version'},
  {key: 'exam.user_answer_list', chinese: '用户回答列表', english: 'User Answer List'},
  {key: 'user_answer', chinese: '用户的答案', english: 'User Answer'},
  {key: 'user_answer.id', chinese: 'ID', english: 'Id'},
  {key: 'user_answer.topic', chinese: '主题', english: 'Topic'},
  {key: 'user_answer.user_select', chinese: '用户选择', english: 'User Select'},
  {key: 'user_answer.question', chinese: '检查问题', english: 'Question'},
  {key: 'user_answer.exam', chinese: '考试', english: 'Exam'},
  {key: 'user_answer.version', chinese: '版本', english: 'Version'},
  {key: 'fault_answer', chinese: '错误的答案', english: 'Fault Answer'},
  {key: 'fault_answer.id', chinese: 'ID', english: 'Id'},
  {key: 'fault_answer.topic', chinese: '主题', english: 'Topic'},
  {key: 'fault_answer.your_answer', chinese: '你的答案', english: 'Your Answer'},
  {key: 'fault_answer.right_answer', chinese: '正确的答案', english: 'Right Answer'},
  {key: 'fault_answer.create_time', chinese: '创建时间', english: 'Create Time'},
  {key: 'fault_answer.user', chinese: '用户', english: 'User'},
  {key: 'fault_answer.question', chinese: '检查问题', english: 'Question'},
  {key: 'fault_answer.fault_times', chinese: '故障时间', english: 'Fault Times'},
  {key: 'fault_answer.version', chinese: '版本', english: 'Version'},
  {key: 'user_domain', chinese: '用户域', english: 'User Domain'},
  {key: 'user_domain.id', chinese: 'ID', english: 'Id'},
  {key: 'user_domain.name', chinese: '名称', english: 'Name'},
  {key: 'user_domain.version', chinese: '版本', english: 'Version'},
  {key: 'user_domain.user_white_list_list', chinese: '用户白名单', english: 'User White List List'},
  {key: 'user_domain.sec_user_list', chinese: 'Sec的用户列表', english: 'Sec User List'},
  {key: 'user_white_list', chinese: '用户白名单', english: 'User White List'},
  {key: 'user_white_list.id', chinese: 'ID', english: 'Id'},
  {key: 'user_white_list.user_identity', chinese: '用户身份', english: 'User Identity'},
  {key: 'user_white_list.user_special_functions', chinese: '用户特殊功能', english: 'User Special Functions'},
  {key: 'user_white_list.domain', chinese: '域', english: 'Domain'},
  {key: 'user_white_list.version', chinese: '版本', english: 'Version'},
  {key: 'sec_user', chinese: '安全用户', english: 'Sec User'},
  {key: 'sec_user.id', chinese: 'ID', english: 'Id'},
  {key: 'sec_user.login', chinese: '登录', english: 'Login'},
  {key: 'sec_user.mobile', chinese: '手机号码', english: 'Mobile'},
  {key: 'sec_user.email', chinese: '电子邮件', english: 'Email'},
  {key: 'sec_user.pwd', chinese: '密码', english: 'Pwd'},
  {key: 'sec_user.weixin_openid', chinese: '微信openid', english: 'Weixin Openid'},
  {key: 'sec_user.weixin_appid', chinese: '微信Appid', english: 'Weixin Appid'},
  {key: 'sec_user.access_token', chinese: '访问令牌', english: 'Access Token'},
  {key: 'sec_user.verification_code', chinese: '验证码', english: 'Verification Code'},
  {key: 'sec_user.verification_code_expire', chinese: '验证码过期', english: 'Verification Code Expire'},
  {key: 'sec_user.last_login_time', chinese: '最后登录时间', english: 'Last Login Time'},
  {key: 'sec_user.domain', chinese: '域', english: 'Domain'},
  {key: 'sec_user.blocking', chinese: '屏蔽', english: 'Blocking'},
  {key: 'sec_user.version', chinese: '版本', english: 'Version'},
  {key: 'sec_user.user_app_list', chinese: '用户应用程序列表', english: 'User App List'},
  {key: 'sec_user.login_history_list', chinese: '登录历史列表', english: 'Login History List'},
  {key: 'sec_user_blocking', chinese: '用户屏蔽', english: 'Sec User Blocking'},
  {key: 'sec_user_blocking.id', chinese: 'ID', english: 'Id'},
  {key: 'sec_user_blocking.who', chinese: '谁', english: 'Who'},
  {key: 'sec_user_blocking.block_time', chinese: '块时间', english: 'Block Time'},
  {key: 'sec_user_blocking.comments', chinese: '评论', english: 'Comments'},
  {key: 'sec_user_blocking.version', chinese: '版本', english: 'Version'},
  {key: 'sec_user_blocking.sec_user_list', chinese: 'Sec的用户列表', english: 'Sec User List'},
  {key: 'user_app', chinese: '用户应用程序', english: 'User App'},
  {key: 'user_app.id', chinese: 'ID', english: 'Id'},
  {key: 'user_app.title', chinese: '标题', english: 'Title'},
  {key: 'user_app.sec_user', chinese: '安全用户', english: 'Sec User'},
  {key: 'user_app.app_icon', chinese: '应用程序图标', english: 'App Icon'},
  {key: 'user_app.full_access', chinese: '完全访问', english: 'Full Access'},
  {key: 'user_app.permission', chinese: '许可', english: 'Permission'},
  {key: 'user_app.object_type', chinese: '访问对象类型', english: 'Object Type'},
  {key: 'user_app.object_id', chinese: '对象ID', english: 'Object Id'},
  {key: 'user_app.location', chinese: '位置', english: 'Location'},
  {key: 'user_app.version', chinese: '版本', english: 'Version'},
  {key: 'user_app.quick_link_list', chinese: '快速链接列表', english: 'Quick Link List'},
  {key: 'user_app.list_access_list', chinese: '访问列表', english: 'List Access List'},
  {key: 'user_app.object_access_list', chinese: '对象访问列表', english: 'Object Access List'},
  {key: 'quick_link', chinese: '快速链接', english: 'Quick Link'},
  {key: 'quick_link.id', chinese: 'ID', english: 'Id'},
  {key: 'quick_link.name', chinese: '名称', english: 'Name'},
  {key: 'quick_link.icon', chinese: '图标', english: 'Icon'},
  {key: 'quick_link.image_path', chinese: '图片路径', english: 'Image Path'},
  {key: 'quick_link.link_target', chinese: '链接的目标', english: 'Link Target'},
  {key: 'quick_link.create_time', chinese: '创建时间', english: 'Create Time'},
  {key: 'quick_link.app', chinese: '应用程序', english: 'App'},
  {key: 'quick_link.version', chinese: '版本', english: 'Version'},
  {key: 'list_access', chinese: '访问列表', english: 'List Access'},
  {key: 'list_access.id', chinese: 'ID', english: 'Id'},
  {key: 'list_access.name', chinese: '名称', english: 'Name'},
  {key: 'list_access.internal_name', chinese: '内部名称', english: 'Internal Name'},
  {key: 'list_access.read_permission', chinese: '读权限', english: 'Read Permission'},
  {key: 'list_access.create_permission', chinese: '创建权限', english: 'Create Permission'},
  {key: 'list_access.delete_permission', chinese: '删除权限', english: 'Delete Permission'},
  {key: 'list_access.update_permission', chinese: '更新权限', english: 'Update Permission'},
  {key: 'list_access.execution_permission', chinese: '执行权限', english: 'Execution Permission'},
  {key: 'list_access.app', chinese: '应用程序', english: 'App'},
  {key: 'list_access.version', chinese: '版本', english: 'Version'},
  {key: 'object_access', chinese: '对象访问', english: 'Object Access'},
  {key: 'object_access.id', chinese: 'ID', english: 'Id'},
  {key: 'object_access.name', chinese: '名称', english: 'Name'},
  {key: 'object_access.object_type', chinese: '访问对象类型', english: 'Object Type'},
  {key: 'object_access.list1', chinese: '列表1', english: 'List1'},
  {key: 'object_access.list2', chinese: '列表2', english: 'List2'},
  {key: 'object_access.list3', chinese: '列表3', english: 'List3'},
  {key: 'object_access.list4', chinese: '列表4', english: 'List4'},
  {key: 'object_access.list5', chinese: '列表5', english: 'List5'},
  {key: 'object_access.list6', chinese: '列表6', english: 'List6'},
  {key: 'object_access.list7', chinese: '列表7', english: 'List7'},
  {key: 'object_access.list8', chinese: '列表8', english: 'List8'},
  {key: 'object_access.list9', chinese: '列表9', english: 'List9'},
  {key: 'object_access.app', chinese: '应用程序', english: 'App'},
  {key: 'object_access.version', chinese: '版本', english: 'Version'},
  {key: 'login_history', chinese: '登录历史', english: 'Login History'},
  {key: 'login_history.id', chinese: 'ID', english: 'Id'},
  {key: 'login_history.login_time', chinese: '登录时间', english: 'Login Time'},
  {key: 'login_history.from_ip', chinese: '来自IP', english: 'From Ip'},
  {key: 'login_history.description', chinese: '描述', english: 'Description'},
  {key: 'login_history.sec_user', chinese: '安全用户', english: 'Sec User'},
  {key: 'login_history.version', chinese: '版本', english: 'Version'},
  {key: 'generic_form', chinese: '通用的形式', english: 'Generic Form'},
  {key: 'generic_form.id', chinese: 'ID', english: 'Id'},
  {key: 'generic_form.title', chinese: '标题', english: 'Title'},
  {key: 'generic_form.description', chinese: '描述', english: 'Description'},
  {key: 'generic_form.version', chinese: '版本', english: 'Version'},
  {key: 'generic_form.form_message_list', chinese: '消息列表形式', english: 'Form Message List'},
  {key: 'generic_form.form_field_message_list', chinese: '表单字段消息列表', english: 'Form Field Message List'},
  {key: 'generic_form.form_field_list', chinese: '表单字段列表', english: 'Form Field List'},
  {key: 'generic_form.form_action_list', chinese: '表单动作列表', english: 'Form Action List'},
  {key: 'form_message', chinese: '表单信息', english: 'Form Message'},
  {key: 'form_message.id', chinese: 'ID', english: 'Id'},
  {key: 'form_message.title', chinese: '标题', english: 'Title'},
  {key: 'form_message.form', chinese: '形式', english: 'Form'},
  {key: 'form_message.level', chinese: '水平', english: 'Level'},
  {key: 'form_message.version', chinese: '版本', english: 'Version'},
  {key: 'form_field_message', chinese: '表单字段的信息', english: 'Form Field Message'},
  {key: 'form_field_message.id', chinese: 'ID', english: 'Id'},
  {key: 'form_field_message.title', chinese: '标题', english: 'Title'},
  {key: 'form_field_message.parameter_name', chinese: '参数名称', english: 'Parameter Name'},
  {key: 'form_field_message.form', chinese: '形式', english: 'Form'},
  {key: 'form_field_message.level', chinese: '水平', english: 'Level'},
  {key: 'form_field_message.version', chinese: '版本', english: 'Version'},
  {key: 'form_field', chinese: '表单字段', english: 'Form Field'},
  {key: 'form_field.id', chinese: 'ID', english: 'Id'},
  {key: 'form_field.label', chinese: '标签', english: 'Label'},
  {key: 'form_field.locale_key', chinese: '语言环境的关键', english: 'Locale Key'},
  {key: 'form_field.parameter_name', chinese: '参数名称', english: 'Parameter Name'},
  {key: 'form_field.type', chinese: '类型', english: 'Type'},
  {key: 'form_field.form', chinese: '形式', english: 'Form'},
  {key: 'form_field.placeholder', chinese: '占位符', english: 'Placeholder'},
  {key: 'form_field.default_value', chinese: '默认值', english: 'Default Value'},
  {key: 'form_field.description', chinese: '描述', english: 'Description'},
  {key: 'form_field.field_group', chinese: '字段组', english: 'Field Group'},
  {key: 'form_field.minimum_value', chinese: '最小值', english: 'Minimum Value'},
  {key: 'form_field.maximum_value', chinese: '最大值', english: 'Maximum Value'},
  {key: 'form_field.required', chinese: '要求', english: 'Required'},
  {key: 'form_field.disabled', chinese: '禁用', english: 'Disabled'},
  {key: 'form_field.custom_rendering', chinese: '自定义渲染', english: 'Custom Rendering'},
  {key: 'form_field.candidate_values', chinese: '候选人的价值观', english: 'Candidate Values'},
  {key: 'form_field.suggest_values', chinese: '建议值', english: 'Suggest Values'},
  {key: 'form_field.version', chinese: '版本', english: 'Version'},
  {key: 'form_action', chinese: '表单动作', english: 'Form Action'},
  {key: 'form_action.id', chinese: 'ID', english: 'Id'},
  {key: 'form_action.label', chinese: '标签', english: 'Label'},
  {key: 'form_action.locale_key', chinese: '语言环境的关键', english: 'Locale Key'},
  {key: 'form_action.action_key', chinese: '行动的关键', english: 'Action Key'},
  {key: 'form_action.level', chinese: '水平', english: 'Level'},
  {key: 'form_action.url', chinese: 'url', english: 'Url'},
  {key: 'form_action.form', chinese: '形式', english: 'Form'},
  {key: 'form_action.version', chinese: '版本', english: 'Version'},
  {key: 'candidate_container', chinese: '候选人容器', english: 'Candidate Container'},
  {key: 'candidate_container.id', chinese: 'ID', english: 'Id'},
  {key: 'candidate_container.name', chinese: '名称', english: 'Name'},
  {key: 'candidate_container.version', chinese: '版本', english: 'Version'},
  {key: 'candidate_container.candidate_element_list', chinese: '候选人元素列表', english: 'Candidate Element List'},
  {key: 'candidate_element', chinese: '候选人元素', english: 'Candidate Element'},
  {key: 'candidate_element.id', chinese: 'ID', english: 'Id'},
  {key: 'candidate_element.name', chinese: '名称', english: 'Name'},
  {key: 'candidate_element.type', chinese: '类型', english: 'Type'},
  {key: 'candidate_element.image', chinese: '图片', english: 'Image'},
  {key: 'candidate_element.container', chinese: '容器', english: 'Container'},
  {key: 'candidate_element.version', chinese: '版本', english: 'Version'}

]

export default localeData

