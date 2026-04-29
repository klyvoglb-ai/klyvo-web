/**
 * Comparison Component (Tabla comparativa)
 */
export const Comparison = () => {
    const rows = [
        { var: "Tiempo de Respuesta", trad: "Lenta e inconsistente", klyvo: "Inmediata (< 60 segundos)" },
        { var: "Captura de Demanda", trad: "40% (Fuga constante de leads)", klyvo: "100% (Clutch System)" },
        { var: "Uso del Talento Humano", trad: "Tareas repetitivas y FAQs", klyvo: "Gestión de Cierres de Valor" },
        { var: "Retorno de Inversión", trad: "Gasto incierto en publicidad", klyvo: "Capital Recuperado Predecible" }
    ];

    return `
    <section id="comparison" class="comparison">
        <div class="container">
            <div class="section-header reveal">
                <span class="badge-light">Contraste</span>
                <h2>El impacto de la infraestructura.</h2>
            </div>
            
            <div class="table-container reveal">
                <table class="comp-table">
                    <thead>
                        <tr>
                            <th>Variable de Negocio</th>
                            <th>Operación Tradicional <br><span class="th-sub">(Caos)</span></th>
                            <th class="highlight-col">Con Infraestructura <br><span class="th-sub-highlight">KLYVO</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map(r => `
                            <tr>
                                <td class="td-var">${r.var}</td>
                                <td>${r.trad}</td>
                                <td class="highlight-col bold-klyvo">${r.klyvo}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <style>
        .comparison { padding: 6rem 0; background: #FFFFFF; }
        .table-container {
            max-width: 1000px;
            margin: 0 auto;
            overflow-x: auto;
            background: #FFFFFF;
            border-radius: 20px;
            box-shadow: var(--shadow-premium);
            border: 1px solid rgba(6, 17, 42, 0.05);
        }
        .comp-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }
        .comp-table th, .comp-table td {
            padding: 20px 30px;
            border-bottom: 1px solid rgba(6, 17, 42, 0.05);
        }
        .comp-table th {
            background: #F8FAFC;
            color: #06112a;
            font-family: var(--font-heading);
            font-size: 18px;
            font-weight: 700;
        }
        .th-sub { font-size: 14px; font-weight: 400; color: #64748B; }
        .th-sub-highlight { font-size: 14px; font-weight: 700; color: var(--primary); }
        .highlight-col {
            background: rgba(46, 204, 113, 0.05);
            border-left: 2px solid rgba(46, 204, 113, 0.2);
            border-right: 2px solid rgba(46, 204, 113, 0.2);
        }
        .comp-table th.highlight-col {
            border-top: 4px solid var(--primary);
            background: rgba(46, 204, 113, 0.1);
        }
        .td-var { font-weight: 600; color: #06112a; }
        .comp-table td { color: #64748B; font-size: 15px; }
        .bold-klyvo { color: #06112a !important; font-weight: 600; }
        
        @media (max-width: 768px) {
            .comp-table th, .comp-table td { padding: 15px; font-size: 14px; }
        }
    </style>
    `;
};
