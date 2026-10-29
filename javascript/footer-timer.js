function footerClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let am_or_pm = "AM";

    if (hours >= 12) {
        am_or_pm = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"];

    let time = hours + ":" + minutes + ":" + seconds + " " + am_or_pm;

    let date =
        days[now.getDay()] + ", " +
        months[now.getMonth()] + " " +
        now.getDate() + ", " +
        now.getFullYear();

    document.getElementById("slClock").innerHTML = time;
    document.getElementById("slDate").innerHTML = date;
}

footerClock();

setInterval(footerClock, 1000);
