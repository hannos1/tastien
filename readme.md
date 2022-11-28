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