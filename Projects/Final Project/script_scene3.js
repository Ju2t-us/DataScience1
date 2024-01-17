document.addEventListener("DOMContentLoaded", function () {
    const cloud = document.querySelector(".bobbing-cloud");
    const fadeText = document.querySelector(".fade-in-text");
    const overlayText = document.querySelector(".overlay-text");

    let clickCount = 0;

    cloud.addEventListener("click", function () {
        clickCount++;

        if (clickCount === 1) {
            // First click behavior (image zooms and fade-in text disappears)
            cloud.classList.add("clicked"); // Add the "clicked" class


            // Hide the fade-in text after 2 seconds
            setTimeout(function () {
                fadeText.style.display = "none";


                // Display overlay text with HTML content after a delay
                setTimeout(function () {
                    overlayText.innerHTML = "<p>So Dave went on to base his entire campaign off this information and, whether or not he won mayorship, he made a critical mistake:</p> <p><b>He didn't do independent research or use critical thinking to verify what he had been told.</b></p><p>Here's the reality of the situation:</p> <img src='real.png' alt='Second visualization' style='width:75%;height:auto;'/> <p>Dave's team manipulated the data to make it seem like there was strong correlation when there really wasn't. While the databreach count did have a spike in 2021, the model years of EVs have been steadily increasing over time. <b>In fact, on the first visualization, the years for the EV model year count had been shifted to the left by two entire years!</b> This made it appear as though the count at 2023 was actually the count at 2021.</p><p>You may also have noticed that on the previous model, all data seemed to cut off at 2021, which means we have no idea if one variable ended up increasing while the other was decreasing or vice versa. Let's take a look at the previous visualization again.</p><p><b>Fake:</b></p><img src='fake.png' alt='first visualization' style='width:75%;height:auto;'/><ul><li>Cut off at outdated year</li><li>Line representing count for EVs has been shifted</li></ul><p>V.S</p><p><b>Real:</b></p><img src='real.png' alt='Second visualization' style='width:75%;height:auto;'/><ul><li>Data continues until present year</li><li>No inaccurate manipulation or shifting done</li></ul><p>Here's another way to look at the accurate information:<img src='both.png' alt='Bar graph visualization' style='width:75%;height:auto;'/> <p> This bar graph clearly shows that while there is a period of years while they are both increasing, <b>the tendencies for databreaches decreases while EVs increase.</b></p></ br><p>Click anywhere on the screen to continue</p>";
                }, 500); // Adjust the delay time as needed
            }, 2000);
        } else if (clickCount === 2) {
            // Second click behavior (navigate to scene4.html)
            window.location.href = "scene4.html";
        }
    });
});
