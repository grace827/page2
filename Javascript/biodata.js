// Initialize PhoenixCode Animations
document.addEventListener("DOMContentLoaded", function () {
    PhoenixCode.init({
        target: "h1",
        animation: "fadeInUp",
        duration: 2000,
    });

    PhoenixCode.init({
        target: "img",
        animation: "fadeIn",
        duration: 1500,
        delay: 500,
    });

    PhoenixCode.init({
        target: "table",
        animation: "fadeIn",
        duration: 2000,
    });
});
