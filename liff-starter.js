window.onload = function() {
    const liffId = "1654083267-9dX8zMJO";
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            login();
        })
        .catch((err) => {
            alert("ERROR");
        });
};

document.getElementById("btn").onclick = function () {
    alert("aaa");
    var name = document.getElementsByName("name").value;
    var namekana = document.getElementsByName("namekana").value;
    var gender = document.getElementsByName("gender").value;
    var profile = liff.getProfile()
        .catch((err) => {
            alert("cannot read profile")
        });
    var userId = profile.userId;
    alert(userId);
    
    sendData(name, namekana, gender, userId)
}

function login() {
    if (!liff.isLoggedIn()) {
        liff.login();
    }
}

function sendData(name, namekana, gender, userId) {
    const url = "https://script.google.com/macros/s/AKfycbzpx_oEizB-u9d2AAg_OfAGf_TtaQ7OiRIbbSMjPmD3Kp0SqQA/exec";

    var data = {
        request: "ADD",
        name: name,
        namekana: namekana,
        gender: gender,
        userId: userId
    };
    fetch(url, {
            method: "POST",
            mode: 'no-cors',
            body: JSON.stringify(data)
        })
        .then(() => {
            alert("send success");
            liff.closeWindow();
        })
        .catch((err) => {
            alert(err);
        });
}