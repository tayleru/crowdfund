
    let amountBacked = 20978
    let goal = 100000 
    let totalBackers = 5007

    const radioButtons = document.querySelectorAll('.radio-input')
    const modalBtm = document.querySelectorAll('.modal-card-btm') 
    const backProjectBtn = document.querySelector('.overview-cta .btn')
    const overlay = document.querySelector('#overlay')
    const pledgeModal = document.querySelector('#modal')
    const selectRewardBtns = document.querySelectorAll('#selectReward')
    const confirmationBtns = document.querySelectorAll('#confirmation-btn')
    const gotItBtn = document.querySelector('#gotItBtn')
    const confirmationModal = document.querySelector('.confirmation-content')
    const modalCards = document.querySelectorAll('.modal-card')
   

    //-------------Mobile Nav --------------------//

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

   
// ---------------  Handlers ------------------- //


    
    const togglePledgeModal = ()=> {
        pledgeModal.classList.toggle('active')
        overlay.classList.toggle('active')
    }
   

   const radioButtonHandler = ()=> {
        radioButtons.forEach(btn => {
            if(btn.checked) {
                btn.parentElement.parentElement.parentElement.classList.add('active')
                btn.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hide')
                btn.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hide')
            } else {
                btn.parentElement.parentElement.parentElement.classList.remove('active')
                btn.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('hide')
                btn.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('hide')
            }
        })
   }
  


   const modalCloseHandler = ()=> {
        const closeBtn = document.querySelector('.close-button')
        closeBtn.addEventListener('click', togglePledgeModal)
        overlay.addEventListener('click', togglePledgeModal)
   }

   modalCloseHandler()

const selectRewardHandler = event => {
    togglePledgeModal()
    pledgeToggler(event.currentTarget)
    window.scrollTo(0,0)
}

const confirmationHandler = event => {
    const element = event.currentTarget.previousElementSibling.lastElementChild
    const value = element.value
    updateProjectData(value)
    togglePledgeModal()
    confirmationModal.classList.add('active')
    overlay.classList.add('active')
}

const confirmationClose = ()=> {
    confirmationModal.classList.remove('active')
    overlay.classList.remove('active')
}

const updateProjectData = value => {
   const totalBacked = document.querySelector('#amount-backed')
   const progressBar = document.querySelector('.progress-bar')
  
    if(value) {
        amountBacked += +value
        totalBackers ++ 
    }
    let percentBacked = amountBacked/goal * 100
    totalBacked.innerText = `$${amountBacked.toLocaleString()}`
    progressBar.style.width = `${percentBacked}%`
    
}
    

//Event Listeners//

    backProjectBtn.addEventListener('click', togglePledgeModal)

    for (const btn of radioButtons) {
        btn.addEventListener('click', radioButtonHandler)
    }

    for (const btn of selectRewardBtns){
        btn.addEventListener('click', selectRewardHandler)
    }

    for (const btn of confirmationBtns) {
        btn.addEventListener('click', confirmationHandler)
    }

    gotItBtn.addEventListener('click', confirmationClose)



//-----Helping functions-----//

 const pledgeToggler = element => {
     const index = getIndexOf(element);
     radioButtons.item(index + 1).click()
 }

 const getIndexOf = element => { 
    let i = 0;
    for( const btn of selectRewardBtns) {
        if (btn === element) {
            return i;
        } 
     i++;
    }
    return i;
 }

