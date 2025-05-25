
export default function changeNav() {
    const nav = document.querySelector('nav');
    const logo = document.getElementById('logo');
    
    if(window.scrollY > 450) {
        nav.classList.add('scrolled');
        logo.src = "/images/YourTour-scrolled.svg";
    } else {
        nav.classList.remove('scrolled');
        logo.src = "/images/YourTour.svg";
    }
}