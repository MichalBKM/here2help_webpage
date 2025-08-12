// Interactivity: year, menu toggle, smooth scroll, reveal on scroll
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', () => {
  const nav = document.getElementById('nav');
  if(!nav) return;
  if(getComputedStyle(nav).display === 'none' || nav.style.display === 'none'){
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.background = 'linear-gradient(180deg, rgba(15,7,36,0.95), rgba(15,7,36,0.95))';
    nav.style.padding = '1rem';
    nav.style.borderRadius = '12px';
  } else {
    nav.style.display = 'none';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav
      const nav = document.getElementById('nav');
      if(window.innerWidth < 980 && nav) nav.style.display = 'none';
    }
  })
});

// Reveal elements on scroll using IntersectionObserver
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // if you want one-time reveal, unobserve
      observer.unobserve(entry.target);
    }
  });
},{threshold: 0.12});

reveals.forEach(r=>observer.observe(r));

// small micro-interaction: pulse CTA on load
window.addEventListener('load', ()=>{
  const primary = document.querySelector('.btn.primary');
  if(primary){
    primary.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-4px)' },
      { transform: 'translateY(0)' }
    ], { duration: 1000, iterations: 1, easing: 'ease-out' });
  }
});