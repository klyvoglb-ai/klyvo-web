/**
 * Solution Component (CLUTCH & FLOW)
 */
export const Solution = () => {
    return `
    <section id="solution" class="solution">
        <div class="container">
            <div class="section-header reveal">
                <span class="badge-light">Arquitectura Revenue Recovery</span>
                <h2>Deje de gestionar mensajes. Empiece a gestionar ingresos.</h2>
                <p>Presentamos la arquitectura operativa que pone el control de vuelta en sus manos a través de dos mecanismos de ingeniería cognitiva:</p>
            </div>
            
            <div class="mechanisms-grid">
                <div class="mech-card reveal">
                    <div class="mech-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <h3>CLUTCH <span class="mech-sub">(Mecanismo de Agarre)</span></h3>
                    <p>Capturamos el 100% de la demanda entrante de forma inmediata. Cero silencios. Cero olvidos. Es la precisión que su marca exige para proteger cada oportunidad de venta.</p>
                </div>
                
                <div class="mech-card reveal" style="transition-delay: 0.2s">
                    <div class="mech-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                    <h3>FLOW <span class="mech-sub">(Mecanismo de Movimiento)</span></h3>
                    <p>El flujo que califica, educa y mueve al prospecto hacia la conversión. Filtra el ruido operativo y entrega a su equipo únicamente personas listas para el cierre.</p>
                </div>
            </div>
        </div>
    </section>
    <style>
        .solution { padding: 10rem 0; background: #FFFFFF; }
        .mechanisms-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 50px;
            margin-top: 4rem;
        }
        .mech-card {
            background: #F8FAFC;
            padding: 60px 50px;
            border-radius: 30px;
            border: 1px solid rgba(6, 17, 42, 0.05);
            transition: var(--transition-smooth);
            position: relative;
            z-index: 1;
        }
        .mech-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, rgba(46, 204, 113, 0.05) 0%, transparent 100%);
            border-radius: 30px;
            z-index: -1;
            opacity: 0;
            transition: var(--transition-smooth);
        }
        .mech-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 30px 60px rgba(6, 17, 42, 0.08);
            border-color: rgba(46, 204, 113, 0.3);
            background: #FFFFFF;
        }
        .mech-card:hover::before { opacity: 1; }
        .mech-icon {
            color: var(--primary);
            margin-bottom: 30px;
            background: rgba(46, 204, 113, 0.1);
            width: 80px; height: 80px;
            border-radius: 20px;
            display: flex; align-items: center; justify-content: center;
        }
        .mech-card h3 { font-size: 28px; color: #06112a; margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; letter-spacing: -0.5px;}
        .mech-sub { font-size: 18px; color: var(--primary); font-weight: 700; }
        .mech-card p { color: #64748B; font-size: 18px; line-height: 1.8; }
        
        @media (max-width: 768px) {
            .mechanisms-grid { grid-template-columns: 1fr; }
            .mech-card { padding: 40px 30px; }
        }
    </style>
    `;
};
