/**
 * UseCases Component (Casos de Éxito / Aplicación real)
 */
export const UseCases = () => {
    const cases = [
        {
            sector: "HOTEL",
            title: "Eficiencia en Reservas",
            desc: "Recuperación del 22% de ventas directas al eliminar el silencio administrativo y atender la demanda 24/7.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
        },
        {
            sector: "CLÍNICA ESTÉTICA",
            title: "Precisión de Cierre",
            desc: "Incremento del 35% en citas efectivas mediante la calificación inmediata de pacientes High-Ticket.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`
        },
        {
            sector: "ASESORÍAS",
            title: "Optimización del Tiempo",
            desc: "Reducción del 70% del ruido operativo. Los socios ahora solo intervienen en cierres de alto valor.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
        },
        {
            sector: "SERVICIOS",
            title: "Revenue Recovery",
            desc: "Transformación de una base de datos 'muerta' en 12 nuevos contratos recurrentes en solo 30 días.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
        }
    ];

    return `
    <section id="cases" class="use-cases">
        <div class="container">
            <div class="section-header reveal">
                <span class="badge-light">Resultados</span>
                <h2>Infraestructura aplicada al mundo real.</h2>
                <p>Nuestros sistemas se adaptan a industrias de alto valor, sellando fugas de capital de forma medible.</p>
            </div>
            <div class="cases-grid">
                ${cases.map((c, i) => `
                    <div class="case-card reveal" style="transition-delay: ${i * 0.1}s">
                        <div class="case-icon">${c.icon}</div>
                        <div class="case-sector">${c.sector}</div>
                        <h3>${c.title}</h3>
                        <p>${c.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    <style>
        .use-cases { padding: 8rem 0; background: var(--bg-light); border-top: 1px solid rgba(6, 17, 42, 0.05); border-bottom: 1px solid rgba(6, 17, 42, 0.05);}
        .cases-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 30px; 
        }
        .case-card {
            background: #FFFFFF;
            padding: 40px 30px;
            border-radius: 20px;
            border: 1px solid rgba(6, 17, 42, 0.05);
            transition: var(--transition-smooth);
            box-shadow: 0 4px 6px rgba(6, 17, 42, 0.02);
            height: 100%;
        }
        .case-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(6, 17, 42, 0.08);
            border-color: #2ECC71;
        }
        .case-icon { color: #2ECC71; margin-bottom: 20px; }
        .case-sector {
            font-size: 12px;
            font-weight: 700;
            color: #2ECC71;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        .case-card h3 { font-size: 20px; margin-bottom: 15px; color: #06112a; font-weight: 700; }
        .case-card p { color: #64748B; line-height: 1.6; font-size: 15px;}
    </style>
    `;
};
