# 塔斯汀小程序模仿项目

- 本项目归塔斯汀所有,只做学习所用,请尊重原厂版权

- fiddler 抓取工具抓取图片

- 界面模仿采用markman做标记
  1. 我们没有设计稿，如何1:1还原小程序
  2. 拍屏得到小程序截图
  3. 使用在线大小[转换工具](https://www.gaitubao.com/)，将图片改成750px宽度
    以后在写wxss的时候，直接量像素
    帮我们自动适配
  4. 使用[markman](http://www.getmarkman.com) 先标注再写样式
    以后上班有设计师会标好
    现在自己标注

- 项目配置在根目录app.json
  - 隐藏并定制navigationBar 
    "navigationStyle": "custom"
  - 启动定位功能 permission


- 使用了BEM 国际css命名规范
  tst_banners 广告位 Block
  tst_banners__img element

- css 技巧
  1. 能不用定位就不要用定位
    脱离文档流 
  2. 移动端多用弹性布局


- git 提交
  1. 第一次命令行提交
     全局配置 git config --global user.name "hannos1"
      git config --global user.email "1972105453@qq.com"
      git init
      git add .
      git commit -m 'first commit'
      git remote add origin https://github.com/hannos1/tastien.git

      git config --global http.sslVerify false
      git push -u origin master

      ssh-keygen -t rsa -C '1972105453@qq.com'
      cd .\.ssh\
      cat .\id_rsa.pub

- 滴滴swiper 多页活动菜单功能
  1. 用户体验 less is more
      菜单太多，用户会觉得臃肿 只放重要的在首页
      其他可以多放
      技术难度
      1. swiper > 2 swiper-item
      2. swiper 高度  变化的   等高的
            2行
      3. class="didi_menus {{higher_menus}}"
      {{}} 占位符 里面是返回的数据

- 数据响应式编程
  它是一种思想 有别于DOM编程API
  设置一些页面效果，操作的不是DOM，
  操作是数据，因为数据一旦改变，页面刷新
  1. 滴滴可变高度的项目首页菜单
  2. tabbar 组件
    data 添加 tab 属性 ，表示当前哪个tab被激活
    tab-item 添加bindtap 事件
    tab-item data-tab 数据属性 data-
    e.currentTarget.dataset.tab 数据
    3. 外卖品类级菜单数据设计
      2个scoll-view是有相关性的
      2层嵌套的json结构
      [分类数组
        {
          菜品数组:
            [
              {

              },
            ]
        },
      ]

- 奶茶小程序的门店选择页
  1. LBS Location Base Service
    高德 LBS 技术
    美团
  2. wx.getLocation
  latitude longtitude
  

- css的技巧
    1. 选择器优先级
      标签 1 < 类名 10 < id 100 <         计算表达式
    2. 行内样式，优先级更高
    3. !important 最高 要慎用
- 弹性布局
  移动端 flex 可以解决大部分问题
  布局的一种 跟外部不一样的布局   所有块级元素丢失块级能力  弹性布局归BFC管
  Block formating context

- BEM 国际命名规范
  Block 开始 rx_tab 新的组件
  Element 内部元素申明 rx_tab__item
  Modifier rx_tab__item-on

- .cell>.cell__hd+.cell__bd+.cell__ft
  .page>.page__hd+.page__bd+.page__ft
  __  Element 只做一级 用简单单词 不重复

- 小程序不允许在wxss里面用background：url(本地图片)
  小程序之所以小，不要做太多东西
  包的大小小于2M

- app.js globaldata 全局数据
  video.js getApp() 一个小程序的内置方法,用于获取全局对象


- 视频播放列表页逻辑
  - 得有远程可播放视频
  - 视频有poster 封面
  - 显示和点击的是图片
  - currentVid 逻辑切换
    dataset.vid
     img currentVid !== vid
     video currentVid === vid
