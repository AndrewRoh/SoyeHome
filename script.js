(function() {
  'use strict';

  // ---- Sticky Header ----
  const header = document.getElementById('header');
  function handleScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- Mobile Menu ----
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('navList');

  hamburger.addEventListener('click', function() {
    const isOpen = navList.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navList.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navList.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ---- Active Nav on Scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = navList.querySelectorAll('a');

  function setActiveNav() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });

  // ---- Gallery Filter ----
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      galleryItems.forEach(function(item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ---- FAQ Accordion ----
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var btn = item.querySelector('.faq-question');
    btn.addEventListener('click', function() {
      var isActive = item.classList.contains('active');
      faqItems.forEach(function(i) {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---- Back to Top ----
  var backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();