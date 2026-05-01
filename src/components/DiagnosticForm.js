/**
 * Diagnostic Form Component (Premium Multi-step)
 * Updated with strategic Revenue Recovery questions.
 */
export const DiagnosticForm = () => {
    return `
    <div id="diagnostic-container" class="diagnostic-card reveal">
        <!-- Progress Bar -->
        <div class="progress-container">
            <div id="progress-bar" class="progress-bar"></div>
        </div>

        <div id="form-content">
            <!-- Step 0: Lead Capture -->
            <div id="step-0" class="form-step active">
                <h2 class="form-title">Inicie su Diagnóstico Gratuito</h2>
                <p class="form-subtitle">Complete sus datos para recibir el informe detallado al finalizar.</p>
                <div class="input-group">
                    <label>Nombre Completo</label>
                    <input type="text" id="lead-name" placeholder="Ej. Marcelo Pérez" required>
                </div>
                <div class="input-group">
                    <label>Correo Corporativo</label>
                    <input type="email" id="lead-email" placeholder="email@empresa.com" required>
                </div>
                <div class="input-group">
                    <label>WhatsApp (con código de país)</label>
                    <input type="tel" id="lead-phone" placeholder="+593 ..." required>
                </div>
                <button id="start-test" class="btn-primary full-width">COMENZAR AUDITORÍA</button>
            </div>

            <!-- Steps 1-8 will be injected by JS -->
            <div id="question-container" class="form-step"></div>

            <!-- Result Step -->
            <div id="step-result" class="form-step"></div>
        </div>
    </div>

    <style>
        .diagnostic-card {
            background: #0A1931;
            border: 1px solid rgba(46, 204, 113, 0.2);
            border-radius: 30px;
            padding: 50px;
            max-width: 750px;
            margin: 0 auto;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            position: relative;
            z-index: 10;
        }
        .progress-container {
            width: 100%;
            height: 6px;
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
            margin-bottom: 40px;
            overflow: hidden;
        }
        .progress-bar {
            height: 100%;
            width: 0%;
            background: var(--primary);
            transition: width 0.4s ease;
        }
        .form-step { display: none; animation: fadeIn 0.5s ease; }
        .form-step.active { display: block; }
        .form-title { font-size: 32px; color: #FFFFFF; margin-bottom: 10px; text-align: center; font-weight: 700; }
        .form-subtitle { color: var(--text-muted); text-align: center; margin-bottom: 40px; font-size: 16px; line-height: 1.5; }
        
        .input-group { margin-bottom: 25px; text-align: left; }
        .input-group label { display: block; color: #FFFFFF; margin-bottom: 10px; font-weight: 600; font-size: 14px; }
        .input-group input {
            width: 100%;
            padding: 15px 20px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            color: #FFFFFF;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        .input-group input:focus { border-color: var(--primary); outline: none; background: rgba(255,255,255,0.07); }
        
        .option-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 15px;
            padding: 22px;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .option-card:hover { background: rgba(46, 204, 113, 0.1); border-color: var(--primary); transform: translateX(10px); }
        .option-card.selected { background: var(--primary); border-color: var(--primary); }
        .option-card.selected span { color: #06112a !important; }
        .option-card span { color: #FFFFFF; font-weight: 500; font-size: 16px; line-height: 1.4; }

        .btn-primary.full-width { width: 100%; margin-top: 20px; padding: 18px; font-size: 18px; font-weight: 700; cursor: pointer; }

        .result-badge {
            background: var(--primary);
            color: #06112a;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: 20px;
            font-size: 12px;
            letter-spacing: 1px;
        }
        .result-title { font-size: 42px; line-height: 1.1; margin-bottom: 20px; color: #FFFFFF; font-weight: 700; }
        .result-desc { color: var(--text-muted); font-size: 18px; margin-bottom: 40px; line-height: 1.6; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
    `;
};

