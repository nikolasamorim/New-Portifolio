

let i = 0
let x = 5

if(i == 0){
    document.cookie = "night";
}

if(document.cookie == "night"){
    function night()
}else{
    function day()
}



function night() {
    var nav = document.querySelector("#nav-img");
    nav.setAttribute('src', 'img/logo-dark.png');

    var image = document.querySelector("#apresentation-img");
    image.setAttribute('src', 'img/about-nik-wpp.png');

    var about = document.querySelector("#about-img");
    about.setAttribute('src', 'img/about-nik-dark.png');

    var contact = document.querySelector("#contact-img");
    contact.setAttribute('src', 'img/contact-nik-dark.png');

    document.body.style.setProperty('--dark-first', '#151A20');
    document.body.style.setProperty('--dark-second', '#1F252D');
    document.body.style.setProperty('--dark-three', '#2b2f35')
    document.body.style.setProperty('--font-light', '#f0f0f0');
    document.body.style.setProperty('--font-second', '#d3d3d3');

    document.getElementById('moon').id = 'none-moon';
    document.getElementById('none-sun').id = 'sun';

    document.getElementById('moonmenu').id = 'none-moonmenu';
    document.getElementById('none-sunmenu').id = 'sunmenu';

    document.getElementById('wave1').style.backgroundImage = "url('img/wave.png')";
    document.getElementById('wave2').style.backgroundImage = "url('img/wave.png')";
    document.getElementById('wave3').style.backgroundImage = "url('img/wave.png')";
    document.getElementById('wave4').style.backgroundImage = "url('img/wave.png')";

    return i = 0
}


function day() {
    var nav = document.querySelector("#nav-img");
    nav.setAttribute('src', 'img/logo-light.png');

    var image = document.querySelector("#apresentation-img");
    image.setAttribute('src', 'img/about-nik-light-wpp.png');
    
    var about = document.querySelector("#about-img");
    about.setAttribute('src', 'img/about-nik-light.png');

    var contact = document.querySelector("#contact-img");
    contact.setAttribute('src', 'img/contact-nik-light.png');

    document.body.style.setProperty('--dark-first', '#f3f3f3');
    document.body.style.setProperty('--dark-second', '#e0e0e0');
    document.body.style.setProperty('--dark-three', '#fafafa')
    document.body.style.setProperty('--font-light', '#202020');
    document.body.style.setProperty('--font-second', '#3a3a3a');

    document.getElementById('sun').id = 'none-sun';
    document.getElementById('none-moon').id = 'moon';

    document.getElementById('sunmenu').id = 'none-sunmenu';
    document.getElementById('none-moonmenu').id = 'moonmenu';

    document.getElementById('wave1').style.backgroundImage = "url('img/wave-light.png')";
    document.getElementById('wave2').style.backgroundImage = "url('img/wave-light.png')";
    document.getElementById('wave3').style.backgroundImage = "url('img/wave-light.png')";
    document.getElementById('wave4').style.backgroundImage = "url('img/wave-light.png')";

    return i = 1
}




//FUNÇÃO DE VOLTAR PORTFOLIO
function prev() {
    const carrousel = document.getElementById('carrousel');
    carrousel.scrollBy(-500, 0);
}

//FUNÇÃO DE VOLTAR PORTFOLIO
function next() {
    const carrousel = document.getElementById('carrousel');
    carrousel.scrollBy(500, 0);
}