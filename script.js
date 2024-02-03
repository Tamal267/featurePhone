/* eslint-disable no-unused-vars */
let cButton = 0;
let dButton = 0;
let eButton = 0;
let gButton = 0;
let iButton = 0;
let fButton = 0;

function openDisplay() {
    document.getElementById("phoneNumber").innerHTML = "";
    document.getElementById("display").style.backgroundImage =
        "url('https://i.ibb.co/R2WJXGz/images-12.jpg')";
    document.getElementById("phoneNumber").style.display = "none";
    document.getElementById("appName").style.display = "none";
    document.getElementById("convertName").style.display = "none";
    document.getElementById("selectName").style.display = "none";
    dButton = 0;
    cButton = 0;
    eButton = 0;
    fButton = 0;
    iButton = 0;
    document.getElementById("sourceCode").style.display = "none";
    document.getElementById("sName1").style.backgroundColor = "#ffffff";
    document.getElementById("sName2").style.backgroundColor = "#ffffff";
    document.getElementById("about").style.display = "none";
    document.getElementById("gallary1").style.display = "none";
    document.getElementById("gallary2").style.display = "none";
    document.getElementById("gallary3").style.display = "none";
    document.getElementById("gallary4").style.display = "none";
    document.getElementById("gallary5").style.display = "none";
    document.getElementById("urlGo").style.display = "none";
    document.getElementById("calender1").style.display = "none";
    document.getElementById("calender2").style.display = "none";
    document.getElementById("calender3").style.display = "none";
    document.getElementById("calender4").style.display = "none";
    document.getElementById("calender5").style.display = "none";
    document.getElementById("calender6").style.display = "none";
    document.getElementById("calender7").style.display = "none";
    document.getElementById("calender8").style.display = "none";
    document.getElementById("calender9").style.display = "none";
    document.getElementById("calender10").style.display = "none";
    document.getElementById("calender11").style.display = "none";
    document.getElementById("calender12").style.display = "none";
    document.getElementById("emailForm").style.display = "none";
    document.getElementById("fF").style.display = "none";
    document.getElementById("conName1").style.backgroundColor = "#ffffff";
    document.getElementById("conName2").style.backgroundColor = "#ffffff";
    document.getElementById("conName3").style.backgroundColor = "#ffffff";
    document.getElementById("conName1").style.color = "#000000";
    document.getElementById("conName2").style.color = "#000000";
    document.getElementById("conName3").style.color = "#000000";
    document.getElementById("app1").style.border = "2px solid #add";
    document.getElementById("app2").style.border = "2px solid green";
    document.getElementById("status").style.visibility = "visible";
    document.getElementById("clock").style.display = "inline-block";
    document.getElementById("date").style.display = "inline-block";
    document.getElementById("table").style.visibility = "visible";
    document.getElementById("appAll").style.display = "none";
    function clockTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        document.getElementById("clock").innerHTML = hours + ":" + minutes;
        let day = time.getDay();
        let month = time.getMonth();
        let year = time.getFullYear();
        document.getElementById("date").innerHTML =
            day + "-" + month + "-" + year;
    }
    let cTime = setInterval(clockTime, 1000);
}

