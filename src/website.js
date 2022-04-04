function headline() {
  const headline = document.createElement('h1');
  headline.classList.add('headline');
  headline.textContent = 'DUNE SALOON';

  return headline;
}

function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const pages = ['Home', 'Menu', 'Contact'];
  for (let page of pages) {
    const navButton = document.createElement('div');
    navButton.classList.add('nav-button');
    navButton.setAttribute('id', `${page.toLowerCase()}`);
    navButton.textContent = page;
    nav.appendChild(navButton);
  }

  return nav;
}

function tabBackground() {
  const background = document.createElement('div');
  background.classList.add('tab-background');

  return background;
}

function footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.textContent = 'Made by Sean Hammell';

  return footer;
}

function initialize() {
  const content = document.getElementById('content');

  content.appendChild(headline());
  content.appendChild(nav());
  content.appendChild(tabBackground());
  content.appendChild(footer());
}

export default initialize;