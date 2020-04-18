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
    var name = document.getElementsByName("name");
    var namekana = document.getElementsByName("namekana");
    var gender = document.getElementsByName("gender");
    var profile = liff.getProfile();
    var userId = profile.userId();
    sendData(name, namekana, gender, userId);
    alert("send");
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
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    });
}