function findApp() {
    dButton++;
    if (dButton == 2) {
        if (cButton == 0) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "Calculator";
        } else if (cButton == 1) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("appName").innerHTML = "Convert";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("convertName").style.display =
                "inline-block";
        } else if (cButton == 2) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").innerHTML =
                "ax<sup>2</sup>+bx+c";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("fF").style.display = "inline-block";
            document.getElementById("appAll").style.display = "none";
        } else if (cButton == 3) {
            document.getElementById("appAll").style.display = "none";
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").innerHTML = "Email";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("emailForm").style.display = "inline-block";
        } else if (cButton == 4) {
            document.getElementById("bt1").style.display = "none";
            document.getElementById("bt2").style.display = "inline-block";
            document.getElementById("urlGo").style.display = "inline-block";
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "URL";
            document.getElementById("appAll").style.display = "none";
        } else if (cButton == 5) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "Gallary";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("gallary1").style.display = "inline-block";
        } else if (cButton == 6) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "Calendar";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("calender1").style.display = "inline-block";
        } else if (cButton == 7) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appAll").style.display = "none";
        } else if (cButton == 8) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "About";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("about").style.display = "inline-block";
        } else if (cButton == 9) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "Music";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("about").style.display = "inline-block";
            document.getElementById("about").innerHTML = "Empty Playlist";
        } else if (cButton == 10) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "Network";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("about").style.display = "inline-block";
            document.getElementById("about").innerHTML =
                "No SIM card. Please insert a SIM card.";
        } else if (cButton == 11) {
            document.getElementById("display").style.backgroundImage =
                "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
            document.getElementById("appName").style.display = "inline-block";
            document.getElementById("appName").innerHTML = "Source Code";
            document.getElementById("appAll").style.display = "none";
            document.getElementById("sourceCode").style.display =
                "inline-block";
        }
    } else if (dButton == 3) {
        if (cButton == 0) {
            dButton = 2;
            let y = document.getElementById("phoneNumber").innerHTML;
            let x = eval(y);
            document.getElementById("phoneNumber").innerHTML = x;
        } else if (cButton == 1) {
            if (eButton == 0) {
                document.getElementById("display").style.backgroundImage =
                    "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
                document.getElementById("selectName").style.display = "block";
                document.getElementById("sName1").innerHTML = "1.in to cm";
                document.getElementById("sName2").innerHTML = "2.cm to in";
                document.getElementById("convertName").style.display = "none";
            } else if (eButton == 1) {
                document.getElementById("display").style.backgroundImage =
                    "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
                document.getElementById("selectName").style.display =
                    "inline-block";
                document.getElementById("sName1").innerHTML = "1.in to cm";
                document.getElementById("sName2").innerHTML = "2.cm to in";
                document.getElementById("convertName").style.display = "none";
            } else if (eButton == 2) {
                document.getElementById("display").style.backgroundImage =
                    "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
                document.getElementById("selectName").style.display =
                    "inline-block";
                document.getElementById("sName1").innerHTML = "1.C to F";
                document.getElementById("sName2").innerHTML = "2.F to C";
                document.getElementById("convertName").style.display = "none";
            } else if (eButton == 3) {
                document.getElementById("display").style.backgroundImage =
                    "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
                document.getElementById("selectName").style.display =
                    "inline-block";
                document.getElementById("sName1").innerHTML = "1.kg to lb";
                document.getElementById("sName2").innerHTML = "2.lb to kg";
                document.getElementById("convertName").style.display = "none";
            }
        } else if (cButton == 2) {
            dButton = 2;
            let resultX = document.getElementById("resultX");
            let fA = document.functionF.fA.value;
            let fB = document.functionF.fB.value;
            let fC = document.functionF.fC.value;

            let w = eval("fB*fB-4*fA*fC");
            let x = Math.sqrt(w);
            let y = eval("(-fB+x)/(2*fA)");
            let z = eval("(-fB-x)/(2*fA)");
            resultX.innerHTML = "X=" + y.toFixed(2) + "," + z.toFixed(2);

            if (isNaN(resultX.innerHTML)) {
                let a = eval("fB*fB-4*fA*fC");
                let b = eval("-1*a");
                let c = Math.sqrt(b);
                let d = eval("-fB/(2*fA)");
                resultX.innerHTML =
                    "<small>X=" +
                    d.toFixed(1) +
                    "+" +
                    c.toFixed(1) +
                    "i</small>";
            }
        } else if (cButton == 3) {
            dButton = 2;
            let eName = document.eForm.eName.value;
            let sName = document.eForm.sName.value;
            let mName = document.eForm.mName.value;
            window.location.href =
                "mailto:" + eName + "?subject=" + sName + "&body=" + mName;
        } else if (cButton == 4) {
            dButton = 2;
            let urlGo = document.getElementById("urlGo").value;
            window.location.href = urlGo;
        } else if (
            cButton == 5 ||
            cButton == 6 ||
            cButton == 7 ||
            cButton == 8 ||
            cButton == 9 ||
            cButton == 10
        ) {
            dButton = 2;
        }
    } else if (dButton == 4) {
        if (cButton == 1) {
            if (eButton == 1 || eButton == 2 || eButton == 3 || eButton == 0) {
                if (fButton == 1 || fButton == 2) {
                    document.getElementById("display").style.backgroundImage =
                        "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
                    document.getElementById("selectName").style.display =
                        "none";
                }
            }
        }
    } else if (dButton == 5) {
        if (cButton == 1) {
            if (eButton == 1) {
                if (fButton == 2) {
                    dButton = 4;
                    let w = document.getElementById("phoneNumber").innerHTML;
                    let v = eval("w/2.54");
                    document.getElementById("phoneNumber").innerHTML =
                        v.toFixed(2);
                } else if (fButton == 1) {
                    dButton = 4;
                    let w = document.getElementById("phoneNumber").innerHTML;
                    let v = eval("w*2.54");
                    document.getElementById("phoneNumber").innerHTML =
                        v.toFixed(2);
                }
            } else if (eButton == 2) {
                if (fButton == 1) {
                    dButton = 4;
                    let w = document.getElementById("phoneNumber").innerHTML;
                    let v = eval("9*w/5+32");
                    document.getElementById("phoneNumber").innerHTML =
                        v.toFixed(2);
                } else if (fButton == 2) {
                    dButton = 4;
                    let w = document.getElementById("phoneNumber").innerHTML;
                    let v = eval("5*w/9-17.77");
                    document.getElementById("phoneNumber").innerHTML =
                        v.toFixed(2);
                }
            } else if (eButton == 3) {
                if (fButton == 1) {
                    dButton = 4;
                    let w = document.getElementById("phoneNumber").innerHTML;
                    let v = eval("2.2*w");
                    document.getElementById("phoneNumber").innerHTML =
                        v.toFixed(2);
                } else if (fButton == 2) {
                    dButton = 4;
                    let w = document.getElementById("phoneNumber").innerHTML;
                    let v = eval("w/2.2");
                    document.getElementById("phoneNumber").innerHTML =
                        v.toFixed(2);
                }
            }
        }
    } else {
        document.getElementById("appAll").style.display = "inline-block";
        document.getElementById("clock").style.display = "none";
        document.getElementById("date").style.display = "none";
        document.getElementById("table").style.visibility = "hidden";
    }
}

