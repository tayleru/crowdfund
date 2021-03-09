
    let amountBacked = 89914
    let totalBackers = 5007
    let bambooStandInv = 101
    let blackEdInv = 64
    let MahoganySpecialInv = 0
        
    
    
    
    const radioButtons = document.querySelectorAll('.radio-input')
    const modalBtm = document.querySelectorAll('.modal-card-btm') 

    const mobileNavOpen = () => {
        const burgerMenu = document.querySelector(".burger")
        const mobileNavBG = document.querySelector(".mobile-nav-bg")
        const navList = document.querySelector(".nav-list")
        const navLinks = document.querySelectorAll(".nav-item")
    
        burgerMenu.addEventListener('click', ()=> {
        //Toggle Navigation
        navList.classList.toggle("nav-active");
        mobileNavBG.classList.toggle("hide");
        //Link Animation
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navItemFade 0.4s ease forwards ${index / 7 }s`;
                    }
                });
        })
    }
    
    mobileNavOpen()



    // Close & Open all Modals//
    



    const openCloseModal = ()=> {
        const openModalButtons = document.querySelectorAll('[data-modal-target]')
        console.log(openModalButtons)
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        console.log(closeModalButtons)
        
        const overlay = document.getElementById('overlay')
        
        openModalButtons.forEach(button => {

                button.addEventListener('click', event => {
                    const modal = document.querySelector(button.dataset.modalTarget)
                    console.log(modal)
                    openModal(modal)
                    radioButtons[button.value].checked = true;
                    radioBtnClickHandler()
                    window.scrollTo(0,0)
              

 
    }) }) 
        
         
        

     overlay.addEventListener('click', ()=> {
         const modals = document.querySelectorAll('.modal.active')
         modals.forEach(modal => {
            closeModal(modal)
         })
     })

     closeModalButtons.forEach(button => {
        button.addEventListener('click', ()=> {
            const modal = button.closest(".modal")
            closeModal(modal)
        })
    } )

     function openModal(modal) {
         if (modal == null) return;
        modal.classList.add('active')
        overlay.classList.add('active')
        
     }

     function closeModal(modal) {
 
        if (modal == null) return;
       modal.classList.remove('active')
       overlay.classList.remove('active')

    }
    

 }
    
    openCloseModal()



  radioBtnClickHandler = ()=> {

            radioButtons.forEach(btn => {
                const cardDiv = btn.closest('.modal-card')
                const cardBtm = btn.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
                const divLine = btn.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
                
                if(btn.checked){
                    cardDiv.classList.add('active')
                    cardBtm.classList.remove('hide')
                    divLine.classList.remove('hide')

                } else {
                    cardDiv.classList.remove('active')
                    cardBtm.classList.add('hide')
                    divLine.classList.add('hide')
                }
            })
               
    
    }

    radioButtons.forEach(btn => {
        btn.addEventListener('click', radioBtnClickHandler)
    })




   
   









