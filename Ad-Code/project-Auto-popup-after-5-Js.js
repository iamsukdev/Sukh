// পপআপ দেখানোর ফাংশন
function showPopup() {
  const overlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('popupBox');
  
  overlay.style.display = 'flex';
  
  // ছোট অ্যানিমেশনের জন্য একটু পর দেখাবে
  setTimeout(() => {
    popup.classList.add('show');
  }, 100);
}

// পপআপ বন্ধ করার ফাংশন
function closePopup() {
  const overlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('popupBox');
  
  popup.classList.remove('show');
  
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 400);
}

// পেজ লোড হওয়ার ৫ সেকেন্ড পর পপআপ দেখাবে
window.onload = function() {
  setTimeout(showPopup, 5000);
};