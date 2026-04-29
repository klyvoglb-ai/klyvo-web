/**
 * Problem Component (El Colador Operativo)
 */
export const Problem = () => {
    const steps = [
        {
            title: "1. INVERSIÓN EN ANUNCIOS",
            desc: "Usted paga a Meta, Google o TikTok para generar demanda.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"></line><polyline points="17 5 12 2 7 5"></polyline></svg>`
        },
        {
            title: "2. CAOS EN WHATSAPP",
            desc: "Los leads caen en una bandeja desordenada, sin prioridad, donde el error humano es la norma.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
        },
        {
            title: "3. SILENCIO ADMINISTRATIVO",
            desc: "Tiempos de respuesta lentos y seguimientos inexistentes enfrían el interés del prospecto.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
        },
        {
            title: "4. PÉRDIDA DE ROI",
            desc: "El capital que debería estar en su banco se pierde en el ruido operativo.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
        }
    ];

    return `
    <section id="problem" class="problem">
        <div class="container">
            <div class="section-header reveal">
                <span class="badge-light">Diagnóstico</span>
                <h2>Su negocio tiene una "fuga de capital" invisible.</h2>
                <p>La mayoría de las empresas operan bajo el modelo del "Colador Operativo", donde el dinero se escapa en cada etapa del proceso.</p>
            </div>
            
            <div class="strainer-grid">
                ${steps.map((s, i) => `
                    <div class="strainer-card reveal" style="transition-delay: ${i * 0.1}s">
                        <div class="icon-circle">${s.icon}</div>
                        <h3>${s.title}</h3>
                        <p>${s.desc}</p>
                    </div>
                `).join('')}
            </div>

            <div class="gap-alert reveal">
                <h4>El Gap</h4>
                <p>El problema no es su marketing; es su capacidad operativa. Sin un sistema de recuperación, usted no está escalando su negocio, solo está quemando su presupuesto.</p>
            </div>
        </div>
    </section>
    <style>
        .problem { padding: 10rem 0; background: var(--bg-light); border-bottom: 1px solid rgba(6, 17, 42, 0.05); }
        .section-header { text-align: center; margin-bottom: 6rem; }
        .section-header h2 { font-size: clamp(32px, 5vw, 46px); color: #06112a; margin-bottom: 25px; font-weight: 800; line-height: 1.2; letter-spacing: -1px;}
        .section-header p { color: #64748B; max-width: 700px; margin: 0 auto; font-size: 18px; line-height: 1.8; }
        
        .strainer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 6rem;
        }
        .strainer-card {
            background: #FFFFFF;
            padding: 50px 35px;
            border-radius: 24px;
            border: 1px solid rgba(6, 17, 42, 0.05);
            box-shadow: 0 4px 6px rgba(6, 17, 42, 0.02);
            position: relative;
            overflow: hidden;
            transition: var(--transition-smooth);
        }
        .strainer-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(6, 17, 42, 0.06);
        }
        .strainer-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 5px;
            background: var(--primary);
            opacity: 0.8;
        }
        .icon-circle {
            width: 60px; height: 60px;
            background: #E8F8F0;
            color: var(--primary);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 25px;
        }
        .strainer-card h3 { font-size: 20px; color: #06112a; margin-bottom: 15px; line-height: 1.4;}
        .strainer-card p { color: #64748B; font-size: 16px; line-height: 1.7; }

        .gap-alert {
            background: #06112a;
            color: #FFFFFF;
            padding: 60px 40px;
            border-radius: 24px;
            text-align: center;
            box-shadow: var(--shadow-premium);
            border-top: 6px solid var(--primary);
            position: relative;
            overflow: hidden;
        }
        .gap-alert::after {
            content: '';
            position: absolute;
            top: -50px; right: -50px;
            width: 150px; height: 150px;
            background: radial-gradient(circle, rgba(46, 204, 113, 0.15) 0%, transparent 70%);
            border-radius: 50%;
        }
        .gap-alert h4 { color: var(--primary); font-size: 22px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px; }
        .gap-alert p { font-size: clamp(18px, 2vw, 24px); line-height: 1.7; max-width: 900px; margin: 0 auto; color: rgba(255,255,255,0.95); font-weight: 500;}
    </style>
    `;
};
