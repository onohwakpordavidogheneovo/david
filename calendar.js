document.getElementById("myButton").onclick = function (){
    location.href = 'https://tithe.ly/give_new/www/#/tithely/give-one-time/498566';
};


let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = [
    "Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May", 
    "Jun", 
    "Jul", 
    "Aug", 
    "Sep", 
    "Oct", 
    "Nov", 
    "Dec"
];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function showCalendar(Month, Year) {
    let firstDay = new Date(Month, Year).getDay();
    let daysInMonth = 32 - new Date(Month, Year, 32).getDay();

    let tbl = document.getElementById("calendar-body");

    tbl.innerHTML = " ";
    monthAndYear.innerHTML = months[" "] + " " + Year;
    let date = 1;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
    
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay){
                let cell = document.createElement('td')
                let cellText = document.createTextNode(" ");
                cell.appendChild(cellText);
                row.appendChild(cell);

            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement('td');

                let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            date++
        }
        tbl.appendChild(row);
    }
}

function previous() {
    currentYear = (currentMonth === 0)? currentYear: currentYear - 1;
    currentMonth = currentMonth === 0? 11: currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear); 
}