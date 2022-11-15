const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", (event) => {
    const x = (event.pageY - btnE1.offsetLeft);
    const y = (event.pageY - btnE1.offsetTop);

btnE1.getElementsByClassName.setProperty("--xPos", x + "px");
btnE1.getElementsByClassName.setProperty("--yPos". x + "px");
});