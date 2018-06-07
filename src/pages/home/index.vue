<template>
    <div>
        <div>{{count}}</div>
        <button @tap='add'>加</button>
        <div>{{userInfo.nickName}}</div>
        <button @tap='getUserInfo' open-type='getUserInfo'>获取用户信息</button>
        <button @tap='getData'>发送请求</button>
        <button @tap='goArticle'>到文章页</button>
        <button @tap='goMap'>到地图页</button>
    </div>
</template>

<script>
import wxp from 'minapp-api-promise'
import HttpService from '@/httpservice'
export default {
    data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      count:0
    }
  },
  methods:{
      add(){
          this.count++
      },
      goArticle(){
          wxp.navigateTo({
              url:'/pages/articles/main'
          })

      },
      goMap(){
          wxp.navigateTo({
              url:'/pages/map/main'
          })
      },
      async getUserInfo(){
          try{
                let res = await wxp.getUserInfo();
                this.userInfo = res.userInfo;
                console.log(this.userInfo)
          }catch(err){
              console.log(err)
              console.log('获取用户信息失败')
          }
          
      },
      async getData(){
          try{
              let res = await HttpService.getArticles({
                  tab:'all'
              });
              console.log(res)
          }catch(err){
              console.log('请求失败')
          }

          try{
              let res = await HttpService.getArticles({
                  tab:'good'
              });
              console.log(res)
          }catch(err){
              console.log('请求失败')
          }
      },
      async getAllArticles(){
          try{
              let res = await HttpService.getArticles({
                  tab:'all'
              });
              console.log(res)
          }catch(err){
              console.log('请求失败')
          }
      },
      async getGoodArticles(){
          try{
              let res = await HttpService.getArticles({
                  tab:'good'
              });
              console.log(res)
          }catch(err){
              console.log('请求失败')
          }
      }
  }
}
</script>

<style lang="scss" scoped>

</style>

