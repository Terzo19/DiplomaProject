    
  // Dropdown Menu for all pages //  
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("right");

    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
