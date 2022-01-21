const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

// Select tab content items
function selectItem(e){
 removeBorder()
 removeShow()
  this.classList.add('tab-border');

   const tabContentItem = document.querySelectorAll(`#${this.id}-content`)
   tabContentItem[0].classList.add('show')
  
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}
tabItems.forEach(item => item.addEventListener('click', selectItem))
