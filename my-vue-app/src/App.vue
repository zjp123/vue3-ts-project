<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cookies from 'js-cookie'
import HelloWorld from './components/HelloWorld.vue'
import API from './api'
import Share from "./utils"

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  created () {
    
  },
  mounted () {
    // this.checkAuth()
    console.log(Cookies, Cookies.get('foo'), 'ggg')
    // http%3A%2F%2Fwww.zjpzjp.com
    // window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1f0b3056e2b9b0cd&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
    // window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1f0b3056e2b9b0cd&redirect_uri=http%3A%2F%2Fwww.zjpzjptest.com%3A3000&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
  },
  methods: {
    checkAuth () {
      let openId = Cookies.get('openId')
      if (!openId) {
        // window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1f0b3056e2b9b0cd&redirect_uri=http%3A%2F%2Fwww.zjpzjptest.com%3A3000&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
        window.location.href = API.wechatRedireact
      } else {
        this.getWechatConfig()
      }
    },
    async getWechatConfig () {
      // console.log(this.$http)
      let result
      const wx = window['wx']
      try {
        result = await this.$http.get(API.wechatConfig + '?url='+location.origin) // 这个是为了签名
        if (result.status === 200) {
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: result.appId, // 必填，公众号的唯一标识
            timestamp: result.timestamp, // 必填，生成签名的时间戳
            nonceStr: result.nonceStr, // 必填，生成签名的随机串
            signature: result.signature,// 必填，签名
            jsApiList: result.jsApiList // 必填，需要使用的JS接口列表
          });
          wx.ready(function(){
            console.log('微信sdk准备好了')
            Share.initShareInfo(wx)
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          });
        }
      } catch (error) {
        
      }
      
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
