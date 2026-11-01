
const characters = [
  ['001', 'The Explorer', 'Cartographer and pioneer of new lands.'],
  ['002', 'The Aviatrix', 'Pilot and aerial strategist.'],
  ['003', 'The Inventor', 'Visionary innovator and technologist.'],
  ['004', 'The Botanist', 'Plant scientist and bio-innovator.'],
  ['005', 'The Engineer', 'Builder of machines and city systems.'],
  ['006', 'The Signalist', 'Communications and network specialist.'],
  ['007', 'The Guardian', 'Protector of people and keeper of the Chronicles.'],
  ['008', 'The Mechanic', 'Machine maintenance and repair expert.'],
  ['009', 'The Navigator', 'Route strategist and explorer.'],
  ['010', 'The Scholar', 'Researcher, educator and keeper of knowledge.']
];

document.querySelector('#characters').innerHTML = characters.map(([id, name, role]) => {
  const portrait = id === '001'
  ? 'images/explorer.png'
  : id === '002'
  ? 'images/aviatrix.png'
  : id === '007'
  ? 'images/guardian-queen.png'
  : '';
  return `<article class="character">
    <span class="number">ASC-${id}</span>
    <h3>${name}</h3>
    ${portrait ? `<img src="${portrait}" alt="${name}" style="width:100%;height:220px;object-fit:cover;border-radius:10px;margin:12px 0;">` : ''}
    <p>${role}</p>
  </article>`;
}).join('');
