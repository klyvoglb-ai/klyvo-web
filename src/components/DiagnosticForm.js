/**
 * Diagnostic Form Component (Premium Multi-step)
 * Updated with strategic Revenue Recovery questions and detailed profiles.
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
                    <label>Nombre</label>
                    <input type="text" id="lead-name" placeholder="Ej. Marcelo Pérez" required>
                </div>
                <div class="input-group">
                    <label>Correo</label>
                    <input type="email" id="lead-email" placeholder="email@empresa.com" required>
                </div>
                <div class="input-group">
                    <label>Celular de Contacto</label>
                    <div style="display: flex; gap: 10px;">
                        <div id="country-picker" class="custom-select" style="width: 140px; position: relative;">
                            <div id="selected-country" style="background: #0A1931; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; color: #FFFFFF; padding: 15px 10px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                                <span id="current-flag">🇨🇴</span>
                                <span id="current-code">+57</span>
                                <span style="font-size: 10px;">▼</span>
                            </div>
                            <div id="country-options" style="display: none; position: absolute; top: 110%; left: 0; width: 220px; background: #0A1931; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; z-index: 100; max-height: 250px; overflow-y: auto; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                                <div class="country-option" data-code="57" data-flag="🇨🇴" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇨🇴 COL (+57)</div>
                                <div class="country-option" data-code="593" data-flag="🇪🇨" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇪🇨 ECU (+593)</div>
                                <div class="country-option" data-code="52" data-flag="🇲🇽" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇲🇽 MEX (+52)</div>
                                <div class="country-option" data-code="34" data-flag="🇪🇸" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇪🇸 ESP (+34)</div>
                                <div class="country-option" data-code="1" data-flag="🇺🇸" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇺🇸 USA (+1)</div>
                                <div class="country-option" data-code="51" data-flag="🇵🇪" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇵🇪 PER (+51)</div>
                                <div class="country-option" data-code="54" data-flag="🇦🇷" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇦🇷 ARG (+54)</div>
                                <div class="country-option" data-code="56" data-flag="🇨🇱" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇨🇱 CHI (+56)</div>
                                <div class="country-option" data-code="506" data-flag="🇨🇷" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇨🇷 CRC (+506)</div>
                                <div class="country-option" data-code="507" data-flag="🇵🇦" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇵🇦 PAN (+507)</div>
                                <div class="country-option" data-code="58" data-flag="🇻🇪" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: #FFFFFF;">🇻🇪 VEN (+58)</div>
                            </div>
                        </div>
                        <input type="tel" id="lead-phone" placeholder="Número de celular" style="flex: 1;" required>
                    </div>
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
            max-width: 800px;
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

        /* Result Styles */
        .result-header { text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 30px; }
        .result-badge {
            background: var(--primary);
            color: #06112a;
            padding: 6px 15px;
            border-radius: 4px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: 10px;
            font-size: 11px;
            text-transform: uppercase;
        }
        .result-name { font-size: 32px; color: #FFFFFF; font-weight: 800; margin-bottom: 5px; }
        .result-analysis { color: var(--primary); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }

        .result-section { margin-bottom: 25px; text-align: left; }
        .section-label { color: var(--primary); font-size: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; display: block; }
        .section-content { color: #FFFFFF; font-size: 17px; line-height: 1.6; opacity: 0.9; }
        .quote-box {
            background: rgba(46, 204, 113, 0.05);
            border-left: 3px solid var(--primary);
            padding: 15px 20px;
            font-style: italic;
        }

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

    let score = 0;
    let leadData = {};

    const startBtn = document.getElementById('start-test');
    // Custom Country Picker Logic
    const picker = document.getElementById('selected-country');
    const optionsContainer = document.getElementById('country-options');
    let currentCountryCode = '57';

    if (picker && optionsContainer) {
        picker.addEventListener('click', (e) => {
            e.stopPropagation();
            optionsContainer.style.display = optionsContainer.style.display === 'none' ? 'block' : 'none';
        });

        document.querySelectorAll('.country-option').forEach(option => {
            option.addEventListener('click', () => {
                const flag = option.getAttribute('data-flag');
                const code = option.getAttribute('data-code');
                currentCountryCode = code;
                
                document.getElementById('current-flag').textContent = flag;
                document.getElementById('current-code').textContent = `+${code}`;
                optionsContainer.style.display = 'none';
            });
        });

        // Close on outside click
        document.addEventListener('click', () => {
            optionsContainer.style.display = 'none';
        });
    }

    // Initialize EmailJS
    if (window.emailjs) {
        emailjs.init("AScRj2dq-26qm9YUZ");
    }

    if (!startBtn) return;

    startBtn.addEventListener('click', () => {
        const name = document.getElementById('lead-name').value.trim();
        const email = document.getElementById('lead-email').value.trim();
        const phone = document.getElementById('lead-phone').value.trim();

        // Basic Validation
        if (!name || name.length < 3) {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert('Por favor, ingrese un correo válido.');
            return;
        }

        if (!phone || phone.length < 7) {
            alert('Por favor, ingrese un número de celular válido.');
            return;
        }

        leadData = {
            name: name,
            email: email,
            phone: `+${currentCountryCode}${phone.replace(/\D/g,'')}`
        };

        // Send Lead to EmailJS (Version de Maxima Robustez)
        if (window.emailjs) {
            const templateParams = {
                to_name: "Admin KLYVO",
                name: String(leadData.name),
                from_name: String(leadData.name),
                reply_to: String(leadData.email),
                email: String(leadData.email),
                phone: String(leadData.phone)
            };

            console.log('Iniciando envío robusto:', templateParams);

            emailjs.send('service_g7jngvj', 'template_q8fi9st', templateParams, 'AScRj2dq-26qm9YUZ')
                .then(() => {
                    console.log('¡ENVÍO EXITOSO!');
                }, (err) => {
                    console.error('FALLO CRÍTICO:', err);
                });
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
            <p class="form-subtitle" style="font-size: 24px; color: #FFFFFF; font-weight: 600; margin-top: 20px;">${qData.q}</p>
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

        const diagnostics = [
            {
                id: 1,
                name: "El Colador de Capital",
                sub: "Fuga Crítica",
                analysis: "Sufre de una brecha de emergencia (Nivel 4).",
                revelation: "Su problema no es la falta de leads, es el Silencio Administrativo. Usted está financiando a su competencia: cada minuto que su lead espera, el valor de su inversión se evapora.",
                mirror: "Usted ya pagó por el cliente, pero su infraestructura actual lo está dejando caer justo antes de la meta.",
                escape: "Necesita sellar la fuga con el mecanismo CLUTCH. Agende su sesión para ver el mapa de recuperación de su ROI."
            },
            {
                id: 2,
                name: "La Trampa del Experto",
                sub: "Saturación Operativa",
                analysis: "El cliente está en el nivel de 'fastidio extremo' que impide el crecimiento.",
                revelation: "Usted no es ineficiente, es un Cerrador Secuestrado. Su talento está siendo desperdiciado en tareas de FAQ que una infraestructura debería resolver por usted.",
                mirror: "Su equipo de ventas está tan ocupado 'gestionando mensajes' que no tiene energía para 'gestionar ingresos'.",
                escape: "Despliegue un Exoskeleton Operativo. Agende para ver cómo liberar el 80% de su tiempo administrativo."
            },
            {
                id: 3,
                name: "El Cementerio de Oportunidades",
                sub: "Activo Inerte",
                analysis: "Identificación de una causa oculta que explica fallas previas.",
                revelation: "Usted tiene un Activo Durmiente. Su base de datos no está 'muerta', está en coma por falta de un sistema de re-activación sistemática.",
                mirror: "Está sentado sobre una mina de oro por la que ya pagó, pero que su sistema actual ignora cada día.",
                escape: "Active el motor de Revenue Recovery. Agende para descubrir cuánto flujo de caja puede despertar en 30 días."
            },
            {
                id: 4,
                name: "El Espejismo de Crecimiento",
                sub: "Escala Frágil",
                analysis: "El cliente percibe que está en un nivel 'primitivo' frente a su potencial.",
                revelation: "Usted sufre de Fricción Evolutiva. Intentar escalar con su sistema actual es como poner un motor de Ferrari en un chasis de madera: el próximo salto lo romperá.",
                mirror: "Su negocio ha crecido, pero su infraestructura se quedó en el pasado. Usted ya no pertenece a este nivel operativo.",
                escape: "Es hora del Upgrade Operativo. Agende para diseñar la arquitectura que soporte su siguiente nivel de escala."
            }
        ];

        let result;
        if (score <= 18) result = diagnostics[0];
        else if (score <= 28) result = diagnostics[1];
        else if (score <= 35) result = diagnostics[2];
        else result = diagnostics[3];

        container.innerHTML = `
            <div class="result-header">
                <div class="result-badge">Diagnóstico para ${leadData.name}</div>
                <h2 class="result-name">${result.name}</h2>
                <p class="result-analysis">(${result.sub}) • ${result.analysis}</p>
            </div>

            <div class="result-section">
                <span class="section-label">La Revelación</span>
                <p class="section-content">${result.revelation}</p>
            </div>

            <div class="result-section">
                <span class="section-label">Efecto Espejo</span>
                <div class="section-content quote-box">"${result.mirror}"</div>
            </div>

            <div class="result-section" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <span class="section-label">Ruta de Escape</span>
                <div class="section-content quote-box">${result.escape}</div>
            </div>

            <button onclick="window.open('https://wa.me/573046352816?text=He%20llenado%20mi%20formulario%20en%20l%C3%ADnea%20y%20quiero%20agendar%20una%20llamada', '_blank')" class="btn-primary full-width">AGENDAR SESIÓN ESTRATÉGICA</button>
        `;
    };
};
