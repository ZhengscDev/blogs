---
title: 引用github仓库的star方式
date: 2020-03-27
tag: 
  - git
author: zhengshichao
location: BeiJing
---

### api链接

```http request
https://ghbtns.com/github-btn.html?user=[用户名]&repo=[仓库名]&type=star&count=true
```
### 参数说明

| 参数  | 必传 | 类型   | 备注     |
| ----- | ---- | ------ | -------- |
| user  | true | String | 用户名   |
| repo  | true | String | 仓库名字 |
| type  | true | String | star     |
| count | true | String | 数量     |

### 示例
```html
<iframe
	style="margin-left: 2px; margin-bottom:-5px;"
	frameborder="0" scrolling="0" width="100px" height="20px"
	src="https://ghbtns.com/github-btn.html?user=ZhengscDev&repo=react-native-android-webview&type=star&count=true" >
</iframe>
```

<iframe
	style="margin-left: 2px; margin-bottom:-5px;"
	frameborder="0" scrolling="0" width="100px" height="20px"
	src="https://ghbtns.com/github-btn.html?user=ZhengscDev&repo=react-native-android-webview&type=star&count=true" >
</iframe>

