import './styles/main.css';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { initScrollReveal } from './utils/animations.js';

const ContactApp = () => {
    return `
        ${Navbar()}
        <main style="padding-top: 150px; min-height: 60vh; text-align: center;">
            <div class="container reveal">
                <h1 style="font-size: clamp(32px, 5vw, 56px); margin-bottom: 20px;">Contacto</h1>
                <p style="font-size: 18px; color: var(--text-muted);">AQUI IRAN LOS CONTACTOS</p>
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
