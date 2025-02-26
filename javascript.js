document.querySelectorAll('a[href^="https://engravedforu.square.site/"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Stops the default jump
        const targetId = this.getAttribute("href").split("/").pop(); // Gets last part of URL
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Scrolls smoothly
                behavior: "smooth"
            });
        }
    });
});



document.getElementById("menu-toggle").addEventListener("click", function () {
    let menu = document.getElementById("main-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});