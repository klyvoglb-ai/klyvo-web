/**
 * Navbar Component (Dark Fixed)
 */
export const NavbarV2 = () => {
    return `
    <nav class="navbar dark-fixed">
        <div class="container nav-content">
            <a href="index.html" class="logo" style="text-decoration: none;">
                <div class="logo-icon">
                    <span>K</span>
                </div>
                <span class="logo-text">Kl<span class="y-green">y</span>vo</span>
            </a>
            
            <!-- Mobile Toggle -->
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <ul class="nav-links" id="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="index.html#faq">FAQ</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li class="mobile-only"><a href="diagnostico.html" class="btn-primary">DIAGNÓSTICO</a></li>
            </ul>
            
            <a href="diagnostico.html" class="btn-primary desktop-only">QUIERO MI DIAGNÓSTICO</a>
        </div>
    </nav>
    <style>
        .navbar.dark-fixed {
            background: #06112a !important;
            color: #FFFFFF !important;
        }
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            height: 80px;
            z-index: 1000;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            transition: var(--transition-smooth);
        }
        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
        .logo-icon {
            width: 32px;
            height: 32px;
            background: var(--primary);
            transform: rotate(45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
        }
        .logo-icon span {
            transform: rotate(-45deg);
            color: #06112a;
            font-weight: 900;
            font-size: 18px;
        }
        .logo-text {
            font-family: var(--font-heading);
            font-size: 24px;
            font-weight: 700;
            color: #FFFFFF;
        }
        .y-green { color: var(--primary); }
        
        .nav-links { display: flex; align-items: center; gap: 35px; list-style: none; margin: 0; padding: 0; }
        .nav-links li { list-style: none; padding: 0; margin: 0; }
        .nav-links a { color: rgba(255, 255, 255, 0.85); font-size: 15px; font-weight: 500; transition: var(--transition-smooth); }
        .nav-links a:hover { color: var(--primary); }
        
        .menu-toggle { display: none; cursor: pointer; flex-direction: column; gap: 6px; }
        .bar { width: 25px; height: 3px; background-color: #FFFFFF; transition: var(--transition-smooth); border-radius: 2px; }
        
        .mobile-only { display: none; }
        .desktop-only { display: block; }

        @media (max-width: 992px) {
            .nav-links {
                position: fixed;
                top: 80px;
                right: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background: #06112a;
                flex-direction: column;
                justify-content: center;
                gap: 40px;
                transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border-top: 1px solid rgba(255, 255, 255, 0.05);
            }
            .nav-links.active { right: 0; }
            .nav-links a { font-size: 20px; }
            .menu-toggle { display: flex; }
            .desktop-only { display: none; }
            .mobile-only { display: block; }
            
            /* Hamburger Animation */
            .menu-toggle.active .bar:nth-child(1) { transform: translateY(9px) rotate(45deg); }
            .menu-toggle.active .bar:nth-child(2) { opacity: 0; }
            .menu-toggle.active .bar:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
        }
    </style>
    <script>
        // Use a persistent way to init navbar logic if it's not already handled
        if (!window.navbarInit) {
            window.navbarInit = true;
            document.addEventListener('click', (e) => {
                const toggle = document.getElementById('mobile-menu');
                const navLinks = document.getElementById('nav-links');
                if (toggle && toggle.contains(e.target)) {
                    toggle.classList.toggle('active');
                    navLinks.classList.toggle('active');
                } else if (navLinks && navLinks.classList.contains('active') && e.target.tagName === 'A') {
                    toggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        }
    </script>

    `;
};
