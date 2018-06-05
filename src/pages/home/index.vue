<template>
    <div>
        <div>{{count}}</div>
        <button @tap='add'>加</button>
        <div>{{userInfo.nickName}}</div>
        <button @tap='getUserInfo' open-type='getUserInfo'>获取用户信息</button>
    </div>
</template>

<script>
import wxp from 'minapp-api-promise'
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
      async getUserInfo(){
          try{
                let res = await wxp.getUserInfo();
                this.userInfo = res.userInfo;
                console.log(this.userInfo)
          }catch(err){
              console.log(err)
              console.log('获取用户信息失败')
          }
          
      }
  }
}
</script>

<style lang="scss" scoped>

</style>

