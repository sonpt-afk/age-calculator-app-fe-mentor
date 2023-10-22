function calculateAge(day,month,year) {
    var birthDate = new Date(year, month-1, day);
    var currentDate = new Date();
    var timeDiff = currentDate - birthDate;
    var ageInYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    var ageInMonths = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    var ageInDays = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    return {        "ageInYears": ageInYears,
            "ageInMonths": ageInMonths,
            "ageInDays": ageInDays
}
}

let inputDay = document.querySelector('.app-time-unit-day')
let inputMonth = document.querySelector('.app-time-unit-month')
let inputYear = document.querySelector('.app-time-unit-year')

let btn = document.querySelector('.app-icon');
btn.onclick = function() {
    var warningDay = document.querySelector('.app-time-warning-day');
    var warningMonth = document.querySelector('.app-time-warning-month');
    var warningYear = document.querySelector('.app-time-warning-year');
//check if value from one of the input empty, if yes display warning    
    if (inputDay.value == "") {
        warningDay.classList.remove('hide');
    }
    if (inputMonth.value == "") {
        warningMonth.classList.remove('hide');
        
    }
    if (inputYear.value == "") {
        warningYear.classList.remove('hide');
    
    }
//if one of the input empty, dont display result
    if (inputDay.value == "" || inputMonth.value == "" || inputYear.value == "") {
       
       
    }else{

    
var age = calculateAge(inputDay.value, inputMonth.value, inputYear.value);
console.log("Bạn đã sống: " + age.ageInYears + " năm " + age.ageInMonths + " tháng " + age.ageInDays + " ngày.");
let emptyBar =Array.from(document.querySelectorAll('.app-result-empty'));
console.log(emptyBar);
emptyBar.map((i) => {
    i.innerHTML =""
})
let displayYear = document.querySelector('.app-result-year')
    let textNode = document.createTextNode(`${age.ageInYears}`);
    displayYear.appendChild(textNode)

let displayMonth = document.querySelector('.app-result-month')
    let textNode1 = document.createTextNode(`${age.ageInMonths}`);
displayMonth.appendChild(textNode1)

let displayDay = document.querySelector('.app-result-day')
    let textNode2 = document.createTextNode(`${age.ageInDays}`);
    displayDay.appendChild(textNode2)
console.log(displayDay)
}
}






