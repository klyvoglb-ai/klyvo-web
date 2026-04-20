/**
 * Hero Component (Light Theme)
 */
export const Hero = () => {
    return `
    <section id="home" class="hero">
        <div class="giant-diamond" style="width: 600px; height: 600px; top: -100px; right: -200px; opacity: 0.05;"></div>
        <div class="giant-diamond" style="width: 400px; height: 400px; bottom: 100px; left: -100px; opacity: 0.03;"></div>
        
        <div class="container hero-content reveal">
            <h1 class="hero-title">Elevamos tu marca al <br><span class="text-gradient">siguiente nivel.</span></h1>
            <p class="hero-subtitle">Diseño premium y tecnología de vanguardia para empresas que no se conforman con lo ordinario.</p>
            <div class="hero-actions">
                <a href="#contact" class="btn-primary">Empezar proyecto</a>
            </div>
        </div>
    </section>
    <style>
        .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-top: 100px;
            overflow: hidden;
            background: radial-gradient(circle at 10% 20%, rgba(46, 204, 113, 0.03) 0%, transparent 40%);
        }
        .hero-title {
            font-size: clamp(45px, 7vw, 85px);
            line-height: 1;
            margin-bottom: 30px;
            font-weight: 800;
            color: var(--text-main);
            letter-spacing: -2px;
        }
        .hero-subtitle {
            font-size: clamp(18px, 1.5vw, 22px);
            color: var(--text-muted);
            max-width: 650px;
            margin: 0 auto 50px;
        }
    </style>
    `;
};
