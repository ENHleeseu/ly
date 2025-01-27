let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

if (food1s && food2s && foods) {
    food1s.addEventListener('click', () => {
        foods.style.backgroundImage = "url('pic/second.jpeg')";
    });

    food2s.addEventListener('click', () => {
        foods.style.backgroundImage = "url('pic/kfc.jpeg')";
    });
}

document.getElementById('menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
});

document.getElementById('search-icon').addEventListener('click', function() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    }
});


