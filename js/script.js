//Show Nav
function showNav(navId, btnId) {
  // Menghapus class 'active' dari semua nav-content
  var navContents = document.querySelectorAll(".nav-content");
  navContents.forEach(function (navContent) {
    navContent.classList.remove("active");
  });
  var btnContents = document.querySelectorAll(".btn-nav");
  btnContents.forEach(function (btnContent) {
    btnContent.classList.remove("active");
  });

  // Menambah class 'active' hanya pada nav-content yang diinginkan
  var selectedNav = document.getElementById(navId);
  if (selectedNav) {
    selectedNav.classList.add("active");
  }
  var selectedBtn = document.getElementById(btnId);
  if (selectedBtn) {
    selectedBtn.classList.add("active");
  }
}
