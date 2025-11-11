const envelope = document.getElementById('envelope');
const announcement = document.getElementById('announcement');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
    announcement.classList.toggle('hidden');
});
