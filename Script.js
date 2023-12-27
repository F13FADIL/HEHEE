// Ambil elemen tombol dan pop-up
const moveButton = document.getElementById('moveButton');
const popupButton = document.getElementById('popupButton');
const popupContainer = document.getElementById('popupContainer');

// Fungsi untuk memindahkan tombol
moveButton.addEventListener('click', function() {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    moveButton.style.position = 'absolute';
    moveButton.style.left = newX + 'px';
    moveButton.style.top = newY + 'px';
});

// Fungsi untuk menampilkan pop-up
popupButton.addEventListener('click', function() {
    popupContainer.style.display = 'flex';
});

// Fungsi untuk menutup pop-up
function closePopup() {
    popupContainer.style.display = 'none';
}