function val(n) {
    document.getElementById("display").style.backgroundImage =
        "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
    document.getElementById("phoneNumber").innerHTML += n;
    document.getElementById("phoneNumber").style.display = "inline-block";
    document.getElementById("table").style.visibility = "hidden";
}

function rightTop() {
    if (
        document.getElementById("phoneNumber").style.display == "inline-block"
    ) {
        document.getElementById("phoneNumber").innerHTML = "";
        document.getElementById("display").style.backgroundImage =
            "url('https://i.ibb.co/C186Y8H/20210731-184439.jpg')";
    }
}
function callNum() {
    if (dButton == 0) {
        window.location.href =
            "tel:" + document.getElementById("phoneNumber").innerHTML;
    } else if (dButton == 2) {
        if (cButton == 7) {
            window.location.href =
                "tel:" + document.getElementById("phoneNumber").innerHTML;
        }
    }
}

function circle3() {
    if (document.getElementById("appAll").style.display == "inline-block") {
        cButton++;
        if (cButton > 11) {
            cButton = 0;
        }

        switch (cButton) {
            case 0:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 1:
                document.getElementById("app2").style.border = "2px solid #add";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 2:
                document.getElementById("app3").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 3:
                document.getElementById("app4").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 4:
                document.getElementById("app5").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 5:
                document.getElementById("app6").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 6:
                document.getElementById("app7").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 7:
                document.getElementById("app8").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 8:
                document.getElementById("app9").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 9:
                document.getElementById("app10").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 10:
                document.getElementById("app11").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 11:
                document.getElementById("app12").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                break;

            default:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
        }
    } else if (document.getElementById("appName").innerHTML == "Calculator") {
        document.getElementById("phoneNumber").innerHTML += "-";
    } else if (document.getElementById("appName").innerHTML == "Gallary") {
        gButton++;
        if (gButton > 4) {
            gButton = 0;
        }
        switch (gButton) {
            case 0:
                document.getElementById("gallary1").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 1:
                document.getElementById("gallary2").style.display =
                    "inline-block";
                document.getElementById("gallary1").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 2:
                document.getElementById("gallary3").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary1").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 3:
                document.getElementById("gallary4").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary1").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 4:
                document.getElementById("gallary5").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary1").style.display = "none";
                break;
            default:
                dButton = 0;
                document.getElementById("gallary1").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
        }
    } else if (document.getElementById("appName").innerHTML == "Calendar") {
        fButton++;
        if (fButton > 11) {
            fButton = 0;
        }
        switch (fButton) {
            case 0:
                document.getElementById("calender1").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 1:
                document.getElementById("calender2").style.display =
                    "inline-block";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 2:
                document.getElementById("calender3").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 3:
                document.getElementById("calender4").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 4:
                document.getElementById("calender5").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 5:
                document.getElementById("calender6").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 6:
                document.getElementById("calender7").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 7:
                document.getElementById("calender8").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 8:
                document.getElementById("calender9").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 9:
                document.getElementById("calender10").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 10:
                document.getElementById("calender11").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 11:
                document.getElementById("calender12").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                break;
            default:
                document.getElementById("calender1").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
        }
    }
}

