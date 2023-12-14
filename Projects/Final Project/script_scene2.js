document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const clickToContinue = document.getElementById("clickToContinue");
    const newBox = document.getElementById("newBox");

    document.addEventListener("click", function () {
        // Show overlay and popup on click
        overlay.style.display = "block";
        popup.style.display = "block";

        // Show "Click to continue" text after 20 seconds
        setTimeout(function () {
            clickToContinue.style.display = "block";
        }, 20000);
    });

    // Add click event for sliding off the popup and showing new box
    popup.addEventListener("click", function () {
        // Slide off to the left and disappear
        popup.style.animation = "slideOff 0.8s ease-out forwards";

        // Show new box after the animation duration
        setTimeout(function () {
            newBox.style.display = "block";
            newBox.style.animation = "slideIn 0.8s ease-in forwards";
        }, 800); // Adjust the timing if needed
    });
});
