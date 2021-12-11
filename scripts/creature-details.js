const form = document.getElementById('creature-search')
form.addEventListener('submit', event => {
  event.preventDefault()
  let data = new FormData(form);
  search(data.get('search'));
})

const score_mapping = new Map();
let modifier = -5;
for (let i = 1; i <= 30; i++) {
  if (i % 2 == 0) {
    modifier += 1;
  }

  if (modifier >= 0) {
    score_mapping.set(i, `+${modifier}`);
  }
  else {
    score_mapping.set(i, `${modifier}`);
  }
}
console.log(score_mapping);



function search(query) {
  let baseApi = 'https://www.dnd5eapi.co/api/monsters/';
  let formattedQuery = '';

  for(let i = 0; i < query.length; i++) {
    if (query[i] == ' ') {
      formattedQuery += '-';
    }
    else {
      formattedQuery += query[i];
    }
  }

  fetch(baseApi + formattedQuery).then( resp => {
    resp.json().then(json => {
      document.getElementById('details').style.opacity = 1;
      document.getElementById('creature-name').innerHTML = json.name;
      document.getElementById('armor-class').innerHTML = '<em>Armor Class: </em>' + json.armor_class;
      document.getElementById('hit-points').innerHTML = '<em>Hit Points: </em>' + json.hit_points;
      document.getElementById('str').innerHTML = `${json.strength} (${score_mapping.get(json.strength)})`;
      document.getElementById('dex').innerHTML = `${json.dexterity} (${score_mapping.get(json.dexterity)})`;
      document.getElementById('con').innerHTML = `${json.constitution} (${score_mapping.get(json.constitution)})`;
      document.getElementById('int').innerHTML = `${json.intelligence} (${score_mapping.get(json.intelligence)})`;
      document.getElementById('wis').innerHTML = `${json.wisdom} (${score_mapping.get(json.wisdom)})`;
      document.getElementById('cha').innerHTML = `${json.charisma} (${score_mapping.get(json.charisma)})`;
      
      let actions = document.getElementById('actions');
      actions.innerHTML = '';
      for (let i = 0; i < json.actions.length; i++) {
        let action = json.actions[i];
        actions.innerHTML += `<p><em>${action.name} - </em>${action.desc}</p>`;
      }
    });
  });

}