function apply() {
    let color = document.getElementById("couleur").value;
    let num = document.getElementById("numberr").value;
    let police = document.getElementById("police").value;
    document.getElementById("word").style.color = color;
    document.getElementById("word").style.fontSize = num + "px";
    document.getElementById("word").style.fontFamily = police;
}
document.getElementById("couleur").addEventListener("input", apply);
document.getElementById("numberr").addEventListener("input", apply);
document.getElementById("police").addEventListener("input", apply);
apply();
