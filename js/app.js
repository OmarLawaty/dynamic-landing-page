const navbar = document.querySelector('.navbar__menu');
const container = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const vh = window.innerHeight;
const vhTop = vh * -1;

// make nav and goTo the section
for (let i = 0 ; i < sections.length; i++) {

    //create ancher tag with href atrrubute
    const goToSection = document.createElement('a');
    goToSection.setAttribute('href', `#${sections[i].id}`);
    goToSection.setAttribute('class', 'Link');
    goToSection.textContent = `${sections[i].dataset.nav}`

    //append the list to the navbar
    const links = document.createElement('li');
    links.appendChild(goToSection);
    container.appendChild(links);
}
navbar.appendChild(container);

//Event to call the highlighting function
window.onscroll = () => {
    for (const section of sections) {
        isSectionInView(section);
    }
}

//function that highlights the section
function isSectionInView(selectedSection) {
    const Boundings = selectedSection.getBoundingClientRect();
    if (Boundings.top > vhTop / 2.5 && Boundings.bottom < vh ){
        selectedSection.classList.add('your-active-class');
        isNavSlotisSelected(selectedSection);
        }else{
        selectedSection.classList.remove('your-active-class');
    }
}

//function that highlights the navBar slot when active
function isNavSlotisSelected (section) {
    let anchers = document.querySelectorAll('.Link');
    for (const ancher of anchers) {
        if (ancher.textContent === section.dataset.nav ) {
            ancher.classList.add('active-nav');
        }else{
            ancher.classList.remove('active-nav');
        }
    }
}