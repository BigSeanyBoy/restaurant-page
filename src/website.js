import contact from './contact';
import home from './home';
import menu from './menu';

function headline() {
  const headline = document.createElement('h1');
  headline.classList.add('headline');
  headline.textContent = 'DUNE SALOON';

  return headline;
}

function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const pages = {home: home(), menu: menu(), contact: contact()};
  for (let page in pages) {
    const navButton = document.createElement('div');
    navButton.classList.add('nav-button');
    navButton.setAttribute('id', `${page}`);
    navButton.textContent = page;
    navButton.addEventListener('click', () => {
      const content = document.getElementById('content');
      content.removeChild(document.querySelector('.tab-background'));
      content.insertBefore(pages[page], document.querySelector('.footer'));
    });
    nav.appendChild(navButton);
  }

  return nav;
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
  content.appendChild(home());
  content.appendChild(footer());
}

export default initialize;