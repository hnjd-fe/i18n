
const localeInfo = {
  'en_US': {
    messages: {
      ...require('@locales/language-en-US.js').default,
    },
    locale: 'en-US',
    antd: require('antd/lib/locale-provider/en_US'),
    data: require('react-intl/locale-data/en'),
  },
  'zh_CN': {
    messages: {
      ...require('@locales/language-zh-CN').default,
    },
    locale: 'zh-CN',
    antd: require('antd/lib/locale-provider/zh_CN'),
    data: require('react-intl/locale-data/zh'),
  },
	'th_TH': {
		messages: {
			...require('@locales/language-th-TH').default,
		},
		locale: 'th-TH',
		antd: require('antd/lib/locale-provider/th_TH'),
		data: require('react-intl/locale-data/th'),
	},
};

export default localeInfo