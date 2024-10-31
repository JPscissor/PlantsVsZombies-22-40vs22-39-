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