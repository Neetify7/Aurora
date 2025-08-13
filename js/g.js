fetch('/json/g.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('gcontainer');
  const searchInput = document.getElementById('input');

  const buttons = data.map(item => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = item.text;
    button.style.display = 'block';

    button.addEventListener('click', () => {
      const url = new URL('/g/i', window.location.origin);
      url.searchParams.set('game', item.href);
      window.location.href = url.toString();
    });

    container.appendChild(button);
    return { element: button, text: item.text.toLowerCase() };
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    buttons.forEach(({ element, text }) => {
      element.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
})
.catch(error => {
  console.error('Error fetching JSON:', error);
});