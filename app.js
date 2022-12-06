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

    wx.getSystemInfo({
      success: res => {
        let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        // console.log(menuButtonObject);
        let statusBarHeight = res.statusBarHeight;
        // console.log(statusBarHeight)
        let navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2
        // console.log(navHeight)
        let windowHeight = res.windowHeight;
        let navTop = menuButtonObject.top
        Object.assign(this.globalData,{
          navHeight,
          navTop,
          windowHeight,
          menuButtonObject
        })
      }
    })
  },
  globalData: {
    navHeight:0,
    navTop:0,
    windowHeight:0,
    menuButtonObject:null,
    slides:null,
    stories:null,
    vehicles:null
  }
})
