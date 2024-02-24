javascript:(function() {
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

    // Optionally, you can add more code here to remove other elements or perform additional actions

    // Alert the user that Securly has been disabled
    alert("Securly Successfully Disabled!");
})();
