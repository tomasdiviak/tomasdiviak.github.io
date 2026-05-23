const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
// toggle view
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    }
 );

}

navSlide()