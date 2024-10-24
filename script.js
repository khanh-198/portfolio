const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetSection = document.getElementById(link.getAttribute('href').substring(1));   

        scrollToSection(targetSection);

        console.log('clicked');
      });
    });

    function scrollToSection(targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      
        // Add the "active" class to the current link
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
          link.classList.remove('action');
          if (link.getAttribute('href').substring(1)=== targetSection.id) {
            link.classList.add('action');
            console.log('test');
          }
        });
      }

      const darkModeToggle = document.getElementById('dark-mode-toggle');
      const everyLinks = document.querySelectorAll('a');
      const otherLinks = document.querySelectorAll(".section a");
      const profilepic = document.getElementById('profile-picture');
      darkModeToggle.addEventListener('click', () => {
        const body = document.body;
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')){
          profilepic.src = '/assets/profilepic-dark.webp';
        }
        else {
          profilepic.src = 'assets/profilepic-light.jpg';
        }
        everyLinks.forEach(link => {
          if (body.classList.contains('dark-mode')) {
            link.classList.add('link-dark-mode');

          } else {
            link.classList.remove('link-dark-mode');
          }
        });
      });
      otherLinks.forEach(link => {
        if (body.classList.contains('dark-mode')) {
          link.classList.add('link-dark-mode');


        } else {
          link.classList.remove('link-dark-mode');
        }
      });

