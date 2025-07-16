function updateClock() {
    const now = new Date();

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12

    // Format minutes and seconds to always show two digits
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const currentTime = `${hours}${ampm}:${minutes}:${seconds}`;


    // Run every second
    document.getElementById('clock').textContent = currentTime;

}
// Run every second
setInterval(updateClock, 1000)

// Run once immediately to avoid 1s delay
updateClock()