<template>
    <div>
        <text>腾讯地图sdk </text>
        <div>
            <button @tap='chooseStart'>起点</button>
            <div>{{start.name}}</div>
        </div>
        <div>
            <button @tap='chooseEnd'>终点</button>
            <div>{{end.name}}</div>
        </div>
        <button @tap='getDistance' data-type='driving'>计算驾车距离</button>
        <div>驾车距离:{{drivingDistance}}米</div>
        <button @tap='getDistance' data-type='walking'>计算步行距离</button>
        <div>步行距离:{{walkingDistance}}米</div>
    </div>
</template>

<script>
// 引入SDK核心类
import wxp from 'minapp-api-promise'
import QQMapWX from '../../lib/qqmap-wx-jssdk.js'
var qqmapsdk
// var QQMapWX = require('../../lib/qqmap-wx-jssdk.js') 
export default {
    data(){
        return {
            start:{
                name:'起点'
            },
            end:{
                name:'终点'
            },
            drivingDistance:0,
            walkingDistance:0
        }
    },
    methods:{
        async chooseStart(){
            let start = await wxp.chooseLocation();
            this.start = start
            
        },
        async chooseEnd(){
            let end = await wxp.chooseLocation();
            this.end = end
            
        },
        getDistance(e){
            // 调用接口
            let start = this.start
            let end = this.end
            let type = e.currentTarget.dataset.type;
            let a = this;
            qqmapsdk.calculateDistance({
                mode:type,
                from:{
                    latitude:start.latitude,
                    longitude:start.longitude
                },
                to:[{
                    latitude: end.latitude,
                    longitude: end.longitude
                }],
                success: function(res) {
                    let distance = res.result.elements[0].distance;
                    type=='driving'?a.drivingDistance = distance:a.walkingDistance = distance
                    console.log(res);
                },
                fail: function(res) {
                    console.log(res);
                },
                complete: function(res) {
                    console.log(res);
                }
            });
        }
    },
    onLoad(){
        qqmapsdk = new QQMapWX({
            key:'RIIBZ-BET6U-ZZ3VR-BM4AE-PLIWO-SOF5M'
        })
    },
    
    
}
</script>

<style lang="scss" scoped>

</style>


