
const weatherForm= document.querySelector('form')
const search= document.querySelector('input')
const msg1= document.querySelector('#msg-1')
const msg2= document.querySelector('#msg-2')
const msg3= document.querySelector('#msg-3')
const msg4= document.querySelector('#msg-4')
const msg5= document.querySelector('#msg-5')
const msg6= document.querySelector('#msg-6')
const msg7= document.querySelector('#msg-7')
const msg8= document.querySelector('#msg-8')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const location=search.value
    msg1.textContent="Loading.."
    msg2.textContent=""
    msg3.textContent=""
    msg4.src=""
    msg5.textContent=""
    msg6.textContent=""
    msg7.textContent=""
    msg8.textContent=""

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                msg1.textContent=data.error
                // console.log(data.error)
            }else{
                msg1.textContent=data.location
                msg2.textContent=data.forecast.temprature+" °C"
                msg3.textContent=data.forecast.text
                msg4.src=data.forecast.icon
                msg7.textContent="AQI PM2.5 : "+data.forecast.pm2_5
                msg8.textContent="AQI PM10 : "+data.forecast.pm10
                msg5.textContent="Last Updated: "+data.forecast.updated
                if(data.forecast.isday){
                    msg6.textContent="Day"
                }
                else{
                    msg6.textContent="Night"
                }

                // console.log(data.location)
                // console.log(data.forecast)
            }
        })
    })

})