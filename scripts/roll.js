const form = document.getElementById('roll-form')
form.addEventListener('submit', event => {
  event.preventDefault()
  let data = new FormData(form);
  roll(data);
})


function roll(rolls) {
    let total = 0;
    const section = document.getElementById('roll-display');
    section.innerHTML = '';
    let currRoll = 0;
    for (let i = 0; i < rolls.get('d2'); i++) {
        currRoll = roll_die(2);
        section.innerHTML += `<div class="die-roll"><img height="80" src="assets/d2.png"><p>${currRoll}</p></div>`;
        total += currRoll;
    }
    for (let i = 0; i < rolls.get('d4'); i++) {
        currRoll = roll_die(4);
        section.innerHTML += `<div class="die-roll"><img height="80" src="assets/d4.png"><p>${currRoll}</p></div>`;
        total += currRoll;
    }
    for (let i = 0; i < rolls.get('d6'); i++) {
        currRoll = roll_die(6);
        section.innerHTML += `<div class="die-roll"><img height="80" src="assets/d6.png"><p>${currRoll}</p></div>`;
        total += currRoll;
    }
    for (let i = 0; i < rolls.get('d8'); i++) {
        currRoll = roll_die(8);
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d8.png"><p>${currRoll}</p></div>`;
        total += currRoll;
    }
    for (let i = 0; i < rolls.get('d10'); i++) {
        currRoll = roll_die(10);
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d10.png"><p>${currRoll}</p></div>`;
        total += currRoll;
    }
    for (let i = 0; i < rolls.get('d12'); i++) {
        currRoll = roll_die(12);
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d12.png"><p>${currRoll}</p></div>`;
        total += currRoll;
    }
    for (let i = 0; i < rolls.get('d20'); i++) {
        currRoll = roll_die(20);
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d20.png"><p>${currRoll}</p></div>`;
        total += currRoll;
    }

    document.getElementById('roll-total').innerHTML = `<strong>Total: ${total}</strong>`;
}


function roll_die(die) {
    return Math.floor(Math.random() * die) + 1;
}