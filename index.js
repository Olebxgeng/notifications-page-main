
const notice = document.getElementById("new-notice")
const notice1 = document.getElementById("new-notice1")
const notice2 = document.getElementById("new-notice2")
const notificationTimeout = setTimeout(readNotice, 5000);

function readNotice(){
    notice.classList.toggle("read-notice")
    notice1.classList.toggle("read-notice")
    notice2.classList.toggle("read-notice")
}