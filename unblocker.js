<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Execute Script in All Tabs</title>
</head>
<body>
    <h1>Execute Script in All Tabs</h1>
    <button id="executeButton">Execute Script</button>

    <script>
        // Define a function to execute the code across all tabs
        function executeInAllTabs(code) {
            // Query all tabs
            chrome.tabs.query({}, function(tabs) {
                // Iterate through each tab
                tabs.forEach(function(tab) {
                    // Execute the provided code in the current tab
                    chrome.tabs.executeScript(tab.id, { code: code });
                });
            });
        }

        // Attach a click event listener to the button
        document.getElementById('executeButton').addEventListener('click', function() {
            // Define the code to be executed in each tab
            var code = `
                // Remove Securly elements
                const elementsToRemove = document.querySelectorAll("div.head-top, div.wonderbar");
                elementsToRemove.forEach(function(element) {
                    element.remove();
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
            `;

            // Execute the code in all tabs
            executeInAllTabs(code);
        });
    </script>
</body>
</html>
