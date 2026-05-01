/**
 * Diagnostic Form Component (Premium Multi-step)
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
            max-width: 700px;
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
        .form-title { font-size: 32px; color: #FFFFFF; margin-bottom: 10px; text-align: center; }
        .form-subtitle { color: var(--text-muted); text-align: center; margin-bottom: 40px; font-size: 16px; }
        
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
            padding: 20px;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .option-card:hover { background: rgba(46, 204, 113, 0.1); border-color: var(--primary); }
        .option-card.selected { background: var(--primary); border-color: var(--primary); }
        .option-card.selected span { color: #06112a !important; }
        .option-card span { color: #FFFFFF; font-weight: 500; font-size: 16px; }

        .btn-primary.full-width { width: 100%; margin-top: 20px; padding: 18px; font-size: 18px; }

        .result-badge {
            background: var(--primary);
            color: #06112a;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: 20px;
        }
        .result-title { font-size: 42px; line-height: 1.1; margin-bottom: 20px; color: #FFFFFF; }
        .result-desc { color: var(--text-muted); font-size: 18px; margin-bottom: 40px; line-height: 1.6; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
    `;
};

/**
 * Logic to handle the diagnostic steps
 */
export const initDiagnosticLogic = () => {
    const questions = [
        {
            q: "¿Cómo calificaría su seguimiento actual de leads?",
            options: [
                { t: "Manual e inconsistente", v: 1 },
                { t: "Semi-automatizado con CRM", v: 3 },
                { t: "Totalmente automatizado y predictivo", v: 5 }
            ]
        },
        {
            q: "¿Qué porcentaje de sus leads se pierden por falta de respuesta?",
            options: [
                { t: "Más del 50%", v: 1 },
                { t: "Entre el 20% y 50%", v: 3 },
                { t: "Menos del 10%", v: 5 }
            ]
        },
        {
            q: "¿Cuenta con un sistema de recuperación de carritos/leads abandonados?",
            options: [
                { t: "No, ninguno", v: 1 },
                { t: "Sí, pero es básico (Email)", v: 3 },
                { t: "Sí, multi-canal (Email, WhatsApp, Retargeting)", v: 5 }
            ]
        },
        {
            q: "¿Cuál es su tiempo promedio de respuesta a un nuevo lead?",
            options: [
                { t: "Más de 24 horas", v: 1 },
                { t: "Entre 1 y 4 horas", v: 3 },
                { t: "Menos de 5 minutos", v: 5 }
            ]
        },
        {
            q: "¿Realiza remarketing basado en el comportamiento del lead?",
            options: [
                { t: "Nunca", v: 1 },
                { t: "A veces", v: 3 },
                { t: "Constantemente", v: 5 }
            ]
        },
        {
            q: "¿Su equipo de ventas recibe notificaciones en tiempo real?",
            options: [
                { t: "No", v: 1 },
                { t: "Solo por email", v: 3 },
                { t: "WhatsApp y Push instantáneo", v: 5 }
            ]
        },
        {
            q: "¿Tiene visibilidad del ROI exacto de cada fuente de leads?",
            options: [
                { t: "No tengo idea", v: 1 },
                { t: "Aproximado", v: 3 },
                { t: "Exacto en tiempo real", v: 5 }
            ]
        },
        {
            q: "¿Su infraestructura actual permite escalar el volumen de leads x10?",
            options: [
                { t: "Se colapsaría", v: 1 },
                { t: "Requeriría mucho esfuerzo manual", v: 3 },
                { t: "Está lista para el escalamiento", v: 5 }
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
        const content = document.getElementById('form-content');
        const progress = document.getElementById('progress-bar');
        
        // Update Progress
        const percent = ((index + 1) / questions.length) * 100;
        progress.style.width = `${percent}%`;

        // Hide others
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

        // Option click handlers
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

        if (score <= 15) {
            profile = "Optimización Urgente";
            desc = "Su sistema actual presenta fugas críticas de capital. Está perdiendo más del 60% de su potencial de facturación por falta de infraestructura técnica.";
        } else if (score <= 25) {
            profile = "Potencial de Crecimiento";
            desc = "Tiene una base sólida, pero sus procesos manuales están limitando su escalamiento. Con automatización avanzada, podría duplicar su ROI en 90 días.";
        } else if (score <= 35) {
            profile = "Escalamiento Avanzado";
            desc = "Su infraestructura es buena. Estamos en la fase de 'fine-tuning'. Pequeños ajustes en la recuperación multi-canal dispararán su rentabilidad.";
        } else {
            profile = "Liderazgo de Mercado";
            desc = "Usted opera al más alto nivel. Su enfoque debe ser la inteligencia artificial predictiva para mantener la ventaja competitiva absoluta.";
        }

        container.innerHTML = `
            <div class="result-badge">RESULTADO PARA ${leadData.name.toUpperCase()}</div>
            <h2 class="result-title">${profile}</h2>
            <p class="result-desc">${desc}</p>
            <button onclick="location.href='#contact'" class="btn-primary full-width">AGENDAR CONSULTORÍA ESTRATÉGICA</button>
        `;
    };
};
