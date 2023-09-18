const min = document.getElementById("m")
const hr = document.getElementById("h")
let btn = document.getElementById("btn")
let am = document.getElementById("Am")
let invalidData = document.getElementById("please")
let str = ""
let main = document.querySelector(".main")
const zero = "0"
let temp = 0
const audio = document.getElementById("Audio")
let lastStr = ""

let clockHr
let clockMin
let clockAm

let alamrHr
let alarmMin
let alarmAm

//for hr data
const inputHours_Mins = () =>{

  btn.addEventListener("click",function(){
if(temp == 0){
      if((hr.value >= 1 && hr.value <= 12) && (min.value >= 0 && min.value <=60)){
       let res = Am_Pm()
       if(hr.value < 10){
        hr.value = zero+hr.value
      }
        if(min.value < 10){
        min.value = zero+min.value
        }
        invalidData.innerText = "Alarm will ring on "+hr.value+" : "+min.value +" "+res

        lastStr = "Alarm will ring on "+hr.value+" : "+min.value +" "+res
        

        alamrHr = hr.value
        alarmMin = min.value

        //for ringing function

        //for clear alarm
        btn.innerText = "Clear Alarm"
        min.style.cursor = "not-allowed"
        hr.style.cursor = "not-allowed"
        am.style.cursor = "not-allowed"
        hr.disabled = true
        min.disabled = true
        am.disabled = true
      }
      else{
        invalidData.innerText = "Enter valid data"
      }
      temp = 1
    }

    

else{
  btn.innerText = "Set Alarm"
  location.reload()
  temp = 0
}
    })
  }


inputHours_Mins()
//For min data



const realClock = () => {
  let time = document.getElementById("real")
     let clock = new Date
     let hr = clock.getHours()
     let min = clock.getMinutes()
     let sec = clock.getSeconds()
     let m = ""
     if(hr>12){
        hr = hr - 12;
     }
//for am and pm
    if(hr>12){
      m = "AM"
    }
    else{
      m = "PM"
    }
    
    clockAm = m



     if(hr < 10){
        hr = "0"+hr
     }
     if(min<10){
      min = "0"+min
     }
     if(sec<10){
      sec = "0"+sec
     }

     time.innerText = hr+" : "+min+" : "+sec+" "+m

     clockHr = hr
     clockMin = min
}

setInterval(() => {
  realClock()
}, 1000);

const AlarmFunciton = () => {
  let errorText = document.getElementById("please")

    
}

AlarmFunciton()

const Am_Pm = () => {
  let amString = ""
       if(am.value === "AM"){
          amString = "AM"
          alarmAm = amString
          return amString
       }
       if(am.value === "PM"){
         amString = "PM"
         alarmAm = amString
         return amString
       }
}

const ringAlarm =() => {
  setInterval(() => {
     if(clockHr == alamrHr && clockMin == alarmMin && clockAm == alarmAm){
      console.log(clockHr,alamrHr)
      console.log(clockMin,alarmMin)
      console.log(clockAm,alarmAm)
      console.log("boom")
      audio.play()
      invalidData.innerText = "☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️"
     }
     if(clockMin != alarmMin){
      audio.pause()
    }
    },1000)
}

ringAlarm()