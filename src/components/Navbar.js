/**
 * Navbar Component (Dark Fixed)
 */
export const Navbar = () => {
    return `
    <nav class="navbar dark-fixed">
        <div class="container nav-content">
            <a href="index.html" class="logo" style="text-decoration: none;">
                <div class="logo-icon">
                    <span>K</span>
                </div>
                <span class="logo-text">Kl<span class="y-green">y</span>vo</span>
            </a>
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="index.html#faq">FAQ</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <a href="diagnostico.html" class="btn-primary">QUIERO MI DIAGNÓSTICO</a>
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
        .nav-links { display: flex; align-items: center; gap: 35px; }
        .nav-links a { color: rgba(255, 255, 255, 0.85); font-size: 15px; font-weight: 500; }
        .nav-links a:hover { color: var(--primary); }
        .btn-navbar {
            background: var(--primary);
            color: #06112a;
            padding: 10px 24px;
            border-radius: 10px;
            font-weight: 700;
        }
    </style>
    `;
};
