let keltKpl = 0;
let oranKpl = 0;
let pinkKpl = 0;
let turkKpl = 0;
let vihrKpl = 0;
let rahaaLompakossa = 0;
document.getElementById("keltsu").innerHTML = "= " + keltKpl;
document.getElementById("oranski").innerHTML = "= " + oranKpl;
document.getElementById("pinksu").innerHTML = "= " + pinkKpl;
document.getElementById("turkkosi").innerHTML = "= " + turkKpl;
document.getElementById("virtsu").innerHTML = "= " + vihrKpl;
document.getElementById("rahaa").innerHTML = rahaaLompakossa + " $";

function keltainen(element) {
    keltKpl = keltKpl + 1;
    document.getElementById("keltsu").innerHTML = "= " + keltKpl;
    element.remove();
}
function oranssi(element) {
    oranKpl = oranKpl + 1;
    document.getElementById("oranski").innerHTML = "= " + oranKpl;
    element.remove();
}
function pinkki(element) {
    pinkKpl = pinkKpl + 1;
    document.getElementById("pinksu").innerHTML = "= " + pinkKpl;
    element.remove();
}
function turkoosi(element) {
    turkKpl = turkKpl + 1;
    document.getElementById("turkkosi").innerHTML = "= " + turkKpl;
    element.remove();
}
function vihreä(element) {
    vihrKpl = vihrKpl + 1;
    document.getElementById("virtsu").innerHTML = "= " + vihrKpl;
    element.remove();
}

function myy() {
    rahaaLompakossa = rahaaLompakossa + (keltKpl * 1) + (oranKpl * 2) + (pinkKpl * 3) + (turkKpl * 4) + (vihrKpl * 5);
    document.getElementById("rahaa").innerHTML = rahaaLompakossa + " $";
    keltKpl = 0;
    oranKpl = 0;
    pinkKpl = 0;
    turkKpl = 0;
    vihrKpl = 0;
    document.getElementById("keltsu").innerHTML = "= " + keltKpl;
    document.getElementById("oranski").innerHTML = "= " + oranKpl;
    document.getElementById("pinksu").innerHTML = "= " + pinkKpl;
    document.getElementById("turkkosi").innerHTML = "= " + turkKpl;
    document.getElementById("virtsu").innerHTML = "= " + vihrKpl;
}