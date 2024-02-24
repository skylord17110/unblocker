javascript:(function(){
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Set expiration to 1 year from now

    // Set a cookie named "securly_disabled" with an expiration date
    document.cookie = "securly_disabled=true; expires=" + expirationDate.toUTCString() + "; path=/";

    // Alert to confirm that Securly is now disabled
    alert("Securly is now disabled in all tabs.");
})();
