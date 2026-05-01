import './styles/main.css';
import { NavbarV2 as Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { initScrollReveal } from './utils/animations.js';

const ContactApp = () => {
    return `
        ${Navbar()}
        <main style="padding-top: 120px; min-height: 80vh; position: relative; overflow: hidden;">

            <!-- Background glow -->
            <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 700px; height: 700px; background: radial-gradient(circle, rgba(0,255,133,0.06) 0%, transparent 70%); pointer-events: none;"></div>

            <div class="container reveal" style="max-width: 900px; margin: 0 auto; padding: 60px 20px; text-align: center;">

                <!-- Header -->
                <div style="margin-bottom: 60px;">
                    <span style="display: inline-block; background: rgba(0,255,133,0.12); border: 1px solid rgba(0,255,133,0.3); color: #00FF85; padding: 8px 20px; border-radius: 50px; font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 24px;">Estamos aquí para ti</span>
                    <h1 style="font-size: clamp(36px, 6vw, 64px); font-weight: 800; line-height: 1.1; margin-bottom: 20px;">
                        Hablemos de tu <span style="background: linear-gradient(135deg, #00FF85, #00C6FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">crecimiento</span>
                    </h1>
                    <p style="font-size: 18px; color: rgba(255,255,255,0.6); max-width: 500px; margin: 0 auto; line-height: 1.7;">
                        Escríbenos o llámanos directamente. Nuestro equipo está listo para ayudarte a recuperar tu rentabilidad.
                    </p>
                </div>

                <!-- Float animation -->
                <style>
                    @keyframes floatLogo {
                        0%   { transform: translateY(0px); }
                        50%  { transform: translateY(-18px); }
                        100% { transform: translateY(0px); }
                    }
                    .logo-float { animation: floatLogo 3.5s ease-in-out infinite; }
                    .logo-glow  { filter: drop-shadow(0 0 24px rgba(0,255,133,0.35)); }
                </style>

                <!-- 2-column layout -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; margin-bottom: 60px;">

                    <!-- LEFT: Cards stacked -->
                    <div style="display: flex; flex-direction: column; gap: 24px;">

                        <!-- Email -->
                        <a href="mailto:klyvoglb@gmail.com" style="text-decoration: none;">
                            <div style="background: #0A1931; border: 1px solid rgba(0,255,133,0.25); border-radius: 20px; padding: 28px; cursor: pointer; transition: all 0.3s ease; text-align: center;" onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='rgba(0,255,133,0.6)'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='rgba(0,255,133,0.25)'">
                                <div style="width: 52px; height: 52px; background: rgba(0,255,133,0.15); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </div>
                                <p style="font-size: 11px; color: #00FF85; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; font-weight: 600;">Correo</p>
                                <p style="font-size: 15px; font-weight: 700; color: #FFFFFF; margin: 0;">klyvoglb@gmail.com</p>
                            </div>
                        </a>

                        <!-- WhatsApp -->
                        <div style="background: #0A1931; border: 1px solid rgba(0,255,133,0.25); border-radius: 20px; padding: 28px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.borderColor='rgba(0,255,133,0.6)'" onmouseout="this.style.borderColor='rgba(0,255,133,0.25)'">
                            <div style="width: 52px; height: 52px; background: rgba(0,255,133,0.15); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                </svg>
                            </div>
                            <p style="font-size: 11px; color: #00FF85; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 14px; font-weight: 600;">WhatsApp</p>
                            <a href="https://wa.me/573046352816?text=Hola%20KLYVO%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n" target="_blank" style="text-decoration: none; display: block; margin-bottom: 10px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 12px; transition: background 0.2s;" onmouseover="this.style.background='rgba(0,255,133,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
                                <p style="font-size: 12px; color: rgba(255,255,255,0.5); margin: 0 0 4px;">🇨🇴 Colombia</p>
                                <p style="font-size: 15px; font-weight: 700; color: #FFFFFF; margin: 0;">+57 304 635 2816</p>
                            </a>
                            <a href="https://wa.me/593979003056?text=Hola%20KLYVO%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n" target="_blank" style="text-decoration: none; display: block; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 12px; transition: background 0.2s;" onmouseover="this.style.background='rgba(0,255,133,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
                                <p style="font-size: 12px; color: rgba(255,255,255,0.5); margin: 0 0 4px;">🇪🇨 Ecuador</p>
                                <p style="font-size: 15px; font-weight: 700; color: #FFFFFF; margin: 0;">+593 97 900 3056</p>
                            </a>
                        </div>

                    </div>

                    <!-- RIGHT: Floating logo -->
                    <div style="display: flex; align-items: center; justify-content: center; padding: 40px;">
                        <div class="logo-float logo-glow" style="text-align: center;">
                            <svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- K: vertical stem -->
                                <rect x="18" y="18" width="18" height="134" rx="3" fill="#1B2F5E"/>
                                <!-- K: upper diagonal arm (aligns with diamond top-left edge) -->
                                <polygon points="36,18 36,78 118,18" fill="#1B2F5E"/>
                                <!-- K: lower diagonal arm (aligns with diamond bottom-left edge) -->
                                <polygon points="36,94 36,152 118,152" fill="#1B2F5E"/>
                                <!-- Diamond outline (rotated square, center ~107,85) -->
                                <polygon points="107,14 178,85 107,156 36,85"
                                    fill="none" stroke="#4CAF50" stroke-width="13" stroke-linejoin="round"/>
                                <!-- Right arrowhead tip of diamond -->
                                <polygon points="178,85 160,67 160,103" fill="#4CAF50"/>
                                <!-- Text: "Klyv" navy + "o" green -->
                                <text x="16" y="215" font-family="'Poppins', 'Montserrat', Arial, sans-serif" font-weight="800" font-size="42" fill="#1B2F5E">Klyv</text>
                                <text x="116" y="215" font-family="'Poppins', 'Montserrat', Arial, sans-serif" font-weight="800" font-size="42" fill="#4CAF50">o</text>
                            </svg>
                        </div>
                    </div>

                </div>



                <!-- CTA Bottom -->
                <div style="background: linear-gradient(135deg, rgba(0,255,133,0.08), rgba(0,198,255,0.08)); border: 1px solid rgba(0,255,133,0.2); border-radius: 24px; padding: 48px 40px;">
                    <h2 style="font-size: clamp(22px, 3vw, 32px); font-weight: 800; margin-bottom: 16px;">¿Listo para comenzar?</h2>
                    <p style="color: rgba(255,255,255,0.6); margin-bottom: 32px; font-size: 16px;">Inicia tu diagnostico gratuito y descubre como recuperar tu inversion.</p>
                    <a href="/diagnostico.html" style="display: inline-block; background: linear-gradient(135deg, #00FF85, #00C6FF); color: #000000; font-weight: 800; font-size: 15px; padding: 16px 40px; border-radius: 50px; text-decoration: none; letter-spacing: 1px; transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.05)';this.style.boxShadow='0 10px 30px rgba(0,255,133,0.3)'" onmouseout="this.style.transform='scale(1)';this.style.boxShadow='none'">
                        INICIAR DIAGNOSTICO GRATUITO →
                    </a>
                </div>

            </div>
        </main>
        ${Footer()}
    `;
};

const render = () => {
    const appContainer = document.querySelector('#app');
    if (appContainer) {
        appContainer.innerHTML = ContactApp();
        initScrollReveal();
        
        // Navbar scroll behavior
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', render);
