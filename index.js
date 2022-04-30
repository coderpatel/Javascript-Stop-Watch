var start = document.getElementById('start');
var stopp = document.getElementById('stop');
var reset = document.getElementById('reset');

var milsecond = document.getElementById('milsecond');
var second = document.getElementById('second');

var hasStarted = false;// to tell whether the clock has started or not

var mSecond=0;//initial milli-second value
var sec = 0;//initial second value

var interval; //to store the interval id

//this function will increase the millisecond and second value
function startTimer(){
    mSecond++;
    if(mSecond<10){
        milsecond.innerHTML ='0'+mSecond;
    }
    if(mSecond>10){
        milsecond.innerHTML = mSecond;
    }

    if(mSecond>99){
        sec++;
        if(sec<10){
            second.innerHTML = "0"+sec;
        }
        mSecond = 0;
        milsecond.innerHTML = "00";
    }

    if(sec>9){
        second.innerHTML = sec;
    }
}

//will start the timer
start.addEventListener('click',function(){
    if(!hasStarted){
        interval = setInterval(startTimer);
    }
    hasStarted = true;
})

//will stop the timer
stopp.addEventListener('click',function(){
    clearInterval(interval);
    hasStarted = false;
})

//will reset the time
reset.addEventListener('click',function(){
    clearInterval(interval);
    mSecond = 0;
    sec = 0;
    milsecond.innerHTML ="00";
    second.innerHTML = "00";
    hasStarted = false;
})