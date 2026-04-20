/**
 * Main Application Orchestrator (Redesigned)
 */
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Features } from './components/Features.js';
import { Stats } from './components/Stats.js';
import { CTA } from './components/CTA.js';
import { Footer } from './components/Footer.js';
import { initScrollReveal } from './utils/animations.js';

const App = () => {
    return `
        <div class="bg-geometric">
            <div class="giant-diamond parallax" data-speed="0.05" style="width: 800px; height: 800px; top: -200px; left: -300px; opacity: 0.03;"></div>
            <div class="giant-diamond parallax" data-speed="0.1" style="width: 600px; height: 600px; bottom: -100px; right: -200px; opacity: 0.02;"></div>
        </div>
        ${Navbar()}
        <main>
            ${Hero()}
            ${Features()}
            ${Stats()}
            ${CTA()}
        </main>
        ${Footer()}
    `;
};

const initParallax = () => {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(el => {
            const speed = el.dataset.speed || 0.1;
            el.style.transform = `rotate(45deg) translateY(${scrolled * speed}px)`;
        });
    });
};

const render = () => {
    const appContainer = document.querySelector('#app');
    if (appContainer) {
        appContainer.innerHTML = App();
        
        initScrollReveal();
        initParallax();
        
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
