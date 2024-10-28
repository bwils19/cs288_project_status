document.addEventListener('DOMContentLoaded', function() {
    // Initialize collapsible sections
    initializeCollapsible();

    // Add smooth scrolling for anchor links
    initializeSmoothScrolling();
});

function initializeCollapsible() {
    const collapsibles = document.getElementsByClassName("collapsible");

    Array.from(collapsibles).forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
}

function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // If clicking a TOC link, expand the corresponding section
                if (targetId !== 'toc') {
                    const section = findParentSection(targetElement);
                    if (section) {
                        const content = section.querySelector('.content');
                        if (content) {
                            content.style.display = 'block';
                        }
                    }
                }
            }
        });
    });
}

function findParentSection(element) {
    let current = element;
    while (current && !current.classList.contains('section')) {
        current = current.parentElement;
    }
    return current;
}

// Optional: Add method to expand/collapse all sections
function toggleAllSections(expand = true) {
    const contents = document.getElementsByClassName("content");
    Array.from(contents).forEach(content => {
        content.style.display = expand ? "block" : "none";
    });
}

// Optional: Add method to highlight current section in TOC
function updateTOCHighlight() {
    const sections = document.getElementsByClassName('section');
    const tocLinks = document.querySelectorAll('#toc a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        Array.from(sections).forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                currentSection = section.id;
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}