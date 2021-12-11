let participants = new Array();
let index = 0;


function next() {
    index = (index + 1) % participants.length;
    change_participant(participants[index]);
}

function previous() {
    index--;
    if (index < 0)
    {
        index = participants.length - 1;
    }
    change_participant(participants[index]);
}

function openModal(m) {
    m.style.display = 'block';
}

function closeModal(m) {
    m.style.display = 'none';
}

function add() {

    participants[participants.length] = document.getElementById("new-name").value;
    if (participants.length == 1) {
        change_participant(participants[index]);
    }
    update_tracking();
    closeModal(document.getElementById('add-modal'));
}

function initRemove() {
    let options = document.getElementById('remove-options');
    options.innerHTML = '';
    for (let i = 0; i < participants.length; i++) {
        options.innerHTML += `<div class="remove-widget"><p><strong>${participants[i]}</strong></p><button onclick="remove(\'${participants[i]}\')">&times;</button></div>`
    }
}

function remove(p) {

    let temp = new Array();
    let j = 0;
    for (let i = 0; i < participants.length; i++) {
        if (participants[i] != p) {
            temp[j] = participants[i];
            j++;
        }
    }
    participants = temp;
    update_tracking();
    initRemove();
}

function update_tracking() {
    let tracking = document.getElementById('tracking');

    tracking.innerText = `Currently tracking ${participants.length} participant`

    if (participants.length > 1) {
        tracking.innerText += 's';
    }


    if (participants.length == 0) {
        let section = document.getElementById('participant');
        section.style.opacity = 0;
    }
}

function change_participant(p) {
    let section = document.getElementById('participant');
    section.style.opacity = 100;

    let name = document.getElementById('name');
    name.innerText = p + "'s Turn";
}


