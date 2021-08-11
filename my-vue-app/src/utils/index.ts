export default {
  initShareInfo (wx: any) {
    let shareInfo = {
      title: '张俊鹏的分享', // 分享标题
      desc: '米兰小铁匠', // 分享描述
      link: 'http://www.zjpzjp.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: '', // 分享图标
    }
    wx.onMenuShareAppMessage(shareInfo);
    wx.onMenuShareTimeline(shareInfo);
    wx.onMenuShareQQ(shareInfo);
    wx.onMenuShareQZone(shareInfo);

    // wx.updateAppMessageShareData(shareInfo);
    // wx.updateTimelineShareData(shareInfo);
  }
}