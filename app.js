
const ESP_URL = 'http://192.168.4.1';

function send(cmd) {
  fetch(`${ESP_URL}/cmd?action=${cmd}`)
    .then(r => r.text())
    .then(() => showStatus(cmd))
    .catch(() => showStatus('Erreur', true));
}

function showStatus(msg, isError = false) {
  const status = document.getElementById('status');
  status.textContent = isError ? '✗ ' + msg : '✓ ' + msg;
  status.style.background = isError ? '#dc2626' : '#059669';
  status.classList.add('show');
  setTimeout(() => status.classList.remove('show'), 2000);
}

window.onload = () => {
  fetch(`${ESP_URL}/ping`)
    .then(() => showStatus('ESP connecté'))
    .catch(() => showStatus('ESP non détecté', true));
};

