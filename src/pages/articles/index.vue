<template>
    <div>
        <div></div>
    </div>
</template>

<script>
import HttpService from '@/httpservice'
export default {
    data(){
        return {
            list:[]
        }
    },
    async mounted(){
        try{
            let list = await HttpService.getArticles({
                tab:'all'
            })
            this.list.push(list[0])
        }catch(err){
            console.log(err)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


