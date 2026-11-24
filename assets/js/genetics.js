// X 染色體性聯遺傳互動圖解
(function () {
  var root = document.getElementById('genetics-tool');
  if (!root) return;
  var parentsEl = document.getElementById('gen-parents');
  var kidsEl = document.getElementById('gen-children');
  var summaryEl = document.getElementById('gen-summary');
  var buttons = root.querySelectorAll('[data-scenario]');

  // X* 代表帶有 GLA 基因變異的 X 染色體
  var PERSON = {
    dadAffected: { fig: '👨', label: '父親', chromo: ['X*', 'Y'], status: '患者', cls: 'affected' },
    dadNormal: { fig: '👨', label: '父親', chromo: ['X', 'Y'], status: '未帶有變異', cls: '' },
    momCarrier: { fig: '👩', label: '母親', chromo: ['X*', 'X'], status: '帶因者（可能有症狀）', cls: 'carrier' },
    momNormal: { fig: '👩', label: '母親', chromo: ['X', 'X'], status: '未帶有變異', cls: '' },
    son: { fig: '👦', label: '兒子', chromo: ['X', 'Y'], status: '未帶有變異', cls: '' },
    sonAffected: { fig: '👦', label: '兒子', chromo: ['X*', 'Y'], status: '患者', cls: 'affected' },
    daughter: { fig: '👧', label: '女兒', chromo: ['X', 'X'], status: '未帶有變異', cls: '' },
    daughterCarrier: { fig: '👧', label: '女兒', chromo: ['X*', 'X'], status: '帶因者（可能有症狀）', cls: 'carrier' }
  };

  var SCENARIOS = {
    father: {
      parents: ['dadAffected', 'momNormal'],
      children: ['daughterCarrier', 'daughterCarrier', 'son', 'son'],
      summary: '父親是患者時：父親的 X 染色體一定傳給女兒，所以「每個女兒」都會帶有致病基因（100%）；父親傳給兒子的是 Y 染色體，所以「兒子不會」從父親遺傳到（0%）。'
    },
    mother: {
      parents: ['dadNormal', 'momCarrier'],
      children: ['daughterCarrier', 'daughter', 'sonAffected', 'son'],
      summary: '母親是帶因者時：母親會隨機傳給孩子兩條 X 染色體中的一條，所以「每一胎」不論男女，都有 50% 機率遺傳到致病基因。遺傳到的兒子為患者，遺傳到的女兒為帶因者，也可能出現症狀。'
    }
  };

  function card(key) {
    var p = PERSON[key];
    var el = document.createElement('div');
    el.className = 'child' + (p.cls ? ' ' + p.cls : '');
    var fig = document.createElement('div');
    fig.className = 'figure';
    fig.setAttribute('aria-hidden', 'true');
    fig.textContent = p.fig;
    var name = document.createElement('div');
    name.textContent = p.label;
    var chromo = document.createElement('div');
    chromo.className = 'chromo';
    p.chromo.forEach(function (c, i) {
      var s = document.createElement('span');
      if (c === 'X*') { s.className = 'mut'; s.textContent = 'X'; s.title = '帶有變異的 X 染色體'; }
      else s.textContent = c;
      chromo.appendChild(s);
      if (i === 0) chromo.appendChild(document.createTextNode(' '));
    });
    var st = document.createElement('span');
    st.className = 'status';
    st.textContent = p.status;
    el.appendChild(fig); el.appendChild(name); el.appendChild(chromo); el.appendChild(st);
    return el;
  }

  function show(name) {
    var s = SCENARIOS[name];
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.scenario === name ? 'true' : 'false'); });
    parentsEl.innerHTML = ''; kidsEl.innerHTML = '';
    s.parents.forEach(function (k) { parentsEl.appendChild(card(k)); });
    s.children.forEach(function (k) { kidsEl.appendChild(card(k)); });
    summaryEl.textContent = s.summary;
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { show(b.dataset.scenario); });
  });
  root.hidden = false;
  show('mother');
})();
