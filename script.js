const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[0%]')
}


document.addEventListener('DOMContentLoaded', () => {
    const dismissButton = document.getElementById('dismiss-btn');
    const alertContainer = document.getElementById('alert-container');
  
    if (dismissButton && alertContainer) {
      dismissButton.addEventListener('click', () => {
        alertContainer.remove(); // Remove the container from the DOM
      });
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Array of IDs for sections to animate
    const sectionsToAnimate = ['animated-content-1', 'animated-content-2'];
    
    sectionsToAnimate.forEach(id => {
      const animatedContent = document.getElementById(id);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add Animate.css classes when the element is in view
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
            // Stop observing the element once it has been animated
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2 // Adjust this as needed for better triggering
      });

      observer.observe(animatedContent);
    });
  });


        // Initialize Swiper.js for the case study carousel
        var swiper = new Swiper(".swiper-container", {
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
  
        // Scroll-based animations
        document.addEventListener("scroll", function () {
          const elements = document.querySelectorAll(".scroll-fade-in-up");
          elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
  
            if (position < screenPosition) {
              el.classList.add("fade-in-up");
            }
          });
        });
  
        // Scroll-based fade-in animation
        document.addEventListener("scroll", function () {
          const elements = document.querySelectorAll(".scroll-fade-in-up");
          elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
  
            if (position < screenPosition) {
              el.classList.add("fade-in-up");
            }
          });
        });
  

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          });
        });


        document.getElementById('readMoreBtnLocalSEO').onclick = function() {
          const moreText = document.getElementById('moreTextLocalSEO');
          moreText.classList.toggle('hidden');
          this.textContent = moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
      };
      
      document.getElementById('readMoreBtnOnPageSEO').onclick = function() {
          const moreText = document.getElementById('moreTextOnPageSEO');
          moreText.classList.toggle('hidden');
          this.textContent = moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
      };
      
      // Repeat for Technical SEO
      document.getElementById('readMoreBtnTechnicalSEO').onclick = function() {
          const moreText = document.getElementById('moreTextTechnicalSEO');
          moreText.classList.toggle('hidden');
          this.textContent = moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
      };
      
      // Repeat for Keyword Research
      document.getElementById('readMoreBtnKeywordResearch').onclick = function() {
          const moreText = document.getElementById('moreTextKeywordResearch');
          moreText.classList.toggle('hidden');
          this.textContent = moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
      };
      
      // Repeat for Off-Page SEO
      document.getElementById('readMoreBtnOffPageSEO').onclick = function() {
          const moreText = document.getElementById('moreTextOffPageSEO');
          moreText.classList.toggle('hidden');
          this.textContent = moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
      };
      