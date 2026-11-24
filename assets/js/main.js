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

  // 圖表提示框：滑鼠移入或鍵盤聚焦時顯示 data-tip
  var tips = document.querySelectorAll('[data-tip]');
  if (tips.length) {
    var tip = document.createElement('div');
    tip.className = 'tooltip'; tip.hidden = true; tip.setAttribute('role', 'tooltip');
    document.body.appendChild(tip);
    var place = function (x, y) {
      var w = tip.offsetWidth, h = tip.offsetHeight;
      var left = Math.min(Math.max(8, x - w / 2), window.innerWidth - w - 8);
      var top = y - h - 12; if (top < 8) top = y + 16;
      tip.style.left = left + 'px'; tip.style.top = top + 'px';
    };
    tips.forEach(function (el) {
      var show = function () { tip.textContent = el.getAttribute('data-tip'); tip.hidden = false; };
      el.addEventListener('pointerenter', show);
      el.addEventListener('pointermove', function (e) { place(e.clientX, e.clientY); });
      el.addEventListener('pointerleave', function () { tip.hidden = true; });
      el.addEventListener('focus', function () { show(); var r = el.getBoundingClientRect(); place(r.left + r.width / 2, r.top); });
      el.addEventListener('blur', function () { tip.hidden = true; });
    });
  }
})();
