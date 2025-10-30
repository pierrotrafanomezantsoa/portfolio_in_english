AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()


    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ccses6w','template_00vcuuj','#contact-form','5ajH_wRsycCMZy8qA')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'
        

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000) 

        // Clear input fields
        contactForm.reset()

    }, ()=> {
        // Show error message
      contactMessage.textContent ='Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail) 