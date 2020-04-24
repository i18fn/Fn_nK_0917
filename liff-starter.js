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
            alert(err.code + err.message);
        });
};

document.getElementById("btn").onclick = function () {
    var name = "";
    var namekana = "";
    var gender = "";
    var userId = "";

    name = document.getElementById("name").value;
    namekana = document.getElementById("namekana").value;

    const gender2 = document.gender;

    for (var i = 0; i < gender2.length; i++) {
        if (gender2[i].checked) {
            gender = gender2[i].value;
        }
    }
    alert(gender);
    // gender = document.getElementById("gender").value;
    // liff.getProfile()
    //     .then(profile => {
    //         userId = profile.userId;
    //         sendData(name, namekana, gender, userId);
    //     })
    //     .catch(err => {
    //         alert(err);
    //     });
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
            liff.closeWindow();
        })
        .catch((err) => {
            alert(err);
        });
}