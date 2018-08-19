/* wx.js */
export const wxPromise = (params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:params.url,
            data:params.data,
            header:params.header,
            method:params.method,
            dataType:params.dataType,
            responseType:params.responseType,
            success:resolve,
            fail:reject
        })
    })
}