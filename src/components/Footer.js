/**
 * Footer Component (Dark Fixed)
 */
export const Footer = () => {
    return `
    <footer class="footer dark-fixed">
        <div class="container footer-grid">
            <div class="footer-brand">
                <div class="logo">
                    <div class="logo-icon"><span>K</span></div>
                    <span class="logo-text">Kl<span class="y-green">y</span>vo</span>
                </div>
                <p>Innovación digital premium para marcas que buscan destacar.</p>
            </div>
            <div class="footer-links">
                <h4>Navegación</h4>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#problem">El Problema</a></li>
                    <li><a href="#solution">El Sistema</a></li>
                    <li><a href="#cases">Casos Reales</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Privacidad</a></li>
                    <li><a href="#">Términos</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom container">
            <p>&copy; ${new Date().getFullYear()} KLYVO. All rights reserved.</p>
            <div class="social-icons">
                <a href="#">𝕏</a>
                <a href="#">in</a>
                <a href="#">ig</a>
            </div>
        </div>
    </footer>
    <style>
        .footer.dark-fixed {
            background: #06112a;
            color: #FFFFFF;
        }
        .footer {
            padding: 100px 0 50px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 60px;
            margin-bottom: 80px;
        }
        .footer-brand p { color: rgba(255, 255, 255, 0.6); max-width: 300px; margin-top: 20px; }
        .footer-links h4 { color: #FFFFFF; margin-bottom: 25px; font-size: 16px; }
        .footer-links ul li { margin-bottom: 12px; }
        .footer-links ul li a { color: rgba(255, 255, 255, 0.6); }
        .footer-links ul li a:hover { color: var(--primary); }
        
        .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
        }
        .social-icons { display: flex; gap: 20px; }
        .social-icons a { color: rgba(255, 255, 255, 0.6); font-size: 18px; }
    </style>
    `;
};
