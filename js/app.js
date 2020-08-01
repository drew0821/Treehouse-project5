
baguetteBox.run('.photo-gallery');

function search() {
    let input = document.getElementById('search').value.toLowerCase();
    let images = document.querySelectorAll('a');
    for (let i = 0; i < images.length; i ++) {
        let link = images[i];
        let caption = link.getAttribute('data-title').toLowerCase();
        if (caption.indexOf(input) > -1) {
            link.style.display = '';
        } else {
           link.style.display = 'none';
        }
    }
}