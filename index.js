const TAX = 1.05;

function merge() {
    let int = 0;
    int += parseInt(document.getElementById("c").value || 0) +
        64 * parseInt(document.getElementById("eb").value || 0) +
        64 * 64 * parseInt(document.getElementById("le").value || 0) +
        64 * 64 * 64 * parseInt(document.getElementById("stx").value || 0);

    document.getElementById("e").value = int;

}

function spread() {
    let stx = document.getElementById("e").value/(64*64*64);
    let le = (stx - (Math.floor(stx))) * 64;
    let eb = (le - (Math.floor(le))) * 64;
    let eme = (eb - (Math.floor(eb))) * 64;
    document.getElementById("stx").value = Math.floor(stx);
    document.getElementById("le").value = Math.floor(le);
    document.getElementById("eb").value = Math.floor(eb);
    document.getElementById("c").value = Math.floor(eme);
}

function tax() {
    document.getElementById("e").value = Math.round(document.getElementById("e").value * TAX);
    spread();
}

function detax() {
    document.getElementById("e").value = Math.round(document.getElementById("e").value / TAX);
    spread();
}