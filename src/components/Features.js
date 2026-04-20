/**
 * Features Component (Light Theme Redesign)
 */
export const Features = () => {
    const services = [
        {
            title: "Desarrollo Web",
            desc: "Aplicaciones modulares y ultra-rápidas construidas con tecnología de vanguardia.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        },
        {
            title: "Estrategia Digital",
            desc: "Consultoría de alto nivel para posicionar tu marca en el mercado global.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
        },
        {
            title: "Diseño Premium",
            desc: "Interfaces minimalistas que cautivan y convierten usuarios en clientes.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`
        }
    ];

    return `
    <section id="features" class="features">
        <div class="container">
            <div class="section-header reveal">
                <span class="badge-light">Nuestros Servicios</span>
                <h2>Soluciones a tu medida</h2>
                <p>En KLYVO, no solo creamos webs, diseñamos ecosistemas digitales.</p>
            </div>
            <div class="features-grid">
                ${services.map((s, i) => `
                    <div class="feature-card reveal" style="transition-delay: ${i * 0.1}s">
                        <div class="icon-box-outline">${s.icon}</div>
                        <h3>${s.title}</h3>
                        <p>${s.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    <style>
        .features { padding: 8rem 0; background: #FFFFFF; }
        .section-header { text-align: center; margin-bottom: 5rem; }
        .section-header h2 { font-size: 42px; color: #06112a; margin-bottom: 20px; font-weight: 800; }
        .section-header p { color: #64748B; max-width: 600px; margin: 0 auto; }
        
        .badge-light { 
            background: #E8F8F0; 
            color: #2ECC71; 
            padding: 8px 20px; 
            border-radius: 50px; 
            font-size: 13px; 
            font-weight: 700;
            display: inline-block;
            margin-bottom: 20px;
        }
        
        .features-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
            gap: 30px; 
        }
        .feature-card {
            background: #FFFFFF;
            padding: 50px 40px;
            border-radius: 24px;
            border: 1px solid rgba(6, 17, 42, 0.05);
            transition: var(--transition-smooth);
            box-shadow: 0 4px 6px rgba(6, 17, 42, 0.02);
        }
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(6, 17, 42, 0.08);
            border-color: #2ECC71;
        }
        .icon-box-outline { 
            color: #2ECC71; 
            margin-bottom: 25px; 
            transition: var(--transition-smooth);
        }
        .feature-card h3 { 
            font-size: 22px; 
            margin-bottom: 15px; 
            color: #06112a; 
            font-weight: 700; 
        }
        .feature-card p { 
            color: #64748B; 
            line-height: 1.7; 
        }
    </style>
    `;
};
