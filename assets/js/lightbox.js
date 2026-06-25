/* ============================================================
   lightbox.js — ouvre/ferme la photo en grand (dialog natif)
   ============================================================ */
(function () {
  "use strict";

  const trigger = document.getElementById("avatarTrigger");
  const dialog = document.getElementById("photoLightbox");
  const closeBtn = document.getElementById("lightboxClose");

  if (!trigger || !dialog || !closeBtn) return;

  function open() {
    dialog.showModal();
  }
  function close() {
    dialog.close();
  }

  trigger.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  // Ferme au clic sur le fond (hors de l'image)
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) close();
  });

  // <dialog> gère déjà Échap nativement pour la fermeture.
})();
