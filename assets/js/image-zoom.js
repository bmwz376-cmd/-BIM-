// 画像拡大機能
document.addEventListener('DOMContentLoaded', function() {
  // モーダルHTML作成
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.id = 'imageModal';
  modal.innerHTML = `
    <span class="image-modal-close">&times;</span>
    <div class="image-modal-content">
      <img id="modalImage" src="" alt="">
      <div class="zoom-controls">
        <button id="zoomOut" title="縮小">−</button>
        <button id="zoomReset" title="リセット">⟲</button>
        <button id="zoomIn" title="拡大">+</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById('modalImage');
  const closeBtn = modal.querySelector('.image-modal-close');
  let currentScale = 1;

  // 全ての画像にクリックイベントを追加
  document.querySelectorAll('.image-zoom img, article img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      modal.classList.add('active');
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      currentScale = 1;
      modalImg.style.transform = `scale(${currentScale})`;
    });
  });

  // モーダルを閉じる
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
  });

  // 背景クリックで閉じる
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });

  // ズームコントロール
  document.getElementById('zoomIn').addEventListener('click', function() {
    currentScale = Math.min(currentScale + 0.25, 3);
    modalImg.style.transform = `scale(${currentScale})`;
  });

  document.getElementById('zoomOut').addEventListener('click', function() {
    currentScale = Math.max(currentScale - 0.25, 0.5);
    modalImg.style.transform = `scale(${currentScale})`;
  });

  document.getElementById('zoomReset').addEventListener('click', function() {
    currentScale = 1;
    modalImg.style.transform = `scale(${currentScale})`;
  });

  // マウスホイールでズーム
  modalImg.addEventListener('wheel', function(e) {
    e.preventDefault();
    if (e.deltaY < 0) {
      currentScale = Math.min(currentScale + 0.1, 3);
    } else {
      currentScale = Math.max(currentScale - 0.1, 0.5);
    }
    modalImg.style.transform = `scale(${currentScale})`;
  });
});
