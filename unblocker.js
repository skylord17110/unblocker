<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Securly Killer</title>
</head>
<body>
    <h1>Securly Killer</h1>
    <button id="disableSecurlyButton">Disable Securly</button>

    <script>
        // Function to disable Securly
        function disableSecurly() {
            // Clear Securly-related cookies
            document.cookie.split(";").forEach(function(c) {
                if (c.trim().startsWith("securly")) {
                    var domain = location.hostname.replace(/^[^.]+\./, "");
                    document.cookie = c.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + domain + ";";
                }
            });
            
            // Inform the user
            alert("Securly has been disabled.");
        }

        // Attach click event listener to the button
        document.getElementById("disableSecurlyButton").addEventListener("click", function() {
            disableSecurly();
        });
    </script>
</body>
</html>
