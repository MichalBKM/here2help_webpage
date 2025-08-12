// Small interactivity: year, menu toggle, smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if(!nav) return;
  if(getComputedStyle(nav).display === 'none'){
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
    }
  })
});
