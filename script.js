let navbar_element = document.querySelectorAll('a');
let dark_switch = document.getElementById('darkmode');
let is_dark = 0;


navbar_element.forEach(nav => {
    nav.addEventListener('mouseover', function(){
        nav.style.textDecoration = 'underline';
    });
    nav.addEventListener('mouseout', function(){
        nav.style.textDecoration = '';
    });

});



function darkmode(){
    if (is_dark % 2 == 0){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById('github').src = 'assets/github-mark-white.png';
        document.getElementById('linkedin').src = 'assets/In-White-128@2x.png';
        navbar_element.forEach(nav => {
            nav.style.color = 'white';
        });
        dark_switch.innerHTML = 'Light';
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('github').src = 'assets/github-mark.png';
        document.getElementById('linkedin').src = 'assets/In-Blue-128.png';
        navbar_element.forEach(nav => {
            nav.style.color = 'black';
        });
        dark_switch.innerHTML = 'Dark';


    }
}
dark_switch.addEventListener('click', () => {
    darkmode();
    is_dark = is_dark + 1;
});



