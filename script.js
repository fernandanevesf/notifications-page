'use strict'

const unreadCounter = document.querySelector('.unread-number');
const markReadButton = document.querySelector('button');
const unreadNotifications = document.querySelectorAll('.unread-item'); 

function updateCounter(){
    unreadCounter.innerHTML = 0;
}

function markAllRead(){
    unreadNotifications.forEach((element) => {
        element.classList.remove('unread-item');
    });
    updateCounter();
}

markReadButton.addEventListener('click', markAllRead);