document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const clickToContinue = document.getElementById("clickToContinue");
    const newBox = document.getElementById("newBox");
    // Add reference for newBox2
    const newBox2 = document.getElementById("newBox2");

    document.addEventListener("click", function () {
        // Show overlay and popup on click
        overlay.style.display = "block";
        popup.style.display = "block";

        // Show "Click to continue" text after 20 seconds
        setTimeout(function () {
            clickToContinue.style.opacity = 1;
        }, 20000);
    });

    // Add click event for sliding off the popup and showing new boxes
    popup.addEventListener("click", function () {
        // Slide off to the left and disappear
        popup.style.animation = "slideOff 0.8s ease-out forwards";

        // Show new box after the animation duration
        setTimeout(function () {
            newBox.style.display = "block";
            newBox.style.animation = "slideIn 0.8s ease-in forwards";
        }, 800); // Adjust the timing if needed

        // Show second new box after the first new box
        setTimeout(function () {
            newBox2.style.display = "block";
            newBox2.style.animation = "slideIn2 0.8s ease-in forwards";
        }, 1600); // Adjust the timing if needed
    });
});
