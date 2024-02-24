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
            // Inject JavaScript code to disable Securly
            chrome.tabs.executeScript(tab.id, {
                code: `
                    const elementsToRemove = document.querySelectorAll("div.head-top, div.wonderbar");
                    elementsToRemove.forEach(function(element) {
                        element.remove();
                    });
                    const buttonsToRemove = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
                    buttonsToRemove.forEach(function(button) {
                        button.remove();
                    });
                `
            });
        });
    });
    alert("Securly Successfully Killed in all tabs.");
}
</script>
</head>
<body>
<button onclick="disableSecurlyInAllTabs()">Disable Securly in All Tabs</button>
</body>
</html>
