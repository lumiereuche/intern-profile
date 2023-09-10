function updateUTCTime() {
    const ct = new Date().getTime()
    const utcTimeElement = document.querySelector("[data-test-id=currentUTCTime]")
    utcTimeElement.textContent=ct.toString()
}
updateUTCTime()
setInterval(updateUTCTime,1000)