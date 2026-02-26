document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
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
    `;
});