const btnAbrir = document.getElementById('btn-abrir');
const btnCerrar = document.getElementById('btn-cerrar');
const popup = document.getElementById('popup');

btnAbrir.addEventListener('click', () =>{
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add("popup-mostrar"), 100);
});

btnCerrar.addEventListener('click', () =>{
    popup.classList.remove("popup-mostrar");
    setTimeout(() => popup.style.display = 'none', 500);
});








const canvas = document.getElementById('snowCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        class Snowflake {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height - canvas.height;
                this.radius = Math.random() * 3 + 1;
                this.speed = Math.random() * 1 + 0.5;
                this.wind = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.6 + 0.4;
            }

            update() {
                this.y += this.speed;
                this.x += this.wind;

                if (this.y > canvas.height) {
                    this.y = -10;
                    this.x = Math.random() * canvas.width;
                }

                if (this.x > canvas.width) {
                    this.x = 0;
                } else if (this.x < 0) {
                    this.x = canvas.width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
                ctx.closePath();

                // Brillo
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
                ctx.fill();
                ctx.closePath();
            }
        }

        const snowflakes = [];
        // Ajustar cantidad de copos según tamaño de pantalla
        const snowflakeCount = window.innerWidth < 480 ? 50 : window.innerWidth < 768 ? 100 : 150;
        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push(new Snowflake());
        }

        function animateSnow() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snowflakes.forEach(flake => {
                flake.update();
                flake.draw();
            });
            requestAnimationFrame(animateSnow);
        }

        animateSnow();

        // Crear estrellas brillantes (menos en móviles)
        const section = document.querySelector('.section2');
        const starCount = window.innerWidth < 480 ? 15 : window.innerWidth < 768 ? 20 : 30;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            section.appendChild(star);
        }

        // Popup functionality
        const btnAbrir2 = document.getElementById('btn-abrir2');
        const btnCerrar2 = document.getElementById('btn-cerrar2');
        const popup2 = document.getElementById('popup2');

        btnAbrir2.addEventListener('click', () => {
            popup2.style.display = 'flex';
            setTimeout(() => popup2.classList.add('popup-mostrar'), 100);
        });

        btnCerrar2.addEventListener('click', () => {
            popup2.classList.remove('popup-mostrar');
            setTimeout(() => popup2.style.display = 'none', 500);
        });

        // Cerrar popup al hacer clic fuera
        popup2.addEventListener('click', (e) => {
            if (e.target === popup2) {
                popup2.classList.remove('popup-mostrar');
                setTimeout(() => popup2.style.display = 'none', 500);
            }
        });