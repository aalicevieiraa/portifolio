
const nameElement = document.getElementById("name");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    nameElement.style.transform = `translate(${mouseX / 10}px, ${mouseY / 10}px)`;
});