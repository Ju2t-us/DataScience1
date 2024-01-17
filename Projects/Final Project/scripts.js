document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const fadeText = document.querySelector(".fade-in-text");


    document.addEventListener("click", function () {
        container.style.animation = "none"; // Remove the bouncing animation
        fadeText.style.animation = "none"; // Remove the fadeIn animation


        // Set opacity to 0 and hide the elements after the animations are removed
        setTimeout(function () {
            container.style.opacity = 0;
            fadeText.style.opacity = 0;
        }, 10);


        // Remove the elements from the DOM after a short delay
        setTimeout(function () {
            container.style.display = "none";
            fadeText.style.display = "none";


            // Redirect to scene2.html after hiding elements
            window.location.href = "scene2.html";
        }, 600);
    });
});
