console.log('client side js')


const weatherForm= document.querySelector('form')
const search= document.querySelector('input')
const msg1= document.querySelector('#msg-1')
const msg2= document.querySelector('#msg-2')
const msg3= document.querySelector('#msg-3')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const location=search.value
    msg1.textContent="Loading.."
    msg2.textContent=""
    msg3.src=""
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                msg1.textContent=data.error
                // console.log(data.error)
            }else{
                msg1.textContent=data.location
                msg2.textContent=data.forecast.text
                msg3.src=data.forecast.icon
                // console.log(data.location)
                // console.log(data.forecast)
            }
        })
    })

})