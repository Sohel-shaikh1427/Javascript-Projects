// let clock =() => {
// const getDate = new Date();

// const date = getDate.getDate();
// document.getElementById("Date").innerHTML = date;

// const month = getDate.getMonth();
// document.getElementById("month").innerHTML = month;

// const year = getDate.getFullYear();
// document.getElementById("year").innerHTML = year;

// const hours = getDate.getHours() % 12 || 12;
// document.getElementById('hours').innerHTML = hours;


// const minutes = getDate.getMinutes();
// document.getElementById("minutes").innerHTML = minutes;

// const seconds = getDate.getSeconds();
// document.getElementById("seconds").innerHTML = seconds;


// }



// if(month == 0){
//     document.getElementById("month").innerHTML = 'Jan';
// }
//  else if(month == 7){
//     document.getElementById("month").innerHTML = 'Aug';
// }
// else if{
// }




clock = () => {
    const date = new Date();


    let day = date.getDay();
    let date1 = date.getDate();
    let month = date.getMonth() +1; 
    let year = date.getFullYear();

    
    if(day == 0){
        day = "Sun";
    }
    else if(day == 1){
        day = "Mon";
    }
    else if(day == 2){
        day = "Tue"
    }
    else if(day == 3){
        day = "Wed"
    }
    else if(day == 4){
        day = "Thu"
    }
    else if(day == 5){
        day = "Fri"
    }
    else if(day ==6){
        day = "Sat"
    }

    if(date1 < 10){
        date1 = "0"+date1
    }

    if(month < 10){
        month = "0"+month
    }

    let fullDate = `${day}, ${date1}/ ${month}/ ${year} `
    document.getElementById("clock").innerHTML = fullDate;


    let hour = date.getHours() % 12 || 12 ;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let isSession = date.getHours() < 12;


  
    
    if(hour < 10){
        hour = "0"+hour
    }

    
    if(minute < 10){
        minute = "0"+minute
    }
    if(second < 10){
        second = "0"+second
    }

    let fullTime = `${hour} : ${minute} : ${second} ${isSession ? "AM" : "PM"}`
    document.getElementById("time").innerHTML = fullTime;
}

setInterval(() => {
    clock();

}, 1000)