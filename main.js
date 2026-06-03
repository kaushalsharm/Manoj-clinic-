// ── NAVBAR SCROLL ──
window.addEventListener('scroll', function() {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── FADE-UP OBSERVER ──
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      setTimeout(function() { e.target.classList.add('visible'); }, 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(function(el, i) {
  el.style.transitionDelay = (i % 4 * 0.1) + 's';
  obs.observe(el);
});

// ── HERO BACKGROUND LAZY LOAD ──
(function() {
  var hero = document.getElementById('hero');
  if (!hero) return;
  var bg = hero.getAttribute('data-bg');
  if (!bg) return;
  var img = new window.Image();
  img.onload = function() {
    hero.style.background = 'linear-gradient(rgba(15,23,42,0.65), rgba(15,23,42,0.55)), url("' + bg + '") center top / cover no-repeat';
  };
  img.src = bg;
})();



// ── REVIEW SLIDER ──
var rIdx = 0, rTotal = 5;
function slideReview(dir) { rIdx = (rIdx + dir + rTotal) % rTotal; updateReview(); }
function goReview(n) { rIdx = n; updateReview(); }
function updateReview() {
  var track = document.getElementById('reviewTrack');
  if (!track) return;
  track.style.transform = 'translateX(-' + (rIdx * 100) + '%)';
  document.querySelectorAll('.review-dot').forEach(function(d, i) {
    d.classList.toggle('active', i === rIdx);
  });
}
setInterval(function() { slideReview(1); }, 5000);

// ── FORM SUBMIT (Formspree) ──
async function handleSubmit(e) {
  e.preventDefault();
  var btn = document.getElementById('submitBtn');
  var form = document.getElementById('apptForm');
  var successMsg = document.getElementById('successMsg');
  var errorMsg = document.getElementById('errorMsg');

  btn.textContent = 'Bhej rahe hain...';
  btn.disabled = true;
  btn.style.opacity = '0.7';
  errorMsg.style.display = 'none';

  var formData = new FormData(form);

  try {
    var response = await fetch('https://formspree.io/f/mlgzqejn', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    var result = await response.json();
    if (response.ok) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    } else {
      errorMsg.textContent = (result.errors && result.errors[0] && result.errors[0].message) || 'Kuch galat hua! Dobara try karein.';
      errorMsg.style.display = 'block';
      btn.textContent = 'Book Appointment →';
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  } catch (err) {
    errorMsg.textContent = 'Network error! Internet check karein.';
    errorMsg.style.display = 'block';
    btn.textContent = 'Book Appointment →';
    btn.disabled = false;
    btn.style.opacity = '1';
  }
}

// ── WHATSAPP FLOATING BUTTON ──
(function() {
  var phone = '919927014521';
  var message = encodeURIComponent('Namaste! Main Manoj Dental Clinic mein appointment book karna chahta/chahti hoon.');

  // Button HTML
  var btn = document.createElement('a');
  btn.id = 'wa-float';
  btn.href = 'https://wa.me/' + phone + '?text=' + message;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  // Tooltip
  var tooltip = document.createElement('span');
  tooltip.className = 'wa-tooltip';
  tooltip.textContent = 'WhatsApp par chat karein';
  btn.appendChild(tooltip);

  document.body.appendChild(btn);
})();
