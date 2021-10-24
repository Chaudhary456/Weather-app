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
            callback(undefined,{text:body.forecast.forecastday[0].day.condition.text,
                                icon:body.forecast.forecastday[0].day.condition.icon})
        }
    })
}

module.exports=forecast