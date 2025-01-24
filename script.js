const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');

animateBtn.addEventListener('click', () => {
    animatedBox.style.transition = 'transform 1s';
    animatedBox.style.transform = 'translateY(100px)';

    setTimeout(() => {
        animatedBox.style.transform = 'translateY(0)';
    }, 1000);
});
