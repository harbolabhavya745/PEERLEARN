function enterApp() {
  document.getElementById('p-login').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');
}

function showPage(pageId) {

  const pages = document.querySelectorAll('.page');

  pages.forEach(page => {
    page.classList.remove('active');
  });

  const targetPage = document.getElementById(`p-${pageId}`);

  if (targetPage) {
    targetPage.classList.add('active');
  }
}
