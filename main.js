keltKpl = 0
oranKpl = 0
pinkKpl = 0
turkKpl = 0
vihrKpl = 0

function keltainen() {
    keltKpl = keltKpl + 1;
    document.getElementById("keltsu").innerHTML = "Keltainen = " + keltKpl;
}
function oranssi() {
    oranKpl = oranKpl + 1;
    document.getElementById("oranski").innerHTML = "Oranssi = " + oranKpl;
}
function pinkki() {
    pinkKpl = pinkKpl + 1;
    document.getElementById("pinksu").innerHTML = "Pinkki = " + pinkKpl;
}
function turkoosi() {
    turkKpl = turkKpl + 1;
    document.getElementById("turkkosi").innerHTML = "Turkoosi = " + turkKpl;
}
function vihreä() {
    vihrKpl = vihrKpl + 1;
    document.getElementById("virtsu").innerHTML = "Vihreä = " + vihrKpl;
}
