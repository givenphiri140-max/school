function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("active");
    }

    // Track buttons and sections for accessibility and UI
    const buttons = document.querySelectorAll(".section-btn");
    const sections = document.querySelectorAll("section");

    function showSection(sectionId) {
      // Hide all sections and update aria attributes
      sections.forEach(section => {
        if (section.id === sectionId) {
          section.classList.add("active");
          section.setAttribute("aria-hidden", "false");
          section.focus();
        } else {
          section.classList.remove("active");
          section.setAttribute("aria-hidden", "true");
        }
      });

      // Update buttons aria-selected
      buttons.forEach(btn => {
        if (btn.getAttribute("aria-controls") === sectionId) {
          btn.setAttribute("aria-selected", "true");
          btn.classList.add("active");
        } else {
          btn.setAttribute("aria-selected", "false");
          btn.classList.remove("active");
        }
      });
    }

    // Optionally show the first section on page load
    window.addEventListener('DOMContentLoaded', () => {
      showSection('scholarships');
    });