/**
 * AR MINI MUSEUM - CONTROLLER
 * Ultra-clean marker tracking and interaction controller.
 */

window.addEventListener('DOMContentLoaded', () => {
  const statusBanner = document.getElementById('status-banner');
  const statusText = document.getElementById('status-text');
  const hiroMarker = document.getElementById('hiro-marker');
  const modal = document.getElementById('marker-popup');
  const btnHelp = document.getElementById('btn-marker-help');
  const btnClose = document.getElementById('btn-close-popup');

  // Marker Found Handler
  if (hiroMarker) {
    hiroMarker.addEventListener('markerFound', () => {
      if (statusBanner && statusText) {
        statusBanner.className = 'status-detected';
        statusText.textContent = '🏛️ Hiro Marker Detected! Sri Lanka Museum';
      }
    });

    // Marker Lost Handler
    hiroMarker.addEventListener('markerLost', () => {
      if (statusBanner && statusText) {
        statusBanner.className = 'status-searching';
        statusText.textContent = '🔍 Searching for Hiro Marker... Point camera at marker';
      }
    });
  }

  // Modal handlers
  if (btnHelp && modal) {
    btnHelp.addEventListener('click', () => {
      modal.classList.add('open');
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }
});
