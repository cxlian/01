// pages/telAscription/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText:null,
    retData:null,
    textshow:"none"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  input:function(e){
    this.setData({ inputText:e.detail.value})
  },
  getTelAscrip: function (phone, cb) {
    wx.request({
      url: 'https://apicloud.mob.com/v1/mobile/address/query?key=520520test&phone=' + phone,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        cb(res.data)
      }
    })
  },
  btnClick:function(){
  
    var thispage=this;
    this.getTelAscrip(this.data.inputText, function (data){
      thispage.setData({ retData: data});
    });
    thispage.setData({ textshow: "block" });
  }
})