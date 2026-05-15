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
            
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="index.html#faq">FAQ</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li class="mobile-only-btn"><a href="diagnostico.html" class="btn-primary">DIAGNÓSTICO</a></li>
            </ul>
            
            <div class="nav-right">
                <a href="diagnostico.html" class="btn-primary desktop-only">QUIERO MI DIAGNÓSTICO</a>

                <!-- Mobile Toggle -->
                <div class="menu-toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
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
        .nav-right { display: flex; align-items: center; gap: 30px; }
        
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
        
        @media (min-width: 993px) {
            .nav-links {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .nav-links li { list-style: none; padding: 0; margin: 0; }
        .nav-links a { color: rgba(255, 255, 255, 0.85); font-size: 15px; font-weight: 500; transition: var(--transition-smooth); }
        .nav-links a:hover { color: var(--primary); }
        
        .menu-toggle { display: none; cursor: pointer; flex-direction: column; gap: 6px; z-index: 1001; }
        .bar { width: 25px; height: 3px; background-color: #FFFFFF; transition: var(--transition-smooth); border-radius: 2px; }
        
        .desktop-only { display: block; }
        .mobile-only-btn { display: none; }

        @media (max-width: 992px) {
            .nav-links {
                position: fixed;
                top: 0;
                right: -100%;
                width: 280px; /* Side menu width */
                height: 100vh;
                background: #06112a;
                flex-direction: column;
                justify-content: center;
                gap: 30px;
                transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border-left: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: -10px 0 30px rgba(0,0,0,0.5);
                padding: 40px;
            }
            .nav-links.active { right: 0; }
            .nav-links a { font-size: 18px; width: 100%; }
            .menu-toggle { display: flex; }
            .desktop-only { display: none; }
            .mobile-only-btn { display: block; width: 100%; margin-top: 20px; }
            
            /* Hamburger Animation */
            .menu-toggle.active .bar:nth-child(1) { transform: translateY(9px) rotate(45deg); }
            .menu-toggle.active .bar:nth-child(2) { opacity: 0; }
            .menu-toggle.active .bar:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
        }
    </style>
    `;
};

export const initNavbarLogic = () => {
    const toggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
                toggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
};
