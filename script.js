async function generateHash() {
    const message = document.getElementById('messageInput').value;
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    document.getElementById('hashOutput').innerText = hashHex;
}

document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const p = item.nextElementSibling;
        if (p.style.display === 'block') {
            p.style.display = 'none';
        } else {
            p.style.display = 'block';
        }
    });
});

// Función para alternar la visualización del menú en dispositivos móviles
function toggleMenu() {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
}

// Función para desplazarse a una sección específica
function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop - 60 
    });
}
