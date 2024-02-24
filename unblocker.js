// Check if Securly is already enabled
if (document.cookie.includes("securly_disabled=true")) {
    // If it's disabled, remove the cookie to enable Securly
    document.cookie = "securly_disabled=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Alert the user that Securly is now enabled
    alert("Securly is now enabled in all tabs.");
} else {
    // If Securly is already enabled, inform the user
    alert("Securly is already enabled.");
}
