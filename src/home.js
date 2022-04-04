function home() {
  const background = document.createElement('div');
  background.classList.add('tab-background');

  const about = document.createElement('h2');
  about.classList.add('about');
  about.textContent = 'About';
  background.appendChild(about);

  const copy = document.createElement('div');
  copy.classList.add('copy');
  copy.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit explicabo doloremque illum porro nesciunt, unde similique ratione ut dicta dignissimos quia expedita, repudiandae rerum. Cumque commodi illo dolorum impedit!'
  background.appendChild(copy);

  return background;
}

export default home;