function circle1() {
    if (document.getElementById("appAll").style.display == "inline-block") {
        cButton--;
        if (cButton < 0) {
            cButton = 0;
        }

        switch (cButton) {
            case 0:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 1:
                document.getElementById("app2").style.border = "2px solid #add";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 2:
                document.getElementById("app3").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 3:
                document.getElementById("app4").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 4:
                document.getElementById("app5").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 5:
                document.getElementById("app6").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 6:
                document.getElementById("app7").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 7:
                document.getElementById("app8").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 8:
                document.getElementById("app9").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 9:
                document.getElementById("app10").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 10:
                document.getElementById("app11").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 11:
                document.getElementById("app12").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                break;

            default:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
        }
    } else if (document.getElementById("appName").innerHTML == "Calculator") {
        document.getElementById("phoneNumber").innerHTML += "/";
    } else if (document.getElementById("appName").innerHTML == "Gallary") {
        gButton--;
        if (gButton < 0) {
            gButton = 0;
        }
        switch (gButton) {
            case 0:
                document.getElementById("gallary1").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 1:
                document.getElementById("gallary2").style.display =
                    "inline-block";
                document.getElementById("gallary1").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 2:
                document.getElementById("gallary3").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary1").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 3:
                document.getElementById("gallary4").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary1").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
                break;
            case 4:
                document.getElementById("gallary5").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary1").style.display = "none";
                break;
            default:
                dButton = 0;
                document.getElementById("gallary1").style.display =
                    "inline-block";
                document.getElementById("gallary2").style.display = "none";
                document.getElementById("gallary3").style.display = "none";
                document.getElementById("gallary4").style.display = "none";
                document.getElementById("gallary5").style.display = "none";
        }
    } else if (document.getElementById("appName").innerHTML == "Calendar") {
        fButton--;
        if (fButton < 0) {
            fButton = 0;
        }
        switch (fButton) {
            case 0:
                document.getElementById("calender1").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 1:
                document.getElementById("calender2").style.display =
                    "inline-block";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 2:
                document.getElementById("calender3").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 3:
                document.getElementById("calender4").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 4:
                document.getElementById("calender5").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 5:
                document.getElementById("calender6").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 6:
                document.getElementById("calender7").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 7:
                document.getElementById("calender8").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 8:
                document.getElementById("calender9").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 9:
                document.getElementById("calender10").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 10:
                document.getElementById("calender11").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                document.getElementById("calender12").style.display = "none";
                break;
            case 11:
                document.getElementById("calender12").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender1").style.display = "none";
                break;
            default:
                document.getElementById("calender1").style.display =
                    "inline-block";
                document.getElementById("calender2").style.display = "none";
                document.getElementById("calender3").style.display = "none";
                document.getElementById("calender4").style.display = "none";
                document.getElementById("calender5").style.display = "none";
                document.getElementById("calender6").style.display = "none";
                document.getElementById("calender7").style.display = "none";
                document.getElementById("calender8").style.display = "none";
                document.getElementById("calender9").style.display = "none";
                document.getElementById("calender10").style.display = "none";
                document.getElementById("calender11").style.display = "none";
                document.getElementById("calender12").style.display = "none";
        }
    }
}

