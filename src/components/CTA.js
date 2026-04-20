/**
 * CTA Component (The Vibrant Green Box)
 */
export const CTA = () => {
    return `
    <section id="contact" class="cta-section container reveal">
        <div class="cta-box">
            <div class="cta-content">
                <h2>¿Listo para transformar <br>tu marca?</h2>
                <p>Únete a las empresas que ya están escalando su presencia <br>digital con tecnología modular.</p>
                <button class="btn-primary">Comenzar ahora</button>
            </div>
            <!-- Subtly floating geometric elements inside -->
            <div class="cta-diamond d1"></div>
            <div class="cta-diamond d2"></div>
        </div>
    </section>
    <style>
        .cta-section { padding: 5rem 0 10rem; }
        .cta-box {
            background: var(--primary);
            border-radius: 40px;
            padding: 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(46, 204, 113, 0.3);
        }
        .cta-content { position: relative; z-index: 2; }
        .cta-box h2 { 
            color: #040E24; 
            font-size: clamp(32px, 4vw, 48px); 
            line-height: 1.1;
            margin-bottom: 20px;
        }
        .cta-box p { 
            color: rgba(4, 14, 36, 0.7); 
            font-size: 18px; 
            margin-bottom: 40px;
            font-weight: 500;
        }
        .btn-dark-cta {
            background: #040E24;
            color: var(--white);
            padding: 16px 45px;
            border-radius: 50px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: var(--transition-smooth);
            font-size: 16px;
        }
        .btn-dark-cta:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .cta-diamond {
            position: absolute;
            background: rgba(255,255,255,0.1);
            transform: rotate(45deg);
            z-index: 1;
        }
        .cta-diamond.d1 { width: 300px; height: 300px; top: -150px; left: -100px; }
        .cta-diamond.d2 { width: 200px; height: 200px; bottom: -100px; right: -50px; }
    </style>
    `;
};
