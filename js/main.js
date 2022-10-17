

function nightforday() {
    var nav = document.querySelector("#nav-img");
    nav.setAttribute('src', 'img/logo-dark.png');

    var image = document.querySelector("#apresentation-img");
    image.setAttribute('src', 'img/about-nik-wpp.png');

    document.body.style.setProperty('--dark-first', '#151A20');
    document.body.style.setProperty('--dark-second', '#1F252D');
    document.body.style.setProperty('--dark-three', '#2b2f35')
    document.body.style.setProperty('--font-light', '#f0f0f0');
    document.body.style.setProperty('--font-second', '#d3d3d3');
    document.getElementById('moon').id = 'none-moon';
    document.getElementById('none-sun').id = 'sun';

    document.getElementById('wave1').style.backgroundImage = "url('img/wave.png')";
    document.getElementById('wave2').style.backgroundImage = "url('img/wave.png')";
    document.getElementById('wave3').style.backgroundImage = "url('img/wave.png')";
    document.getElementById('wave4').style.backgroundImage = "url('img/wave.png')";
}


function dayfornight() {
    var nav = document.querySelector("#nav-img");
    nav.setAttribute('src', 'img/logo-light.png');

    var image = document.querySelector("#apresentation-img");
    image.setAttribute('src', 'img/about-nik-light-wpp.png');

    document.body.style.setProperty('--dark-first', '#f3f3f3');
    document.body.style.setProperty('--dark-second', '#e0e0e0');
    document.body.style.setProperty('--dark-three', '#fafafa')
    document.body.style.setProperty('--font-light', '#202020');
    document.body.style.setProperty('--font-second', '#3a3a3a');
    document.getElementById('sun').id = 'none-sun';
    document.getElementById('none-moon').id = 'moon';

    document.getElementById('wave1').style.backgroundImage = "url('img/wave-light.png')";
    document.getElementById('wave2').style.backgroundImage = "url('img/wave-light.png')";
    document.getElementById('wave3').style.backgroundImage = "url('img/wave-light.png')";
    document.getElementById('wave4').style.backgroundImage = "url('img/wave-light.png')";
}