function circle2() {
    if (document.getElementById("appAll").style.display == "inline-block") {
        cButton -= 4;
        if (cButton < 0) {
            cButton = 0;
        }

        switch (cButton) {
            case 0:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 1:
                document.getElementById("app2").style.border = "2px solid #add";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 2:
                document.getElementById("app3").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 3:
                document.getElementById("app4").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 4:
                document.getElementById("app5").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 5:
                document.getElementById("app6").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 6:
                document.getElementById("app7").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 7:
                document.getElementById("app8").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 8:
                document.getElementById("app9").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 9:
                document.getElementById("app10").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 10:
                document.getElementById("app11").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 11:
                document.getElementById("app12").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                break;

            default:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
        }
    } else if (document.getElementById("appName").innerHTML == "Calculator") {
        document.getElementById("phoneNumber").innerHTML += "+";
    } else if (dButton == 2) {
        if (cButton == 1) {
            eButton--;
            switch (eButton) {
                case 0:
                    document.getElementById("conName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
                    break;
                case 1:
                    document.getElementById("conName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
                    break;
                case 2:
                    document.getElementById("conName2").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName1").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName2").style.color = "#ffffff";
                    document.getElementById("conName1").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
                    break;
                case 3:
                    document.getElementById("conName3").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName1").style.color = "#000000";
                    break;
                default:
                    eButton = 1;
                    document.getElementById("conName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
            }
        } else if (cButton == 11) {
            iButton--;
            if (iButton < 0) {
                iButton = 1;
            }
            switch (iButton) {
                case 1:
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#��46c3ff";
                    document.getElementById("cssFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("htmlFile").style.color =
                        "#��ffffff";
                    document.getElementById("cssFile").style.color =
                        "#��000000";
                    document.getElementById("jsFile").style.color = "#��000000";
                    break;
                case 2:
                    document.getElementById("cssFile").style.backgroundColor =
                        "#��46c3ff";
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("cssFile").style.color =
                        "#��ffffff";
                    document.getElementById("htmlFile").style.color =
                        "#��000000";
                    document.getElementById("jsFile").style.color = "#��000000";
                    break;
                case 3:
                    document.getElementById("jsFile").style.backgroundColor =
                        "#��46c3ff";
                    document.getElementById("cssFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.color = "#��ffffff";
                    document.getElementById("cssFile").style.color =
                        "#��000000";
                    document.getElementById("htmlFile").style.color =
                        "#��000000";
                    break;
                default:
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#��46c3ff";
                    document.getElementById("cssFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("htmlFile").style.color =
                        "#��ffffff";
                    document.getElementById("cssFile").style.color =
                        "#��000000";
                    document.getElementById("jsFile").style.color = "#��000000";
            }
        }
    } else if (dButton == 3) {
        if (cButton == 1) {
            fButton--;
            if (fButton < 0) {
                fButton = 1;
            }
            switch (fButton) {
                case 1:
                    document.getElementById("sName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("sName2").style.backgroundColor =
                        "#ffffff";
                    break;
                case 2:
                    document.getElementById("sName2").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("sName1").style.backgroundColor =
                        "#ffffff";
                    break;
                default:
                    document.getElementById("sName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("sName2").style.backgroundColor =
                        "#ffffff";
            }
        }
    }
}
function circle4() {
    if (document.getElementById("appAll").style.display == "inline-block") {
        cButton += 4;
        if (cButton > 11) {
            cButton = 0;
        }
        switch (cButton) {
            case 0:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 1:
                document.getElementById("app2").style.border = "2px solid #add";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 2:
                document.getElementById("app3").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;

            case 3:
                document.getElementById("app4").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 4:
                document.getElementById("app5").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 5:
                document.getElementById("app6").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 6:
                document.getElementById("app7").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 7:
                document.getElementById("app8").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 8:
                document.getElementById("app9").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 9:
                document.getElementById("app10").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 10:
                document.getElementById("app11").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
                break;
            case 11:
                document.getElementById("app12").style.border =
                    "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app1").style.border =
                    "2px solid green";
                break;

            default:
                document.getElementById("app1").style.border = "2px solid #add";
                document.getElementById("app2").style.border =
                    "2px solid green";
                document.getElementById("app3").style.border =
                    "2px solid green";
                document.getElementById("app4").style.border =
                    "2px solid green";
                document.getElementById("app5").style.border =
                    "2px solid green";
                document.getElementById("app6").style.border =
                    "2px solid green";
                document.getElementById("app7").style.border =
                    "2px solid green";
                document.getElementById("app8").style.border =
                    "2px solid green";
                document.getElementById("app9").style.border =
                    "2px solid green";
                document.getElementById("app11").style.border =
                    "2px solid green";
                document.getElementById("app10").style.border =
                    "2px solid green";
                document.getElementById("app12").style.border =
                    "2px solid green";
        }
    } else if (document.getElementById("appName").innerHTML == "Calculator") {
        document.getElementById("phoneNumber").innerHTML += "*";
    } else if (dButton == 2) {
        if (cButton == 1) {
            eButton++;
            switch (eButton) {
                case 0:
                    document.getElementById("conName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
                    break;
                case 1:
                    document.getElementById("conName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
                    break;
                case 2:
                    document.getElementById("conName2").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName1").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName2").style.color = "#ffffff";
                    document.getElementById("conName1").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
                    break;
                case 3:
                    document.getElementById("conName3").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName1").style.color = "#000000";
                    break;
                default:
                    eButton = 1;
                    document.getElementById("conName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("conName2").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName3").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("conName1").style.color = "#ffffff";
                    document.getElementById("conName2").style.color = "#000000";
                    document.getElementById("conName3").style.color = "#000000";
            }
        } else if (cButton == 11) {
            iButton++;
            if (iButton > 3) {
                iButton = 1;
            }
            switch (iButton) {
                case 1:
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#46c3ff";
                    document.getElementById("cssFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("htmlFile").style.color = "#ffffff";
                    document.getElementById("cssFile").style.color = "#000000";
                    document.getElementById("jsFile").style.color = "#000000";
                    break;
                case 2:
                    document.getElementById("cssFile").style.backgroundColor =
                        "#46c3ff";
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("cssFile").style.color = "#ffffff";
                    document.getElementById("htmlFile").style.color = "#000000";
                    document.getElementById("jsFile").style.color = "#000000";
                    break;
                case 3:
                    document.getElementById("jsFile").style.backgroundColor =
                        "#46c3ff";
                    document.getElementById("cssFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.color = "#ffffff";
                    document.getElementById("cssFile").style.color = "#000000";
                    document.getElementById("htmlFile").style.color = "#000000";
                    break;
                default:
                    document.getElementById("htmlFile").style.backgroundColor =
                        "#46c3ff";
                    document.getElementById("cssFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("jsFile").style.backgroundColor =
                        "#ffffff";
                    document.getElementById("htmlFile").style.color = "#ffffff";
                    document.getElementById("cssFile").style.color = "#000000";
                    document.getElementById("jsFile").style.color = "#000000";
            }
        }
    } else if (dButton == 3) {
        if (cButton == 1) {
            fButton++;
            if (fButton > 2) {
                fButton = 1;
            }
            switch (fButton) {
                case 1:
                    document.getElementById("sName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("sName2").style.backgroundColor =
                        "#ffffff";
                    break;
                case 2:
                    document.getElementById("sName2").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("sName1").style.backgroundColor =
                        "#ffffff";
                    break;
                default:
                    document.getElementById("sName1").style.backgroundColor =
                        "#53b39c";
                    document.getElementById("sName2").style.backgroundColor =
                        "#ffffff";
            }
        }
    }
}
function ppp() {
    let urlGo = document.getElementById("urlGo").value;
    window.location.href = urlGo;
}
