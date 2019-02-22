
#基于React-intl、React全家桶集成的多语言脚手架

## 如何使用

### 项目快速开始

<blockquote>
  yarn start
</blockquote>

### 命令行执行翻译操作

>yarn translation zh_TW

####PS: 目前使用谷歌云翻译，可能需要自备梯子

#### [目标语言]
| 语言 | 对应值 |
| ------ | ------ |
| 中文 | zh_CN |
| 繁体 | zh_TW |
| 英文 | en_US |
| 日语 | ja_JP |
| 越南语 | vi_VN |
| 泰语 | th_TH |
| 俄语 | ru_RU |
| 韩语 | ko_KR |
| 法语 | fr_FR |

## Example
### 组件渲染（推荐）
```js
import React from 'react'
import Intl from '@intl';
const { formatMessage } = Intl
const prefixIntl = 'app.demo'
class Demo extends React.Component {
	render() {
		return (
			<FormattedMessage id={`${prefixIntl}.title`}/>
		)
	}
}
export default Demo
```

### 函数渲染
```js
import React from 'react'
import Intl from '@intl';
const { formatMessage } = Intl
const prefixIntl = 'app.demo'
class Demo extends React.Component {
	render() {
		return (
			{formatMessage({id: `${prefixIntl}.title`})}
		)
	}
}
export default Demo
```


## API
* [`FormattedMessage`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`FormattedHTMLMessage`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`FormattedDate`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`FormattedTime`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`FormattedRelative`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`FormattedNumber`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`FormattedPlural`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`formatMessage`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`formatHTMLMessage`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`formatDate`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`formatTime`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`formatRelative`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`formatNumber`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`formatPlural`](//github.com/yahoo/react-intl/wiki/API#formatmessage)
* [`now`](//github.com/yahoo/react-intl/wiki/API#formatmessage)

## More
更多API可以点击 [React-Intl](//github.com/yahoo/react-intl) 查看

##