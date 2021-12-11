const form = document.getElementById('roll-form')
form.addEventListener('submit', event => {
  event.preventDefault()
  let data = new FormData(form);
  roll(data);
})


function roll(rolls) {
    const section = document.getElementById('roll-display');
    section.innerHTML = '';
    for (let i = 0; i < rolls.get('d2'); i++) {
        section.innerHTML += `<div class="die-roll"><img height="80" src="assets/d2.png"><p>${roll_die(2)}</p></div>`;
    }
    for (let i = 0; i < rolls.get('d4'); i++) {
        section.innerHTML += `<div class="die-roll"><img height="80" src="assets/d4.png"><p>${roll_die(4)}</p></div>`;
    }
    for (let i = 0; i < rolls.get('d6'); i++) {
        section.innerHTML += `<div class="die-roll"><img height="80" src="assets/d6.png"><p>${roll_die(6)}</p></div>`;
    }
    for (let i = 0; i < rolls.get('d8'); i++) {
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d8.png"><p>${roll_die(8)}</p></div>`;
    }
    for (let i = 0; i < rolls.get('d10'); i++) {
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d10.png"><p>${roll_die(10)}</p></div>`;
    }
    for (let i = 0; i < rolls.get('d12'); i++) {
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d12.png"><p>${roll_die(12)}</p></div>`;
    }
    for (let i = 0; i < rolls.get('d20'); i++) {
        section.innerHTML += `<div class="die-roll"><img height="90" src="assets/d20.png"><p>${roll_die(20)}</p></div>`;
    }
}


function roll_die(die) {
    return Math.floor(Math.random() * die) + 1;
}