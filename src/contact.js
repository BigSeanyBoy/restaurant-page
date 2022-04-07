function contact() {
  const background = document.createElement('div');
  background.classList.add('tab-background');

  const contact = document.createElement('h2');
  contact.classList.add('contact');
  contact.textContent = 'Contact';
  background.appendChild(contact);

  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = 'Message';
  background.appendChild(message);

  const courier = document.createElement('div');
  courier.classList.add('courier');
  courier.textContent = 'Guild Courier';
  background.appendChild(courier);

  const location = document.createElement('div');
  location.classList.add('location');
  location.textContent = 'Location';
  background.appendChild(location);

  const sietch = document.createElement('div');
  sietch.classList.add('sietch');
  sietch.textContent = 'Sietch Tabr';
  background.appendChild(sietch);

  const map = document.createElement('img');
  map.classList.add('map');
  map.setAttribute('src', 'images/dune_map.png');
  background.appendChild(map);

  return background;

  // https://atlasoficeandfireblog.wordpress.com/2019/04/01/atlas-of-the-imperium-arrakis/
}

export default contact;