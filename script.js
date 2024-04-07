document.addEventListener("DOMContentLoaded", function() {
    let popupButton = document.querySelector('.open-popup');
    let container = document.querySelector('.popup-container');
    let btnClose = document.querySelector('.close-btn');

    popupButton.addEventListener('click', function() {
            container.style.display = 'flex';
        });
        
        btnClose.addEventListener('click', function () {
            container.style.display = 'none';
        });
});