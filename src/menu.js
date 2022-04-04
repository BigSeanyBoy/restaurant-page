function menu() {
  const background = document.createElement('div');
  background.classList.add('tab-background');

  const menu = document.createElement('h2');
  menu.classList.add('menu');
  menu.textContent = 'Menu';
  background.appendChild(menu);

  const items = document.createElement('div');
  items.classList.add('items');
  items.textContent = 'Menu - Mish Mish (apricots) - Grilled Muad-dib - Tabara - Spice Coffee';
  background.appendChild(items);

  return background;

  // <a href="https://www.flaticon.com/free-icons/cinnamon-roll" title="cinnamon roll icons">Cinnamon roll icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/meat" title="meat icons">Meat icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/apricot" title="apricot icons">Apricot icons created by Freepik - Flaticon</a>
}

export default menu;