let now = new Date();
let Year = now.getFullYear();
let Month = now.getMonth() + 1;
// let Month = 8
if (Month < 10) {
  Month = '0' + Month
}
let COLORS = ["#fbc2eb", '#8fd3f4', "#fee140", "#a8edea", "#e2d1c3", "#fddb92", "#ace0f9", "#9795f0", "#e5b2ca", "#d9afd9",
  "#93a5cf", "#e4efe9", "#f83600", "#f9d423", "#21d4fd", "#abecd6", "#99c99c", "#e3eeff", "#16a085", "#f4d03f", "#fc00ff",
  "#f9d423", "#FFE6FA", "#B9B6E5"
]
let font_COLOR = ["orange", "#212121", "#00FF7F", "#707070", "#7AC5CD", "#8DEEEE", "#EE3A8C", "#EEC591", "#FFF0F5", "#EEDC82", '#8fd3f4', "red", "blue", 'green', "yellowgreen", "pink"]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    Year: Year,
    Month: Month,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bgColor();
    this.setData({
      Year: this.data.Year,
      Month: this.data.Month,
    })
    this.showtoDays();
  },
  lastMonth() {
    +(Month)--;

    if (Month <= 0) {
      Month = 12
      Year--
    }
    this.showtoDays();
    this.bgColor();
    this.setData({
      Month: Month < 10 ? Month = '0' + Month : Month = Month,
      Year: Year,
    })
  },
  nextMonth() {
    +(Month)++;
    if (Month > 12) {
      Month = 1;
      Year++
    }
    this.showtoDays();
    this.bgColor();
    this.setData({
      Month: Month < 10 ? Month = '0' + Month : Month = Month,
      Year: Year,
    })

  },
  showtoDays() {
    let arr = [];
    let dayNums = new Date(Year, Month, 0).getDate();
    for (let i = 1; i <= dayNums; i++) {
      let obj = {
        day:i,
        YTD: Year + '-' + Month+"-"+(i<10?i='0'+i:i=i),
      }
      arr.push(obj)
    }
    this.setData({
      day: arr
    })
  },
  bgColor() {  //背景颜色类
    console.log(font_COLOR[Math.floor(Math.random() * font_COLOR.length)])
    this.setData({
      color1: COLORS[Math.floor(Math.random() * COLORS.length)],
      color2: COLORS[Math.floor(Math.random() * COLORS.length)],
      color3: COLORS[Math.floor(Math.random() * COLORS.length)],
      // C_1: font_COLOR[Math.floor(Math.random() * font_COLOR.length)],
      // C_2: font_COLOR[Math.floor(Math.random() * font_COLOR.length)],
      // C_3: font_COLOR[Math.floor(Math.random() * font_COLOR.length)],
      // C_4: font_COLOR[Math.floor(Math.random() * font_COLOR.length)]
    })
  },
  selectDate(e){
    console.log('我选择的日期时',e.currentTarget.dataset.ytd)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})