window.onload = function() {
    const liffId = "1654083267-9dX8zMJO";
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            alert("ERROR");
        });
};

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
    var name = "";
    var userId = "";
    liff.getProfile()
        .then(profile => {
            name   = profile.displayName;
            userId = profile.userId;
        })
        .catch((err) => {
            console.log('error', err);
        });
    alert(name + " userId : " + userId);
}