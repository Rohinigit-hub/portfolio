 
    
        // Theme toggle logic
        const themeBtn = document.getElementById('theme-btn');
        const body = document.body;
        themeBtn.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
        });

        // Typing Effect Logic
        function runTypingEffect() {
            const prefixTarget = document.getElementById('type-prefix');
            const nameTarget = document.getElementById('type-name');
            const prefixText = "I'm ";
            const nameText = "Rohini Sharma.";
            
            let pIdx = 0;
            let nIdx = 0;
            const speed = 100; // Typing speed in ms

            function typePrefix() {
                if (pIdx < prefixText.length) {
                    prefixTarget.textContent += prefixText.charAt(pIdx);
                    pIdx++;
                    setTimeout(typePrefix, speed);
                } else {
                    typeName();
                }
            }

            function typeName() {
                if (nIdx < nameText.length) {
                    nameTarget.textContent += nameText.charAt(nIdx);
                    nIdx++;
                    setTimeout(typeName, speed);
                }
            }

            // Reset targets first
            prefixTarget.textContent = "";
            nameTarget.textContent = "";
            typePrefix();
        }

        // Scroll reveal animation
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => { 
                if (entry.isIntersecting) entry.target.classList.add('active'); 
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // Form submission simulation
        const form = document.getElementById('inquiry-form');
        const successMsg = document.getElementById('form-success');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.display = 'none';
            successMsg.style.display = 'block';
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successMsg.style.display = 'none';
            }, 5000);
        });

        // Start typing effect on load
        window.addEventListener('DOMContentLoaded', runTypingEffect);
   

