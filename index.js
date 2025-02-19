
    document.addEventListener("DOMContentLoaded", function() {
        // Select the navbar
        const navbar = document.querySelector(".navbar ul");

        navbar.addEventListener("click", function(event) {
            // Check if a list item (li) was clicked
            if (event.target.tagName === "LI") {
                // Get section name from text (trimmed to remove spaces)
                let sectionName = event.target.textContent.trim().replace(" |", "");
                
                // Define section mappings
                let sections = {
                    "HOME": ".banner",
                    "COLLECTIONS": ".gallery",
                    "ABOUT": ".content",
                    "CONTACT": ".contact"
                };

                // Scroll to the corresponding section if found
                if (sections[sectionName]) {
                    document.querySelector(sections[sectionName]).scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

