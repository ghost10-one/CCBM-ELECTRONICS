
    function send(cmd) {
      fetch('/cmd?action=' + cmd)
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
    
    window.onload = () => showStatus('Connecté');