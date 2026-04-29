/**
 * FAQ Component (Preguntas Frecuentes)
 */
export const FAQ = () => {
    const faqs = [
        { q: "¿Es esto un chatbot?", a: "No. Es una infraestructura operativa de grado empresarial diseñada para la recuperación de ingresos." },
        { q: "¿Perderé el toque humano?", a: "Al contrario. Filtramos el ruido para que sus humanos solo hablen con personas listas para comprar, protegiendo el prestigio de su marca." },
        { q: "¿Cómo se diferencia de un CRM?", a: "El CRM es una base de datos pasiva que usted debe alimentar; KLYVO es un motor activo que mueve el capital hacia su cuenta." },
        { q: "¿Funciona en mi sector?", a: "El sistema se parametriza con el conocimiento institucional específico de su empresa (clínica, firma legal, inmobiliaria, etc.)." },
        { q: "¿Sustituye a mi equipo de ventas?", a: "No, los potencia. Eliminamos el 80% de su carga administrativa para que se enfoquen exclusivamente en cerrar ventas." },
        { q: "¿Qué pasa con mis datos?", a: "Operamos con estándares de seguridad de grado bancario. Usted mantiene la propiedad y el control total de su activo más valioso: su data." },
        { q: "¿Cuánto tarda el ROI?", a: "Al sellar las fugas de capital actuales, la mayoría de nuestros partners ven resultados medibles en los primeros 30 días." },
        { q: "¿Es difícil de integrar?", a: "Es un proceso fluido que se conecta directamente a sus fuentes de demanda actuales (Meta, TikTok, Web) sin fricciones." }
    ];

    return `
    <section id="faq" class="faq-section">
        <div class="container">
            <div class="section-header reveal">
                <span class="badge-light">FAQ</span>
                <h2>Preguntas Frecuentes</h2>
            </div>
            
            <div class="faq-container reveal">
                ${faqs.map((f, i) => `
                    <div class="faq-item">
                        <button class="faq-question">
                            ${f.q}
                            <span class="faq-icon">+</span>
                        </button>
                        <div class="faq-answer">
                            <p>${f.a}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    <style>
        .faq-section { padding: 10rem 0; background: var(--bg-light); border-top: 1px solid rgba(6, 17, 42, 0.05); }
        .section-header { text-align: center; margin-bottom: 5rem; }
        .section-header h2 { font-size: clamp(32px, 5vw, 46px); color: #06112a; font-weight: 800; letter-spacing: -1px; }
        
        .faq-container { 
            max-width: 1100px; 
            margin: 0 auto; 
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            align-items: start; /* Prevents stretching when neighbor opens */
        }
        
        .faq-item {
            background: #FFFFFF;
            border: 1px solid rgba(6, 17, 42, 0.05);
            border-radius: 16px;
            overflow: hidden;
            transition: var(--transition-smooth);
            box-shadow: 0 4px 6px rgba(6, 17, 42, 0.02);
        }
        .faq-item.active {
            border-color: var(--primary);
            box-shadow: 0 10px 20px rgba(46, 204, 113, 0.1);
        }
        .faq-question {
            width: 100%;
            text-align: left;
            padding: 25px;
            background: transparent;
            border: none;
            font-size: 16px;
            font-weight: 700;
            color: #06112a;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
        }
        .faq-icon {
            color: var(--primary);
            font-size: 24px;
            font-weight: 400;
            transition: transform 0.3s ease;
            flex-shrink: 0;
        }
        .faq-item.active .faq-icon { transform: rotate(45deg); }
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            background: #FFFFFF;
        }
        .faq-answer p {
            padding: 0 25px 25px;
            color: #64748B;
            line-height: 1.7;
            font-size: 15px;
        }
        
        @media (max-width: 768px) {
            .faq-container { grid-template-columns: 1fr; }
        }
    </style>
    `;
};
