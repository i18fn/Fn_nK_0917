window.onload = function() {
    const liffId = "1654083267-9dX8zMJO";
    alert("onload");
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            login();
            initializeApp();
        })
        .catch((err) => {
            alert("ERROR");
        });
};

function login() {
    if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: "https://localhost:3000" });
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
        })
        .catch((err) => {
            alert("ERROR");
        });
    alert(name + " userId : " + userId);
}
