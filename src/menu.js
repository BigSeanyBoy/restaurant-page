function menu() {
  const background = document.createElement('div');
  background.classList.add('tab-background');

  const menu = document.createElement('h2');
  menu.classList.add('menu');
  menu.textContent = 'Menu';
  background.appendChild(menu);

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  const menuItems = [['Grilled Muad-dib', '../dist/images/meat.png'], 
                     ['Mish Mish', '../dist/images/apricot.png'],
                     ['Melange Coffee', '../dist/images/coffee-cup.png'],
                     ['Tabara', '../dist/images/cinnamon-roll.png']];

  for (const item of menuItems) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('menu-image');
    image.setAttribute('src', item[1]);
    card.appendChild(image);

    const name = document.createElement('div');
    name.classList.add('menu-item');
    name.textContent = item[0];
    card.appendChild(name);

    cardContainer.appendChild(card);
  }

  background.appendChild(cardContainer);

  return background;

  // <a href="https://www.flaticon.com/free-icons/cinnamon-roll" title="cinnamon roll icons">Cinnamon roll icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/meat" title="meat icons">Meat icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/apricot" title="apricot icons">Apricot icons created by Freepik - Flaticon</a>
}

export default menu;