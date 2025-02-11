document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hover effect for service items
    document.querySelectorAll(".service-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Hover effect for doctor items
    document.querySelectorAll(".doctor-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-5px)";
            item.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });

    // Social Media Icon Hover Effect
    document.querySelectorAll(".social-media a").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "transform 0.3s ease";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
