javascript:(function() {
    // Remove Securly elements
    const elementsToRemove = document.querySelectorAll("div.head-top, div.wonderbar");
    elementsToRemove.forEach(function(element) {
        element.remove();
    });

    // Remove certain buttons
    const buttonsToRemove = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
    buttonsToRemove.forEach(function(button) {
        button.remove();
    });

    // Create and append a cover iframe
    const coverIframe = document.createElement("iframe");
    coverIframe.style.position = "fixed";
    coverIframe.style.top = "0";
    coverIframe.style.left = "0";
    coverIframe.style.width = "100%";
    coverIframe.style.height = "100%";
    coverIframe.style.border = "none";
    coverIframe.style.backgroundColor = "white"; 
    document.body.appendChild(coverIframe);

    // Create and append a toggle button
    const toggleButton = document.createElement("button");
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "50%";
    toggleButton.style.left = "50%";
    toggleButton.style.transform = "translate(-50%, -50%)";
    toggleButton.style.width = "800px";
    toggleButton.style.height = "200px";
    toggleButton.style.borderRadius = "100px";
    toggleButton.style.backgroundColor = "red";
    toggleButton.style.color = "white";
    toggleButton.style.fontSize = "100px";
    toggleButton.style.fontWeight = "bold";
    toggleButton.style.cursor = "pointer";
    toggleButton.textContent = "OFF";
    toggleButton.addEventListener("click", function() {
        // Check if Securly is already disabled and display button accordingly
        if (this.textContent === "OFF") {
            this.style.backgroundColor = "blue";
            this.textContent = "ON";
            // Here, you can add the code to disable Securly permanently
            // It seems the original script uses cookies to achieve this
            // You'll need to adapt that part for use in a bookmarklet
            alert("Securly Successfully Killed.");
        } else {
            // Here, you can add the code to re-enable Securly
            // You'll need to adapt that part for use in a bookmarklet
            alert("For some reason, you gave Securly CPR and it came back to life.");
            this.style.backgroundColor = "red";
            this.textContent = "OFF";
        }
    });
    // Attach the toggle button to the cover iframe
    coverIframe.contentDocument.body.appendChild(toggleButton);
})();
