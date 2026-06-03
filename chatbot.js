(function () {
  // ── FAQ DATA ──
  var faqs = [
    {
      keywords: ['time', 'timing', 'hour', 'open', 'close', 'kab', 'band', 'khula', 'samay', 'sunday', 'monday', 'saturday', 'week'],
      answer: '🕐 <b>Clinic Timings:</b><br>Mon–Sat: 9AM – 8PM<br>Sunday: 10AM – 4PM<br><br>Emergency care bhi available hai!'
    },
    {
      keywords: ['address', 'location', 'kahan', 'where', 'jagah', 'agra', 'trans yamuna', 'colony', 'map', 'directions', 'pata'],
      answer: '📍 <b>Hamaara Pata:</b><br>B-49, Near Om Medical Store, Phase-1,<br>Trans Yamuna Colony, Agra – 282006<br><br><a href="https://maps.app.goo.gl/rNLpbzYVw9WM4QkG8" target="_blank" style="color:#25D366;font-weight:600;">📌 Google Maps pe dekhein →</a>'
    },
    {
      keywords: ['phone', 'number', 'call', 'contact', 'mobile', 'number', 'fon', 'call karna', 'reach'],
      answer: '📞 <b>Phone Number:</b><br><a href="tel:+919927014521" style="color:#2563EB;font-weight:700;">+91 99270 14521</a><br><br>Mon–Sat 9AM–8PM, Sun 10AM–4PM pe call kar sakte hain!'
    },
    {
      keywords: ['appointment', 'book', 'booking', 'appoint', 'slot', 'schedule', 'milna', 'date', 'fix'],
      answer: '📅 <b>Appointment Book Karein:</b><br>Neeche diye gaye options se book karein:<br><br><a href="#contact" style="color:#2563EB;font-weight:600;">📋 Online Form Bharein →</a><br>ya<br><a href="tel:+919927014521" style="color:#2563EB;font-weight:600;">📞 Call: +91 99270 14521</a><br>ya<br><a href="https://wa.me/919927014521?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" style="color:#25D366;font-weight:600;">💬 WhatsApp karein →</a>'
    },
    {
      keywords: ['implant', 'missing teeth', 'tooth replace', 'daant lagwana', 'permanent', 'artificial teeth'],
      answer: '🦷 <b>Dental Implants:</b><br>Hamare permanent, natural-looking implants missing teeth ko replace karte hain.<br><br>✅ Long-lasting results<br>✅ Natural feel & look<br>✅ Modern technology<br><br>Consultation ke liye <a href="#contact" style="color:#2563EB;">appointment lein →</a>'
    },
    {
      keywords: ['whitening', 'white', 'yellow', 'safed', 'brightness', 'daag', 'stain', 'chamak'],
      answer: '✨ <b>Teeth Whitening:</b><br>Advanced whitening treatment se smile 8 shades tak brighten hoti hai — sirf 1 session mein!<br><br>Cosmetic consultation ke liye <a href="#contact" style="color:#2563EB;">book karein →</a>'
    },
    {
      keywords: ['braces', 'aligners', 'tedhe', 'crooked', 'straight', 'orthodontic', 'teda', 'wire', 'bracket'],
      answer: '😁 <b>Dental Braces & Aligners:</b><br>Metal, ceramic aur invisible aligners available hain.<br><br>✅ Kids & adults dono ke liye<br>✅ Comfortable treatment<br>✅ Long-lasting results<br><br><a href="#contact" style="color:#2563EB;">Free consultation lein →</a>'
    },
    {
      keywords: ['root canal', 'rct', 'dard', 'pain', 'infection', 'infected', 'daant dard', 'toothache', 'ache', 'hurt'],
      answer: '💉 <b>Root Canal Treatment (RCT):</b><br>Humara painless root canal therapy infected teeth save karta hai.<br><br>Dard ho raha hai? Abhi call karein:<br><a href="tel:+919927014521" style="color:#2563EB;font-weight:700;">📞 +91 99270 14521</a>'
    },
    {
      keywords: ['kids', 'children', 'child', 'baby', 'bachcha', 'bachche', 'pediatric', 'small', 'chhota'],
      answer: '🧒 <b>Kids Dentistry:</b><br>Bachon ke liye specially gentle aur friendly dental care.<br><br>✅ Calm & fun environment<br>✅ Painless procedures<br>✅ Experienced pediatric care<br><br>Appointment ke liye <a href="#contact" style="color:#2563EB;">click karein →</a>'
    },
    {
      keywords: ['cleaning', 'scaling', 'polish', 'checkup', 'check up', 'regular', 'general', 'saaf', 'cleaning', 'tartar', 'plaque'],
      answer: '🪥 <b>General Dental Care & Cleaning:</b><br>Complete dental checkup, scaling aur professional cleaning jo teeth healthy rakhti hai.<br><br>Regular checkup recommended hai har 6 mahine mein!<br><a href="#contact" style="color:#2563EB;">Book karein →</a>'
    },
    {
      keywords: ['fee', 'price', 'cost', 'charges', 'kitna', 'paisa', 'rupee', 'rate', 'free', 'consultation', 'kitne ka'],
      answer: '💰 <b>Consultation:</b><br>Pehli consultation <b>FREE</b> hai!<br><br>Treatment charges service ke hisaab se alag hote hain. Exact quote ke liye:<br><a href="tel:+919927014521" style="color:#2563EB;">📞 Call karein →</a> ya <a href="#contact" style="color:#2563EB;">form bharein →</a>'
    },
    {
      keywords: ['doctor', 'dr', 'manoj', 'yadav', 'experience', 'qualified', 'expert', 'kaun', 'who'],
      answer: '👨‍⚕️ <b>Dr. Manoj Yadav:</b><br>20+ saal ke experience ke saath Agra ke most trusted dental expert.<br><br>✅ 15,000+ satisfied patients<br>✅ Modern techniques<br>✅ Painless treatment<br><br>Milne ke liye <a href="#contact" style="color:#2563EB;">appointment lein →</a>'
    },
    {
      keywords: ['emergency', 'urgent', 'jaldi', 'abhi', 'immediately', 'asap', 'turant', 'help'],
      answer: '🚨 <b>Emergency Dental Care:</b><br>Emergency mein seedha call karein:<br><a href="tel:+919927014521" style="color:#e53e3e;font-weight:700;font-size:1.1em;">📞 +91 99270 14521</a><br><br>Ya WhatsApp karein:<br><a href="https://wa.me/919927014521?text=Dental%20Emergency%20-%20Need%20urgent%20help" target="_blank" style="color:#25D366;font-weight:600;">💬 WhatsApp Emergency →</a>'
    },
    {
      keywords: ['whatsapp', 'wa', 'message', 'chat', 'text'],
      answer: '💬 <b>WhatsApp pe Contact Karein:</b><br><a href="https://wa.me/919927014521?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20dental%20services" target="_blank" style="color:#25D366;font-weight:700;">👉 WhatsApp: +91 99270 14521</a><br><br>Appointment, query ya koi bhi sawaal — WhatsApp pe poochhein!'
    },
  ];

  var defaultAnswer = '🤔 Mujhe is sawaal ka jawab nahi pata. Please seedha contact karein:<br><br>📞 <a href="tel:+919927014521" style="color:#2563EB;font-weight:600;">+91 99270 14521</a><br>💬 <a href="https://wa.me/919927014521" target="_blank" style="color:#25D366;font-weight:600;">WhatsApp karein →</a>';

  var quickReplies = [
    { label: '🕐 Timings', q: 'timing' },
    { label: '📍 Address', q: 'address' },
    { label: '📅 Appointment', q: 'appointment book' },
    { label: '💰 Fees', q: 'fee kitna hai' },
    { label: '🚨 Emergency', q: 'emergency' },
    { label: '👨‍⚕️ Doctor', q: 'doctor kaun hain' },
  ];

  // ── MATCH LOGIC ──
  function getAnswer(input) {
    var text = input.toLowerCase();
    var best = null, bestScore = 0;
    for (var i = 0; i < faqs.length; i++) {
      var score = 0;
      for (var j = 0; j < faqs[i].keywords.length; j++) {
        if (text.indexOf(faqs[i].keywords[j]) !== -1) score++;
      }
      if (score > bestScore) { bestScore = score; best = faqs[i]; }
    }
    return bestScore > 0 ? best.answer : defaultAnswer;
  }

  // ── BUILD UI ──
  var style = document.createElement('style');
  style.textContent = `
    #cb-toggle {
      position:fixed; bottom:96px; right:28px; z-index:9998;
      width:54px; height:54px; border-radius:50%;
      background:linear-gradient(135deg,#2563EB,#0EA5E9);
      border:none; cursor:pointer; box-shadow:0 4px 18px rgba(37,99,235,0.4);
      display:flex; align-items:center; justify-content:center;
      transition:transform .2s,box-shadow .2s;
    }
    #cb-toggle:hover { transform:scale(1.1); box-shadow:0 6px 24px rgba(37,99,235,0.55); }
    #cb-toggle svg { width:24px; height:24px; }
    #cb-badge {
      position:absolute; top:-4px; right:-4px;
      width:18px; height:18px; background:#ef4444; border-radius:50%;
      font-size:10px; font-weight:700; color:#fff;
      display:flex; align-items:center; justify-content:center;
      border:2px solid #fff;
    }
    #cb-box {
      position:fixed; bottom:160px; right:28px; z-index:9997;
      width:340px; max-height:520px;
      background:#fff; border-radius:18px;
      box-shadow:0 8px 40px rgba(15,23,42,0.18);
      display:flex; flex-direction:column;
      overflow:hidden; transform-origin:bottom right;
      transition:opacity .25s, transform .25s;
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    #cb-box.cb-hidden { opacity:0; transform:scale(0.85); pointer-events:none; }
    #cb-head {
      background:linear-gradient(135deg,#1D4ED8,#0EA5E9);
      padding:14px 16px; display:flex; align-items:center; gap:10px;
    }
    .cb-avatar {
      width:38px; height:38px; border-radius:50%;
      background:rgba(255,255,255,0.25);
      display:flex; align-items:center; justify-content:center;
      font-size:1.2rem; flex-shrink:0;
    }
    .cb-head-info { flex:1; }
    .cb-head-name { color:#fff; font-weight:700; font-size:.9rem; }
    .cb-head-status { color:rgba(255,255,255,0.8); font-size:.72rem; display:flex; align-items:center; gap:4px; }
    .cb-dot { width:6px; height:6px; background:#4ade80; border-radius:50%; animation:cbpulse 1.5s infinite; }
    @keyframes cbpulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
    #cb-close {
      background:none; border:none; cursor:pointer; padding:4px;
      color:rgba(255,255,255,0.8); font-size:1.2rem; line-height:1;
      transition:color .2s;
    }
    #cb-close:hover { color:#fff; }
    #cb-msgs {
      flex:1; overflow-y:auto; padding:14px 12px; display:flex;
      flex-direction:column; gap:10px; background:#F8FAFC;
    }
    #cb-msgs::-webkit-scrollbar { width:4px; }
    #cb-msgs::-webkit-scrollbar-thumb { background:#CBD5E1; border-radius:4px; }
    .cb-msg { display:flex; align-items:flex-end; gap:7px; max-width:90%; }
    .cb-msg.bot { align-self:flex-start; }
    .cb-msg.user { align-self:flex-end; flex-direction:row-reverse; }
    .cb-bubble {
      padding:10px 13px; border-radius:14px; font-size:.83rem; line-height:1.6;
    }
    .cb-msg.bot .cb-bubble {
      background:#fff; color:#0F172A;
      border-bottom-left-radius:4px;
      box-shadow:0 1px 4px rgba(0,0,0,0.08);
    }
    .cb-msg.user .cb-bubble {
      background:linear-gradient(135deg,#2563EB,#0EA5E9);
      color:#fff; border-bottom-right-radius:4px;
    }
    .cb-msg.bot .cb-bubble a { color:#2563EB; }
    .cb-typing { display:flex; gap:4px; align-items:center; padding:10px 14px; }
    .cb-typing span {
      width:7px; height:7px; background:#94A3B8; border-radius:50%;
      animation:cbtype .9s infinite;
    }
    .cb-typing span:nth-child(2) { animation-delay:.15s; }
    .cb-typing span:nth-child(3) { animation-delay:.3s; }
    @keyframes cbtype { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
    #cb-quick {
      display:flex; gap:6px; flex-wrap:wrap; padding:8px 12px;
      background:#fff; border-top:1px solid #E2E8F0;
    }
    .cb-qbtn {
      background:#EFF6FF; border:1px solid #BFDBFE; color:#1D4ED8;
      border-radius:20px; padding:5px 11px; font-size:.75rem; font-weight:600;
      cursor:pointer; transition:background .2s;
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    .cb-qbtn:hover { background:#DBEAFE; }
    #cb-input-row {
      display:flex; gap:8px; padding:10px 12px;
      border-top:1px solid #E2E8F0; background:#fff; align-items:center;
    }
    #cb-input {
      flex:1; border:1.5px solid #E2E8F0; border-radius:24px;
      padding:9px 14px; font-size:.83rem; outline:none;
      font-family:'Plus Jakarta Sans',sans-serif; color:#0F172A;
      transition:border-color .2s;
    }
    #cb-input:focus { border-color:#2563EB; }
    #cb-send {
      width:36px; height:36px; border-radius:50%;
      background:linear-gradient(135deg,#2563EB,#0EA5E9);
      border:none; cursor:pointer; display:flex; align-items:center;
      justify-content:center; flex-shrink:0; transition:transform .15s;
    }
    #cb-send:hover { transform:scale(1.08); }
    @media(max-width:400px) {
      #cb-box { width:calc(100vw - 24px); right:12px; bottom:150px; }
      #cb-toggle { right:20px; bottom:88px; }
    }
  `;
  document.head.appendChild(style);

  // Toggle button
  var toggle = document.createElement('button');
  toggle.id = 'cb-toggle';
  toggle.setAttribute('aria-label', 'Open Chat');
  toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span id="cb-badge">1</span>';
  document.body.appendChild(toggle);

  // Chat box
  var box = document.createElement('div');
  box.id = 'cb-box';
  box.className = 'cb-hidden';
  box.innerHTML = `
    <div id="cb-head">
      <div class="cb-avatar">🦷</div>
      <div class="cb-head-info">
        <div class="cb-head-name">Manoj Dental Clinic</div>
        <div class="cb-head-status"><span class="cb-dot"></span> Online — Abhi jawab dein</div>
      </div>
      <button id="cb-close" aria-label="Close chat">✕</button>
    </div>
    <div id="cb-msgs"></div>
    <div id="cb-quick"></div>
    <div id="cb-input-row">
      <input id="cb-input" type="text" placeholder="Koi sawaal poochhein..." autocomplete="off" />
      <button id="cb-send" aria-label="Send">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
      </button>
    </div>
  `;
  document.body.appendChild(box);

  var msgs = document.getElementById('cb-msgs');
  var input = document.getElementById('cb-input');
  var badge = document.getElementById('cb-badge');
  var quickDiv = document.getElementById('cb-quick');

  // Quick replies
  quickReplies.forEach(function(qr) {
    var btn = document.createElement('button');
    btn.className = 'cb-qbtn';
    btn.textContent = qr.label;
    btn.addEventListener('click', function() { sendMsg(qr.q); });
    quickDiv.appendChild(btn);
  });

  function addMsg(text, type) {
    var wrap = document.createElement('div');
    wrap.className = 'cb-msg ' + type;
    var bubble = document.createElement('div');
    bubble.className = 'cb-bubble';
    bubble.innerHTML = text;
    wrap.appendChild(bubble);
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
    return wrap;
  }

  function showTyping() {
    var wrap = document.createElement('div');
    wrap.className = 'cb-msg bot';
    wrap.id = 'cb-typing-indicator';
    wrap.innerHTML = '<div class="cb-bubble"><div class="cb-typing"><span></span><span></span><span></span></div></div>';
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    var t = document.getElementById('cb-typing-indicator');
    if (t) t.remove();
  }

  function sendMsg(text) {
    var txt = (text || input.value).trim();
    if (!txt) return;
    input.value = '';
    addMsg(txt, 'user');
    showTyping();
    setTimeout(function() {
      removeTyping();
      addMsg(getAnswer(txt), 'bot');
    }, 700);
  }

  // Welcome message
  setTimeout(function() {
    addMsg('Namaste! 🙏 Main <b>Manoj Dental Clinic</b> ka assistant hoon.<br>Aapke koi bhi sawaal ka jawab dene ke liye yahan hoon!<br><br>Neeche se koi option chunein ya apna sawaal likhein 👇', 'bot');
  }, 400);

  // Event listeners
  document.getElementById('cb-send').addEventListener('click', function() { sendMsg(); });
  input.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMsg(); });

  toggle.addEventListener('click', function() {
    box.classList.toggle('cb-hidden');
    badge.style.display = 'none';
    if (!box.classList.contains('cb-hidden')) input.focus();
  });
  document.getElementById('cb-close').addEventListener('click', function() {
    box.classList.add('cb-hidden');
  });

})();
