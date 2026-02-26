// Performance tracking for CSR
const startTime = performance.now();

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    
    // Generate 120 content items
    const items = Array.from({ length: 120 }, (_, i) => `
        <div class="demo-card">
            <h3>Item ${i + 1}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            <span class="demo-tag">Tag ${(i % 5) + 1}</span>
        </div>
    `).join('');
    
    // Render content to DOM
    app.innerHTML = `
        <div class="hero-container">
            <img src="csr.jpg" alt="Mountains" class="hero-bg">
            <nav class="navbar">
                <span class="logo">suruosh</span>
                <span class="menu-icon">&#9776;</span>
            </nav>
            <div class="hero-content">
                <h1 class="explore-text">csr</h1>
                <p class="hero-desc">This is a demonstration of Client-Side Rendering (CSR). All main content and layout are rendered using JavaScript after the page loads.</p>
            </div>
        </div>
        <div class="content-section">
            <h2>Rendered Content (120 items)</h2>
            <div class="demo-grid">
                ${items}
            </div>
        </div>
    `;
    
    // Measure AFTER rendering (this is when content is ready)
    window.csr_contentReady = Math.round(performance.now() - startTime);
});

window.addEventListener('load', () => {
    const totalTime = Math.round(performance.now() - startTime);
    const contentReadyTime = window.csr_contentReady || 0;
    
    const widget = document.createElement('div');
    widget.className = 'perf-widget';
    widget.innerHTML = `
        <div class="perf-item"><span>Content Ready:</span> <strong>${contentReadyTime}ms</strong></div>
        <div class="perf-item"><span>Total Load:</span> <strong>${totalTime}ms</strong></div>
        <div class="perf-item"><span>Type:</span> <strong>CSR</strong></div>
    `;
    document.body.appendChild(widget);
});