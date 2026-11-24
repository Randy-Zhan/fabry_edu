// 症狀自我檢核表：只在瀏覽器內計算，不儲存、不傳送任何資料
(function () {
  var form = document.getElementById('symptom-checklist');
  if (!form) return;
  var result = document.getElementById('checklist-result');

  var MESSAGES = {
    1: {
      title: '目前沒有特別的提示',
      body: '你沒有勾選相關項目。如果之後出現上述症狀，或對自己、家人的健康仍有疑問，都可以向醫師諮詢。'
    },
    2: {
      title: '建議和醫師討論',
      body: '你勾選的症狀有可能與法布瑞氏症有關，但也常見於其他原因。建議就診時主動告訴醫師這些症狀（包括出現的時間、頻率與誘發情境），並提出想進一步了解是否需要做法布瑞氏症相關檢查。'
    },
    3: {
      title: '建議安排就醫評估',
      body: '你勾選的項目包含器官相關症狀或家族史，建議儘早就醫評估。可至三軍總醫院心臟內科或相關專科（腎臟科、神經科）門診，告知醫師你的症狀與家族史。'
    }
  };

  function render(level, opts) {
    var m = MESSAGES[level];
    result.className = 'result level-' + level;
    result.innerHTML = '';

    var h = document.createElement('h3');
    h.textContent = m.title;
    result.appendChild(h);

    var p = document.createElement('p');
    p.textContent = m.body;
    result.appendChild(p);

    if (opts.family) {
      var f = document.createElement('p');
      f.textContent = '因為有家族史，即使目前沒有症狀，也建議接受遺傳諮詢；法布瑞氏症是性聯遺傳，家人可能也帶有相同的基因變異。';
      result.appendChild(f);
    }

    var d = document.createElement('p');
    d.className = 'disclaimer';
    d.textContent = '提醒：本檢核表僅供衛教參考，無法用來診斷或排除疾病。確診需要由醫師安排心臟評估、酵素活性及基因檢查。本頁不會記錄或傳送你的勾選內容。';
    result.appendChild(d);

    result.hidden = false;
    result.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var checked = form.querySelectorAll('input[type="checkbox"]:checked');
    var family = false, organ = false, count = 0;
    checked.forEach(function (c) {
      count++;
      if (c.dataset.kind === 'family') family = true;
      if (c.dataset.kind === 'organ') organ = true;
    });
    var level = (family || organ) ? 3 : (count > 0 ? 2 : 1);
    render(level, { family: family });
  });

  form.addEventListener('reset', function () {
    result.hidden = true;
    result.innerHTML = '';
  });
})();
