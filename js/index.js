const box = document.getElementById('box');


box.addEventListener('mouseover', function handleMouseOver() {
    box.style.color = 'white';
});

box.addEventListener('mouseout', function handleMouseOut() {
    box.style.color = 'black';
});

