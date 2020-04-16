window.onload = function() {
    const liffId = "1654083267-9dX8zMJO";
    alert("onload");
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            // start to use LIFF's api
            alert("success");
            login();
            initializeApp();
        })
        .catch((err) => {
            alert("ERROR");
        });
};

function login() {
    if (!liff.isLoggedIn()) {
        liff.login();
    }
}
/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
    var name = "";
    var userId = "";
    liff.getProfile()
        .then(profile => {
            name = profile.displayName;
            userId = profile.userId;
            alert(profile.displayName + " userId : " + profile.userId);
        })
        .catch((err) => {
            alert("ERROR");
        });
    alert(liff.isLoggedIn());
}
