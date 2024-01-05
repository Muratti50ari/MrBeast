
const myDate = new Date(),
    month = myDate.getMonth()
    date = myDate.getDate()
    day = myDate.getDay()
    year = myDate.getFullYear();

const months = ["January", 'February','March','April','May',
'June','July','August','September','October','November','December'];

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


const dateEl = document.getElementById('date');
const aEl = document.getElementById('k');

dateEl.innerHTML = `${days[day]}, ${months[month]}  ${date}, ${year}`;

