<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disable Securly in All Tabs</title>
</head>
<body>
    <button id="disableSecurlyBtn">Disable Securly in All Tabs</button>

    <script>
        document.getElementById("disableSecurlyBtn").addEventListener("click", function() {
            var disableSecurly = function() {
                var expirationDate = new Date(0).toUTCString(); // Set expiration date to past
                var domain = location.hostname.split(".").slice(-2).join(".");
                for (var i = 0; i < 99; i++) {
                    document.cookie = "cd" + i + "=; expires=" + expirationDate + "; domain=" + domain + "; path=/;";
                }
                alert("Securly is now disabled in all tabs.");
            };

            // Disable Securly in current tab
            disableSecurly();

            // Disable Securly in all existing tabs
            chrome.tabs.query({}, function(tabs) {
                tabs.forEach(function(tab) {
                    chrome.scripting.executeScript({
                        target: {tabId: tab.id},
                        function: disableSecurly
                    });
                });
            });

            // Listen for new tabs and disable Securly in them
            chrome.tabs.onCreated.addListener(function(tab) {
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    function: disableSecurly
                });
            });
        });
    </script>
</body>
</html>
