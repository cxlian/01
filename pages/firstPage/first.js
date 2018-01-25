Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"this is a text",
    button:"this is a button",
    show:true,
    news: ['111', '222', '333'],
    pageBack:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("---first onLoad---")
    this.setData({ pageBack: options.page})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("---first onReady---")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    console.log("---first onShow---")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("---first onHide---")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("---first onUnload---")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("---first onPullDownRefresh---")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("---first onReachBottom---")
  },

  btnClick:function(event){
    console.log("button is clicked.");
    console.log(event)
    var isShow = this.data.show;
    console.log("isShow:" + isShow);

    var newsdata = this.data.news;
    newsdata.shift()

    this.setData({ text: "this is new content....", show: !isShow, news: newsdata});


  }
})