new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
    caption: function(trigger) {
        return trigger.querySelector('img').getAttribute('alt');
    }
});

const topButton = document.querySelector('.topButton');

topButton.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});

window.addEventListener('scroll', () => {
if(window.scrollY > 300) {
    topButton.style.display = 'block';
} else {
    topButton.style.display = 'none';
}
});
