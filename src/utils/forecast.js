const request= require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherapi.com/v1/forecast.json?key=f5fd27999dcd471ea2924531212809&q='+latitude+','+longitude+'&aqi=yes&units=si'

    request({url: url,json:true},(error,{body})=>{
        if(error){
            callback("unable to connect",undefined)
        } 
        else if(body.error){
            callback("unable to find location",undefined) 
        }
        else{
            callback(undefined,{temprature:body.current.temp_c,
                                text:body.current.condition.text,
                                icon:body.current.condition.icon,
                                updated:body.current.last_updated,
                                isday:body.current.is_day})
        }
    })
}

module.exports=forecast