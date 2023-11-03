(function () {
    var countdownElement = document.getElementById("countdown");

    function displayMessage(message) {
        countdownElement.innerHTML = message;
    }

    setTimeout(function () {
        displayMessage("10");
        setTimeout(function () {
            displayMessage("9");
            setTimeout(function () {
                displayMessage("8");
                setTimeout(function () {
                    displayMessage("7");
                    setTimeout(function () {
                        displayMessage("6");
                        setTimeout(function () {
                            displayMessage("5");
                            setTimeout(function () {
                                displayMessage("4");
                                setTimeout(function () {
                                    displayMessage("3");
                                    setTimeout(function () {
                                        displayMessage("2");
                                        setTimeout(function () {
                                            displayMessage("1");
                                            setTimeout(function () {
                                                displayMessage("Happy Independence Day");
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
})();
