(function () {
    const canvas = document.getElementById('heroParticles');
    const ctx = canvas.getContext('2d');
    const hero = document.getElementById('hero');
    let W, H, particles = [];

    const COLORS = ['#52b788', '#74c69d', '#b7e4c7', '#d8f3dc'];
    const COUNT = 35;

    function resize() {
        W = canvas.width = hero.offsetWidth;
        H = canvas.height = hero.offsetHeight;
    }

    function randomBetween(a, b) { return a + Math.random() * (b - a); }

    function createParticle(fromBottom) {
        return {
            x: randomBetween(0, W),
            y: fromBottom ? H + randomBetween(5, 20) : randomBetween(0, H),
            r: randomBetween(2, 5),
            vy: randomBetween(0.2, 0.6),
            vx: randomBetween(-0.15, 0.15),
            alpha: randomBetween(0.4, 0.75),
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            pulse: randomBetween(0, Math.PI * 2),
            pulseSpeed: randomBetween(0.005, 0.015),
            driftPhase: randomBetween(0, Math.PI * 2),
            driftSpeed: randomBetween(0.003, 0.008),
            driftAmp: randomBetween(0.3, 0.7)
        };
    }

    function init() {
        particles = [];
        for (let i = 0; i < COUNT; i++) particles.push(createParticle(false));
    }

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r},${g},${b}`;
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            p.pulse += p.pulseSpeed;
            p.driftPhase += p.driftSpeed;

            const pulseFade = 0.8 + 0.2 * Math.sin(p.pulse);
            const a = p.alpha * pulseFade;

            const glowR = p.r * 8;
            const rgb = hexToRgb(p.color);
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
            grad.addColorStop(0, `rgba(${rgb},${a})`);
            grad.addColorStop(0.3, `rgba(${rgb},${(a * 0.4).toFixed(3)})`);
            grad.addColorStop(1, `rgba(${rgb},0)`);

            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            p.y -= p.vy;
            p.x += p.vx + Math.sin(p.driftPhase) * p.driftAmp;

            if (p.y < -10) Object.assign(p, createParticle(true));
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); init(); });
    resize();
    init();
    draw();
})();