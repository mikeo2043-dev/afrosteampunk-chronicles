
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
  : id === '003'
  ? 'images/inventor.png'
  : id === '004'
? 'images/botanist.png'
: id === '005'
? 'images/engineer.png'
: id === '006'
? 'images/signalist.png'
  : id === '007'
  ? 'images/guardian-queen.png'
: id === '008'
? 'images/mechanic.png'
: id === '009'
? 'images/navigator.png'
: '';
  return `<article class="character">
    <span class="number">ASC-${id}</span>
    <h3>${name}</h3>
    ${portrait ? `<img src="${portrait}" alt="${name}" style="width:100%;height:220px;object-fit:cover;border-radius:10px;margin:12px 0;">` : ''}
    <p>${role}</p>
  </article>`;
}).join(''); 
const walletButton = document.getElementById('connect-wallet');

if (walletButton) {
  walletButton.addEventListener('click', async () => {
    if (!window.phantom?.solana?.isPhantom) {
      alert('Open this website in the Phantom app browser to connect your wallet.');
      return;
    }

    try {
      const response = await window.phantom.solana.connect();
      const address = response.publicKey.toString();

      walletButton.textContent =
        address.slice(0, 4) + '...' + address.slice(-4);
    } catch (error) {
      alert('Wallet connection was cancelled or failed.');
    }
  });
}
