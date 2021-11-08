
const weatherForm= document.querySelector('form')
const search= document.querySelector('input')
const msg1= document.querySelector('#msg-1')
const msg2= document.querySelector('#msg-2')
const msg3= document.querySelector('#msg-3')
const msg4= document.querySelector('#msg-4')
const msg5= document.querySelector('#msg-5')
const msg6= document.querySelector('#msg-6')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const location=search.value
    msg1.textContent="Loading.."
    msg2.textContent=""
    msg3.textContent=""
    msg4.src=""
    msg5.textContent=""
    msg6.textContent=""

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
                msg5.textContent=data.forecast.last_updated
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