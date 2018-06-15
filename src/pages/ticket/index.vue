<template>
    <canvas canvas-id = 'my_Canvas'></canvas>
</template>

<script>
import wxp from 'minapp-api-promise'
export default {
    data(){
        return {
            imgSrc:'https://sbjt.half-candy.com/images/1.jpg',
            systemInfo:{}
        }
    },
    methods:{
        async draw(){
            let that = this;
            let ctx = wx.createCanvasContext('my_Canvas');
            // let x = 0-that.systemInfo.windowWidth*0.4;
            // let y = 0-that.systemInfo.windowHeight*0.3;
            // console.log(x,y)
            let tWid = 753*0.75
            let tHig = 790*0.75
            try{
                let res = await wxp.downloadFile({
                    url:that.imgSrc
                })
                ctx.drawImage(res.tempFilePath,0,0,tWid,tHig)
            }catch(err){
                console.log(err)
            }
            ctx.setFillStyle('red')
            ctx.fillText('哈哈哈',230,0)
            ctx.rotate(60 * Math.PI / 180)
            ctx.fillText('哈哈哈1',180,-70)
            ctx.draw(true)
        }
    },
    async onLoad(){
        let that = this;
        try{
            let systemInfo = await wxp.getSystemInfo()
            that.systemInfo = systemInfo;
        }catch(err){
            console.log(err)
        }
    },
    async onShow(){
        this.draw()
    }
}
</script>

<style lang="scss" scoped>
canvas{
    width: 100%;
    height: 100vh;
}
</style>


