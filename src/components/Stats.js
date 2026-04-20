/**
 * Stats Component (Light Theme Redesign)
 */
export const Stats = () => {
    return `
    <section id="stats" class="stats">
        <div class="container stats-grid">
            <div class="stat-item reveal">
                <h3 class="counter-item" data-target-value="150" data-suffix="+">0</h3>
                <p>Marcas impulsadas</p>
            </div>
            <div class="stat-item reveal" style="transition-delay: 0.1s">
                <h3 class="counter-item" data-target-value="45" data-suffix="k">0</h3>
                <p>Usuarios activos</p>
            </div>
            <div class="stat-item reveal" style="transition-delay: 0.2s">
                <h3 class="counter-item" data-target-value="98" data-suffix="%">0</h3>
                <p>Tasa de éxito</p>
            </div>
        </div>
    </section>
    <style>
        .stats {
            padding: 100px 0;
            background: #F8FAFC;
            border-top: 1px solid rgba(6, 17, 42, 0.05);
            border-bottom: 1px solid rgba(6, 17, 42, 0.05);
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            text-align: center;
        }
        .stat-item h3 {
            font-size: 56px;
            margin-bottom: 10px;
            color: #06112a;
            font-weight: 800;
        }
        .stat-item p {
            font-size: 14px;
            color: #2ECC71;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
        }
    </style>
    `;
};
