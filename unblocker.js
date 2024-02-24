<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Securly Disabler</title>
</head>
<body>
    <button id="toggleButton">Toggle Securly</button>
    <script>
        document.getElementById("toggleButton").addEventListener("click", function() {
            if (document.cookie.includes("useast2-www.securly.com")) {
                // Remove Securly cookies
                document.cookie = "useast2-www.securly.com=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "securly.com=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                alert("Securly is now disabled.");
            } else {
                alert("Securly is already disabled.");
            }
        });
    </script>
</body>
</html>
