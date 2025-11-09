// Función para el menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuContent = document.querySelector('.menu-content');
    
    if (menuToggle && menuContent) {
        menuToggle.addEventListener('click', function() {
            if (menuContent.style.display === 'block') {
                menuContent.style.display = 'none';
            } else {
                menuContent.style.display = 'block';
            }
        });
        
        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener('click', function(event) {
            if (!event.target.matches('.menu-toggle') && !event.target.matches('.menu-content a')) {
                menuContent.style.display = 'none';
            }
        });
    }
});