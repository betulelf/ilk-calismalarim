window.addEventListener('load', function () {
    const cards = document.querySelectorAll('.card');
    
    // Her kart için animasyonu başlatma
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`; // Her kartın animasyonunu farklı zamanlarla başlat
    });
});


const galleryItems = document.querySelectorAll('.grid-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Resim üzerine tıklandığında modalı aç
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.src;
        caption.innerHTML = item.alt;
    });
});

// Kapatma butonuna tıklayınca modalı kapat
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Modal dışına tıklayınca da modalı kapat
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});




















