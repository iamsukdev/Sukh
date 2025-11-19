window.onload = function() {
  setTimeout(function() {
    document.getElementById('notification').style.display = 'block';
  }, 2000); // ১ সেকেন্ড পর পপআপ দেখাবে
};

function closeNotification() {
  document.getElementById('notification').style.display = 'none';
}