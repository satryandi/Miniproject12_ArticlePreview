const shareOption = document.querySelector('.option');

document.querySelector('.btn').addEventListener('click', function () {
    this.classList.toggle('active');
    shareOption.classList.toggle('active');
});
