// app.js
App({
  // 小程序在启动的时候的声明周期函数
  onLaunch() {
    // 比任何page onLoad更早
    wx.request({
      // json 是对象 也是数据交换的格式
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response) => {
        const {slides,stories,vehicles} = response.data
        // this?
        // console.log(response)
        // console.log(slides,stories,vehicles)
        this.globalData.slides = slides;
        this.globalData.stories = stories;
        this.globalData.vehicles = vehicles;
      }
    })
  },
  globalData: {
    slides:null,
    stories:null,
    vehicles:null
  }
})
