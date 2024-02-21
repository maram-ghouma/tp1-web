
  document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("number").disabled = true;
});

function startGame() {
    document.getElementById("number").disabled = false; 
    let a = document.getElementById("level").value;

    if (a == "easy") {
        num = parseInt(Math.floor(Math.random() * 11));
        tries = 3; 
    } else if (a == "intermediate") {
        num = parseInt(Math.floor(Math.random() * 51));
        tries = 6;
    } else {
        num = parseInt(Math.floor(Math.random() * 101));
        tries = 8;
    }

    console.log(num);
    document.getElementById('start').style.display = 'none';
    document.getElementById('play').style.display = 'inline-block';
    document.getElementById('hiddenButton').style.display = 'inline-block';
    updateTriesDisplay();
}

function f() {
    let b = document.getElementById("number").value;
    if (!Number.isInteger(parseInt(b))) {
        alert("Please enter an integer value.");
        return;
    }

    b = parseInt(b);
    console.log(num);

    if (tries > 0) {
        if (b === num) {
            alert("Correct");
            document.getElementById('play').style.display = 'none';
        } else {
            alert("Incorrect!!!");
        }
        tries--;
        updateTriesDisplay();
    } else {
        alert("You don't have any more tries");
        document.getElementById('play').style.display = 'none';
    }

    showButton();
}

function updateTriesDisplay() {
    document.getElementById('triesDisplay').textContent = `Tries remaining: ${tries}`;
}

function showButton() {
    var hiddenButton = document.getElementById('hiddenButton');
    if (hiddenButton.style.display === 'none') {
        hiddenButton.style.display = 'inline-block';
    }
}

function refreshPage() {
    location.reload();
}
function startGame() {
    document.getElementById("number").disabled = false; 
    let level = document.getElementById("level");
    let a = level.value;
    level.disabled = true;

    if (a == "easy") {
        num = parseInt(Math.floor(Math.random() * 11));
        tries = 3;
        updateIntervalDisplay(0, 10); 
    } else if (a == "intermediate") {
        num = parseInt(Math.floor(Math.random() * 51));
        tries = 6;
        updateIntervalDisplay(0, 50);
    } else {
        num = parseInt(Math.floor(Math.random() * 101));
        tries = 8;
        updateIntervalDisplay(0, 100);
    }

    console.log(num);
    document.getElementById('start').style.display = 'none';
    document.getElementById('play').style.display = 'inline-block';
    document.getElementById('hiddenButton').style.display = 'inline-block';
    updateTriesDisplay();
}
function updateIntervalDisplay(min, max) {
    document.getElementById('intervalDisplay').textContent = `Guess the number between ${min} and ${max}`;
}


