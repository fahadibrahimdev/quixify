export function scrollToSection (id) {
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
}
