<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Securly Disabler</title>
<script>
function disableSecurlyInAllTabs() {
    // Get all open tabs
    chrome.tabs.query({}, function(tabs) {
        // Iterate over each tab
        tabs.forEach(function(tab) {
            // Inject JavaScript code to disable Securly and remove cookies
            chrome.tabs.executeScript(tab.id, {
                code: `
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
                    
                    // Remove cookies
                    const cookies = document.cookie.split('; ');
                    cookies.forEach(function(cookie) {
                        const parts = cookie.split('=');
                        const name = parts[0];
                        document.cookie = name + '=; Max-Age=-99999999;';
                    });
                `
            });
        });
    });
    alert("Securly Successfully Disabled in all tabs and cookies removed.");
}
</script>
</head>
<body>
<button onclick="disableSecurlyInAllTabs()">Disable Securly in All Tabs</button>
</body>
</html>
