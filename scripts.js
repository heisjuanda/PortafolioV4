/*
//word to list of letters and then inside a spam
const effect = id => {
    const e = document.getElementById(id),
        text = e.innerText.split('')
    e.innerText = ''
    text.forEach(letter => {
        const span = document.createElement('span')
        span.className = 'letter'
        span.innerText = letter
        e.appendChild(span)
    })
}
//variables Init section
document.addEventListener('DOMContentLoaded', () => {
    let imagen = document.getElementById('Imagen')
    let imagen1 = document.getElementById('Imagen2')
    let about = document.getElementById('ABOUT')
    let hello = document.getElementById('Hello')
    let menuHeader = document.querySelector('.menuHeaderInit')
    let opacityMenuHeader = window.getComputedStyle(menuHeader)
    let mover = document.querySelector('.aboutMeIntro')
    let circle = document.getElementById('trailer');
    effect('specialLink')

    //Scroll event
    window.addEventListener('scroll', () => {
        let value = window.scrollY
        //console.log(mover.offsetTop, value)
        if (window.innerWidth > 700) {
            if (mover.offsetTop > value) {
                imagen.style.transform = 'scale(' + (1 + (value * 0.00018)) + ')'
                if (opacityMenuHeader.getPropertyValue('opacity') > 0) {
                    hello.style.opacity = 1 - value * 0.05
                    menuHeader.style.top = value * 0.8 + 'px'
                    menuHeader.style.opacity = 1 - value * 0.0078
                } else {
                    hello.style.opacity = 1
                    menuHeader.style.top = 0 + 'px'
                    menuHeader.style.opacity = 0.8
                }
            } else {
                imagen.style.transform = 'scale(1)'
            }
            if (value > mover.offsetTop) {
                let valueN = value - mover.offsetTop
                about.style.top = valueN * 0.6 + 'px'
                about.style.opacity = 1 - valueN / 1000
            } else {
                about.style.opacity = 1
                about.style.top = 0 + 'px'
            }
        } else {
            if (mover.offsetTop > value) {
                imagen1.style.transform = 'scale(' + (1 + (value * 0.00018)) + ')'
                if (opacityMenuHeader.getPropertyValue('opacity') > 0) {
                    hello.style.opacity = 1 - value * 0.05
                    //menuHeader.style.top = value * 0.8 + 'px'
                    menuHeader.style.opacity = 1 - value * 0.03
                } else {
                    hello.style.opacity = 1
                    menuHeader.style.top = 0 + 'px'
                    menuHeader.style.opacity = 0.8
                }
            } else {
                imagen1.style.transform = 'scale(1)'
            }
            if (value > mover.offsetTop) {
                let valueN = value - mover.offsetTop
                about.style.top = valueN * 0.6 + 'px'
                about.style.opacity = 1 - valueN / 650
            } else {
                about.style.opacity = 1
                about.style.top = 0 + 'px'
            }
        }
    })
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Es un teléfono o tableta
    } else {
        //mouse trailer
        const trailer = document.getElementById("trailer");
        //document.body.style.cursor = "none";
        const animateTrailer = (e, interacting) => {
            const x = e.clientX - trailer.offsetWidth / 2,
                y = e.clientY - trailer.offsetHeight / 2;
            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`
            }
            trailer.animate(keyframes, {
                duration: 800,
                fill: "forwards"
            });
        }
        const getTrailerClass = type => {
            switch (type) {
                case "link":
                    return "linkSymbolt";
                default:
                    return "";
            }
        }
        window.onmousemove = e => {
            const interactable = e.target.closest(".interactable"),
                interacting = interactable !== null;
            const icon = document.getElementById("trailer-icon");
            animateTrailer(e, interacting);
            trailer.dataset.type = interacting ? interactable.dataset.type : "";
            if (interacting) {
                icon.className = getTrailerClass(interactable.dataset.type)
            }
            if (e.target.closest('.aboutMeIntro')) {
                circle.style.backgroundColor = 'black'
            } else {
                circle.style.backgroundColor = 'white'
            }
        }
    }
});*/