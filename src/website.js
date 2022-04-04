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
      const tab = document.querySelector('.tab-background');
      while (tab.firstChild) {
        tab.removeChild(tab.firstChild);
      }
      tab.appendChild(pages[page]);
    });
    nav.appendChild(navButton);
  }

  return nav;
}

function tabBackground() {
  const background = document.createElement('div');
  background.classList.add('tab-background');
  background.appendChild(home());

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