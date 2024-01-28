$(document).ready(() => {
    let seconds = 0;
    let minutes = 0;
    setInterval(() => {
        if (seconds == 60) {
            minutes++;
            $('.minutes').html(`${minutes} minute(s) `)
            seconds = 0;
        }
        $('.seconds').html(`${seconds} second(s)`);
        seconds++;
    }, 1000);
})