import fly from '@/utils/fly'

const GETARTICLES = 'topics'

export default {
    requestUrl:{
        GETARTICLES
    },
    getArticles(params){
        return fly.get(this.requestUrl.GETARTICLES,{
            ...params
        })
    }
}