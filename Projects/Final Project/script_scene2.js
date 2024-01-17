document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const clickToContinue = document.getElementById("clickToContinue");
    const newBox = document.getElementById("newBox");
    const newBox2 = document.createElement("div"); // Create newBox2 dynamically
    newBox2.id = "newBox2";
    newBox2.className = "new-box";
    newBox2.innerHTML = "<img src='fake.png' alt='first visualization' style='width:75%;height:auto'/> <p>When Dave saw this, he wasn't entirely sure what it meant; His team explained to him that the left y-axis represents the number of databreaches in Washington by year (represented on the x axis) while the right y-axis represents the number of electric vehicles by model year. They noted that in <b>2021</b>, there were <b>1175</b> recorded databreaches, but in <b>2020</b>, there were only <b>233</b>. Accordingly, they also said that there were <b>45,244</b> EVs compared to <b>27,680</b> on the respective data points.</p><p>The correlation, to Dave, was very evident and concerning.</p>";
    document.body.appendChild(newBox2);

    let clickCount = 0; // Track the number of clicks

    document.addEventListener("click", function () {
        clickCount++;

        if (clickCount === 1) {
            // Show overlay and popup on the first click
            overlay.style.display = "block";
            popup.style.display = "block";

            // Show "Click to continue" text after 20 seconds
            setTimeout(function () {
                clickToContinue.style.opacity = 1;
            }, 20000);
        } else if (clickCount === 2) {
            // Slide off to the left and disappear on the second click
            popup.style.animation = "slideOff 0.8s ease-out forwards";

            // Show new box after the animation duration
            setTimeout(function () {
                newBox.style.display = "block";
                newBox.style.animation = "slideIn 0.8s ease-in forwards";
            }, 800);
        } else if (clickCount === 3) {
            // Show second new box on the third click
            newBox2.style.display = "block";
            newBox2.style.animation = "slideIn2 0.8s ease-in forwards";
        } else if (clickCount === 4) {
            // Redirect to scene3.html on the fourth click
            window.location.href = "scene3.html";
        }
    });
});
