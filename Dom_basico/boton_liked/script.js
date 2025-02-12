
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button'); // Selecciona todos los botones

    buttons.forEach(button => { // Itera sobre cada botón
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');

            if (button.classList.contains('liked')) {
                button.classList.remove('liked');
                button.innerText = 'Me gusta';
            } else {
                button.classList.add('liked');
                button.innerText = 'Quitar me gusta';
            }
        });
    });
});