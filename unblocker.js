<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Securly Killer</title>
</head>
<body>
    <h1>Securly Killer</h1>
    <p>Click the button below to disable Securly and remove cookies.</p>
    <button id="securlyKiller">Disable Securly and Remove Cookies</button>

    <script>
        document.getElementById('securlyKiller').addEventListener('click', function() {
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
            const cookies = document.cookie.split(';');
            cookies.forEach(function(cookie) {
                const cookieParts = cookie.split('=');
                const cookieName = cookieParts[0].trim();
                document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            });

            alert("Securly Successfully Disabled and cookies removed.");
        });
    </script>
</body>
</html>
