# keyboard-num

小程序自定义组件

> 使用此组件需要依赖小程序基础库 2.2.3 以上版本，同时依赖开发者工具的 npm 构建。具体详情可查阅[官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 使用效果
![keyboard-num](https://holidaypenguin.github.io/miniprogram-keyboard-num/images/GIF1.gif)

## 使用方法

1. 安装 keyboard-num：

```
npm install --save miniprogram-keyboard-num
```

2. 在需要使用 keyboard-num 的页面 page.json 中添加 keyboard-num 自定义组件配置

```json
{
  "usingComponents": {
    "keyboard-num": "miniprogram-keyboard-num",
    "keyboard-num-light": "miniprogram-keyboard-num/light"
  }
}
```

3. 点击 工具 -> 构建npm

4. WXML 文件中引用 keyboard-num

``` xml
<keyboard-num></keyboard-num>
<keyboard-num-light></keyboard-num-light>
```

> 引用后自动从铺设在给定高度的地方，建议是100%的高度。

## keyboard-num的属性介绍如下：

| 属性名      | 类型        | 默认值     | 是否必须        | 说明          |
|------------|-------------|------------|----------------|---------------|
| value   |   String   | - |   -    | 当前输入值：组件外部可以通过此可以改变组件内部的值  |
| type     |   String   | default |   -    | 当前输入类型：指定当前组件的输入类型默认只能是数字字符串，为`money`时为金额形式 |
| max      |   Number   | -1 |   -    | 最大值  |
| maxLength       |   Number   | -1 |   -    | 最大长度  |
| useFormate       |   Boolean   | true |   -    | 是否使用格式化显示  |
| title    |   String   | 请输入 |   -    | 输入框标题  |
| tips      |   String   | - |   -    | 输入框提示文字  |
| submit      |   String   | 确定 |   -    | 确认按钮提示文字  |


## keyboard-num的事件介绍如下：

### change事件
``` json
{
  detail: {
    value: {
      current: '', // 当前未格式化输入值
      currentNum: '', // 金额转化为分，默认模式的时候为0
    }
  }
}

```

### confirm事件

``` json
{
  detail: {
    value: {
      current: '', // 当前未格式化输入值
      currentNum: '', // 金额转化为分，默认模式的时候为0
    }
  }
}

```
