const cells = document.querySelectorAll('.cell');
let draggedItem = null;

// Начало перетаскивания
document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = item;
        setTimeout(() => {
            item.style.display = 'none'; // Скрыть перетаскиваемый элемент
        }, 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.display = 'block'; // Показать элемент после завершения перетаскивания
            draggedItem = null;
        }, 0);
    });
});

// Перемещение элемента
cells.forEach(cell => {
    cell.addEventListener('dragover', (e) => {
        e.preventDefault(); // Разрешить перетаскивание
    });

    cell.addEventListener('drop', () => {
        if (draggedItem) {
            cell.appendChild(draggedItem); // Добавить перетаскиваемый элемент в ячейку
        }
    });
});
function checkFullscreen() {
    // Проверяем размеры окна
    if (window.innerWidth < screen.width || window.innerHeight < screen.height) {
        document.getElementById('overlay').style.display = 'flex';
    } else {
        document.getElementById('overlay').style.display = 'none';
    }
}

// Проверка при загрузке страницы
window.onload = checkFullscreen;

// Проверка при изменении размера окна
window.onresize = checkFullscreen;// Add this to your script.js file
const sunCounterElement = document.querySelector('.sun-counter');
let sunCounter = 0;



// Function to generate a random sun icon
function generateSunIcon() {
    const sunIcon = document.createElement('img');
    sunIcon.src = 'assets/sun.gif';
    sunIcon.classList.add('sun-icon');
    sunIcon.style.position = 'absolute';
    sunIcon.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    sunIcon.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    document.body.appendChild(sunIcon);
    return sunIcon;
}

// Function to handle sun icon click
function handleSunIconClick(sunIcon) {
    sunCounter++;
    sunCounterElement.querySelector('.sun-counter-text').textContent = sunCounter;
    sunIcon.remove();
}

// Generate a new sun icon when a cell is clicked
cells.forEach(cell => {
    cell.addEventListener('drop', () => {
        const sunIcon = generateSunIcon();
        sunIcon.addEventListener('click', () => handleSunIconClick(sunIcon));
    });
});