<template>
    <div>
        <div></div>
    </div>
</template>

<script>
import HttpService from '@/httpservice'
import {wxPromise} from '../../httpservice/wx.js'
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        /* 使用 */
        getData(){
            let baseUrl = 'https://tsj.half-candy.com';
            wxPromise({
                url:`${baseUrl}/api/Shops`
            }).then(res=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


