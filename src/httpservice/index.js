import fly from '@/utils/fly'

const LOGIN = '/weapp/login'

export default {
    requestUrl:{
        LOGIN
    },
    login(params){
        return fly.request(this.requestUrl.LOGIN,{},{
            method:'GET',
            headers:{
                'X-WX-Code':params.code
            }
        })
    }
}