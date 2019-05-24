

const pageObj = {
  1: '/pages/other/lightNum',
  2: '/pages/other/lightMoney',
  3: '/pages/other/darkMoney',
  4: '/pages/other/darkMoney',
}

Page({
  toPage({currentTarget: {dataset: {index}}}) {
    wx.navigateTo({
      url: pageObj[index],
    })
  }
})
