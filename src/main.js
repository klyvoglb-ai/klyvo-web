/**
 * Main Application Orchestrator (Revenue Recovery Redesign)
 */
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Problem } from './components/Problem.js';
import { Solution } from './components/Solution.js';
import { UseCases } from './components/UseCases.js';
import { Comparison } from './components/Comparison.js';
import { FAQ } from './components/FAQ.js';
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
            ${Problem()}
            ${Solution()}
            ${UseCases()}
            ${Comparison()}
            ${FAQ()}
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

const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open if wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
};

const render = () => {
    const appContainer = document.querySelector('#app');
    if (appContainer) {
        appContainer.innerHTML = App();
        
        initScrollReveal();
        initParallax();
        initFAQ();
        
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
