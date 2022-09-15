window.addEventListener("DOMContentLoaded", (event) => {
    let tas = document.getElementsByTagName('textarea');
    for (let i = 0; i < tas.length; i++) {
        tas[i].style.height = tas[i].style.scrollHeight;
    }
})