const btnToggle = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]
const donateButton = document.getElementById('donatebutton')

btnToggle.addEventListener('click', function(){
        console.log('funcionando');
        navbarlinks.classList.toggle('active')
        donateButton.classList.toggle('active')

})