export const initDiagnosticLogic = () => {
    const questions = [
        {
            q: "1. ¿En qué sector opera su organización actualmente?",
            options: [
                { t: "Sector Hotelero / Turismo", v: 3 },
                { t: "Clínica Estética / Salud High-Ticket", v: 4 },
                { t: "Asesorías / Consultoría / Servicios Profesionales", v: 2 },
                { t: "B2B / Real Estate / Otros Servicios", v: 2 }
            ]
        },
        {
            q: "2. ¿Cuál es su rol principal dentro de la empresa?",
            options: [
                { t: "Dueño / CEO", v: 5 },
                { t: "Director de Operaciones / Ventas", v: 4 },
                { t: "Inversor / Socio Gerente", v: 3 }
            ]
        },
        {
            q: "3. ¿Cuál de estas situaciones describe mejor su operación hoy?",
            options: [
                { t: '"Invertimos en anuncios, pero los leads mueren en un WhatsApp desordenado"', v: 5 },
                { t: '"Mi equipo está saturado respondiendo dudas básicas y no tiene tiempo para cerrar"', v: 4 },
                { t: '"Tenemos una base de datos grande, pero nunca la hemos re-contactado"', v: 3 }
            ]
        },
        {
            q: "4. ¿Qué volumen de prospectos (leads) genera su negocio mensualmente?",
            options: [
                { t: "Menos de 100 leads", v: 1 },
                { t: "Entre 100 y 500 leads", v: 3 },
                { t: "Más de 500 leads", v: 5 }
            ]
        },
        {
            q: "5. ¿Qué porcentaje de sus leads estima que se pierden por falta de respuesta inmediata o seguimientos olvidados?",
            options: [
                { t: "Menos del 20% (Fuga controlada)", v: 1 },
                { t: "Entre el 20% y el 50% (Pérdida considerable de ROI)", v: 3 },
                { t: "Más del 50% (Fuga crítica de capital operativo)", v: 5 }
            ]
        },
        {
            q: "6. ¿Cuánto dinero estima que se 'evapora' de su cuenta cada mes debido a este silencio operativo?",
            options: [
                { t: "Menos de $5,000 USD", v: 1 },
                { t: "Entre $5,000 y $20,000 USD", v: 3 },
                { t: "Más de $20,000 USD", v: 5 }
            ]
        },
        {
            q: "7. ¿Por qué cree que no ha podido resolver este problema hasta ahora?",
            options: [
                { t: '"No he encontrado suficientes vendedores capacitados"', v: 2 },
                { t: '"Las herramientas que he probado son muy complejas y nadie las usa"', v: 3 },
                { t: '"Mi equipo está atrapado en la \'Trampa Operativa\' y no tiene una infraestructura que automatice el ruido"', v: 5 }
            ]
        },
        {
            q: "8. Si logramos sellar su fuga de capital mediante una infraestructura de Revenue Recovery, ¿qué tan listo está para desplegarla?",
            options: [
                { t: '"Estoy listo para recuperar mi rentabilidad de inmediato"', v: 5 },
                { t: '"Necesito el diagnóstico antes de tomar una decisión de inversión"', v: 3 },
                { t: '"Solo estoy explorando opciones por ahora"', v: 1 }
            ]
        }
    ];

    let currentStep = 0;
    let score = 0;
    let leadData = {};

    const startBtn = document.getElementById('start-test');
    if (!startBtn) return;

    startBtn.addEventListener('click', () => {
        leadData = {
            name: document.getElementById('lead-name').value,
            email: document.getElementById('lead-email').value,
            phone: document.getElementById('lead-phone').value
        };

        if (!leadData.name || !leadData.email || !leadData.phone) {
            alert('Por favor complete todos los datos.');
            return;
        }

        showQuestion(0);
    });

    const showQuestion = (index) => {
        const container = document.getElementById('question-container');
        const progress = document.getElementById('progress-bar');
        
        const percent = ((index + 1) / questions.length) * 100;
        progress.style.width = `${percent}%`;

        document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
        container.classList.add('active');

        const qData = questions[index];
        container.innerHTML = `
            <h2 class="form-title">Pregunta ${index + 1}</h2>
            <p class="form-subtitle">${qData.q}</p>
            <div class="options-list">
                ${qData.options.map((opt, i) => `
                    <div class="option-card" data-value="${opt.v}">
                        <span>${opt.t}</span>
                    </div>
                `).join('')}
            </div>
        `;

        container.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                score += parseInt(card.dataset.value);
                if (index + 1 < questions.length) {
                    showQuestion(index + 1);
                } else {
                    showResult();
                }
            });
        });
    };

    const showResult = () => {
        const container = document.getElementById('step-result');
        document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
        container.classList.add('active');

        let profile = "";
        let desc = "";

        // Max possible score: 40 (approx)
        if (score <= 18) {
            profile = "Optimización Urgente";
            desc = `Estimado ${leadData.name}, su negocio presenta fugas críticas de capital. El silencio operativo está costándole hasta un 50% de ROI mensual. Necesita una infraestructura de Revenue Recovery inmediata para sellar las grietas.`;
        } else if (score <= 28) {
            profile = "Potencial de Crecimiento";
            desc = `Estimado ${leadData.name}, su operación es sólida pero está atrapada en la "Trampa Operativa". Tiene un potencial de facturación no aprovechado del 30% que podría recuperar en 90 días mediante automatización.`;
        } else if (score <= 35) {
            profile = "Escalamiento Avanzado";
            desc = `Estimado ${leadData.name}, su infraestructura está lista para el siguiente nivel. Solo requiere ajustes en la recuperación multi-canal para optimizar su ROI y escalar agresivamente su volumen de leads.`;
        } else {
            profile = "Liderazgo de Mercado";
            desc = `Estimado ${leadData.name}, usted opera con alta eficiencia. Su enfoque debe ser ahora la integración de IA predictiva para dominar su sector y mantener una ventaja competitiva absoluta e inalcanzable.`;
        }

        container.innerHTML = `
            <div class="result-badge">ANÁLISIS ESTRATÉGICO PARA ${leadData.name.toUpperCase()}</div>
            <h2 class="result-title">${profile}</h2>
            <p class="result-desc">${desc}</p>
            <button onclick="location.href='https://wa.me/${leadData.phone.replace(/\D/g,'')}'" class="btn-primary full-width">RESERVAR SESIÓN DE REVENUE RECOVERY</button>
        `;
    };
};
