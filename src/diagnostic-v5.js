import './styles/main.css';
import { NavbarV2 as Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { DiagnosticForm, initDiagnosticLogic } from './components/DiagnosticForm.js';
import { initScrollReveal } from './utils/animations.js';

const DiagnosticApp = () => {
    return `
        ${Navbar()}
        <main style="padding-top: 150px; padding-bottom: 100px; min-height: 80vh;">
            <div class="container">
                ${DiagnosticForm()}
            </div>
        </main>
        ${Footer()}
    `;
};

const render = () => {
    const appContainer = document.querySelector('#app');
    if (appContainer) {
        appContainer.innerHTML = DiagnosticApp();
        initScrollReveal();
        initDiagnosticLogic();
        
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
