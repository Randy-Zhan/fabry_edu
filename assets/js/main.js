// 共用互動：手機選單、FAQ 全部展開/收合
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var faqBtn = document.querySelector('[data-faq-toggle]');
  if (faqBtn) {
    var items = document.querySelectorAll('details.faq');
    faqBtn.hidden = false;
    faqBtn.addEventListener('click', function () {
      var anyClosed = Array.prototype.some.call(items, function (d) { return !d.open; });
      items.forEach(function (d) { d.open = anyClosed; });
      faqBtn.textContent = anyClosed ? '全部收合' : '全部展開';
    });
  }
})();
