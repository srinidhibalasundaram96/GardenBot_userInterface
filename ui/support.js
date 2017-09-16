var A_M = '';
var I_C = '';
function showAuto(){
    document.getElementById("Amode").style.visibility='visible';
    document.getElementById("Icare").style.visibility='hidden';
    document.getElementById("Ccare").style.visibility='hidden';
    document.getElementById("manualSub").style.visibility='hidden';
    A_M = "auto";
}
function showSub(){
    document.getElementById("Amode").style.visibility='hidden';
    document.getElementById("Icare").style.visibility='hidden';
    document.getElementById("Ccare").style.visibility='hidden';
    document.getElementById("manualSub").style.visibility='visible';
    A_M = "manual";
}
function showIcare(){
    document.getElementById("Amode").style.visibility='hidden';
    document.getElementById("Icare").style.visibility='visible';
    document.getElementById("Ccare").style.visibility='hidden';
    document.getElementById("manualSub").style.visibility='visible';
    I_C = "individual";
}
function showCcare(){
    document.getElementById("Amode").style.visibility='hidden';
    document.getElementById("Icare").style.visibility='hidden';
    document.getElementById("Ccare").style.visibility='visible';
    document.getElementById("manualSub").style.visibility='visible';
    I_C = "common";
}
var gardenName;
var plant1;
var plant2;
var plant3;
function gridPage(){
    gardenName = document.getElementById('gardenName').value;
    plant1 = document.getElementById('plant1').value;
    plant2 = document.getElementById('plant2').value;
    plant3 = document.getElementById('plant3').value;
    window.open('gridLayout.html',"_self");
    console.log(plant1 , plant2, plant3);
    console.log(gardenName);
}
var G1;var G7 ;
var G2;var G8 ; 
var G3;var G9 ;
var G4;var G10;
var G5;var G11;
var G6;var G12;
function waterPage(){
    G1 = document.getElementById('G1').value;
    G2 = document.getElementById('G2').value;
    G3 = document.getElementById('G3').value;
    G4 = document.getElementById('G4').value;
    G5 = document.getElementById('G5').value;
    G6 = document.getElementById('G6').value;
    G7  = document.getElementById('G7').value;
    G8  = document.getElementById('G8').value;
    G9  = document.getElementById('G9').value;
    G10 = document.getElementById('G10').value;
    G11 = document.getElementById('G11').value;
    G12 = document.getElementById('G12').value;
    window.open('waterSchedule.html',"_self");
    console.log(G1, G2, G3);
}
var mode; var moistureLevel; var subManual; 
var subManual; var Cinterval; var CeventTime;
var interval1; var interval2; var interval3;
var eventTime1; var eventTime2; var eventTime3;
function contactServer(){
    if(A_M ==="auto"){
        mode = "auto";
        moistureLevel = document.getElementById('moistureLevel').value;
    }
    else if(A_M === "manual"){
        mode = "manual";
        if(I_C === "individual"){
            subManual = "individual";
            interval1 = document.getElementById('interval1').value;
            interval2 = document.getElementById('interval2').value;
            interval3 = document.getElementById('interval3').value;
            eventTime1 = document.getElementById('eventTime1').value;
            eventTime2 = document.getElementById('eventTime2').value;
            eventTime3 = document.getElementById('eventTime3').value;
            console.log(interval1, eventTime2);
        }
        else if(I_C === "common"){
            subManual = "common";
            Cinterval = document.getElementById('Cinterval').value;
            CeventTime = document.getElementById('CeventTime').value;
        }
    }
    console.log(mode);
    console.log(subManual);
    console.log(moistureLevel);
    console.log(interval1);
    console.log(eventTime1);
    console.log(CeventTime);
    window.open("FirstPage.html","_self");
}

