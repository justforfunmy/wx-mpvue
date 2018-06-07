<template>
    <div>
        <div>高德地图</div>
        <div>
            <button @tap='chooseStart'>起点</button>
            <div>{{start.name}}</div>
        </div>
        <div>
            <button @tap='chooseEnd'>终点</button>
            <div>{{end.name}}</div>
        </div>
        <button @tap='getRoute'>获取路线</button>
        <div class="img_box">
            <img :src="src">
        </div>
    </div>
</template>

<script>
import wxp from 'minapp-api-promise'
var amapFile = require('../../lib/amap-wx.js')
var myAmapFun;
export default {
    data(){
        return {
            src:'',
            start:{
                name:''
            },
            end:{
                name:''
            },
            polyline:''
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
        getRoute(){
            let origin = this.start.longitude+','+this.start.latitude;
            let destination = this.end.longitude+','+this.end.latitude;
            let that = this;
            myAmapFun.getDrivingRoute({
                origin:origin,
                destination:destination,
                success:res=>{
                    console.log(res)
                    let paths = res.paths;
                    let steps = paths[0].steps;
                    let polyline = ''
                    steps.map(val=>{
                        polyline = polyline+val.polyline+';'
                    })
                    that.getImg(polyline)
                }
            })
        },
        getImg(polyline){
            let newPoly = polyline.substr(0,polyline.length-1);
            console.log(newPoly)
            let arr = polyline.split(';');
            let middleIdx = Math.ceil((arr.length)/2)
            let that = this;
            wx.getSystemInfo({
                success: function(data){
                    var height = 500;
                    var width = data.windowWidth;
                    var size = width + "*" + height;
                    myAmapFun.getStaticmap({
                        location:arr[middleIdx],
                        zoom: 14,
                        size: size,
                        scale: 2,
                        paths: "10,0x0000ff,1,,:"+newPoly,
                        success: function(data){
                            console.log(data)
                            that.src = data.url
                        },
                        fail: function(info){
                            wx.showModal({title:info.errMsg})
                        }
                    })

                }
            })
        }
    },
    onLoad(){
        var that = this;
        myAmapFun = new amapFile.AMapWX({key:"a59e12827981c42488ea125efebd6a50"});
        
    }
}
</script>

<style lang="scss" scoped>
.img_box{
  width: 100%;
  height: 500px;
}
.img_box image{
  width: 100%;
  height: 100%;
}
</style>


