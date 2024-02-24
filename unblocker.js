<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Disable Securly</title>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const disableButton = document.getElementById('disableButton');
    disableButton.addEventListener('click', function() {
        disableSecurly();
    });
});

function disableSecurly() {
    // Clear Securly cookies
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    // Disable Securly on all open tabs
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: () => {
                    const elementsToRemove = document.querySelectorAll("div.head-top, div.wonderbar");
                    elementsToRemove.forEach(function(element) {
                        element.remove();
                    });

                    const buttonsToRemove = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
                    buttonsToRemove.forEach(function(button) {
                        button.remove();
                    });

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
                            // Add code to permanently disable Securly here
                            alert("Securly Successfully Disabled.");
                        } else {
                            // Add code to re-enable Securly here
                            alert("For some reason, Securly came back to life.");
                            this.style.backgroundColor = "red";
                            this.textContent = "OFF";
                        }
                    });
                    coverIframe.contentDocument.body.appendChild(toggleButton);
                }
            });
        });
    });
}
</script>
</head>
<body>
<h1>Disable Securly</h1>
<button id="disableButton">Disable Securly</button>
</body>
</html>
