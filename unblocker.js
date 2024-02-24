javascript:(function(){
    // Function to remove Securly elements
    function removeSecurlyElements() {
        const elementsToRemove = document.querySelectorAll("div.head-top, div.wonderbar");
        elementsToRemove.forEach(function(element) {
            element.remove();
        });

        const buttonsToRemove = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
        buttonsToRemove.forEach(function(button) {
            button.remove();
        });
    }

    // Function to create toggle button
    function createToggleButton() {
        const coverIframe = document.createElement("iframe");
        coverIframe.style.position = "fixed";
        coverIframe.style.top = "0";
        coverIframe.style.left = "0";
        coverIframe.style.width = "100%";
        coverIframe.style.height = "100%";
        coverIframe.style.border = "none";
        coverIframe.style.backgroundColor = "white"; 
        document.body.appendChild(coverIframe);

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
            if (this.textContent === "OFF") {
                this.style.backgroundColor = "blue";
                this.textContent = "ON";
                alert("Securly Successfully Killed.");
            } else {
                alert("For some reason, you gave Securly CPR and it came back to life.");
                this.style.backgroundColor = "red";
                this.textContent = "OFF";
            }
        });
        coverIframe.contentDocument.body.appendChild(toggleButton);
    }

    // Call functions in all open tabs
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
            chrome.tabs.executeScript(tab.id, { code: '(' + removeSecurlyElements + ')();' });
            chrome.tabs.executeScript(tab.id, { code: '(' + createToggleButton + ')();' });
        });
    });
})();
