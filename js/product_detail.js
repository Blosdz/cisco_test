function incrementQuantity() {
  const input = document.getElementById('quantity');
  input.value = parseInt(input.value) + 1;
}
                        
function decrementQuantity() {
  const input = document.getElementById('quantity');
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

let descriptionExpanded = false;
                      
function toggleDescription() {
  descriptionExpanded = !descriptionExpanded;
  const p2 = document.getElementById('description-p2');
  const p3 = document.getElementById('description-p3');
  const icon = document.getElementById('description-icon');
  
  if (descriptionExpanded) {
    p2.classList.remove('text-gray-400', 'text-sm');
    p2.classList.add('text-gray-700');
    p3.classList.remove('text-gray-400', 'text-sm');
    p3.classList.add('text-gray-700');
    icon.textContent = '−';
  } else {
    p2.classList.add('text-gray-400', 'text-sm');
    p2.classList.remove('text-gray-700');
    p3.classList.add('text-gray-400', 'text-sm');
    p3.classList.remove('text-gray-700');
    icon.textContent = '+';
  }
}



function exchangeImage(element) {
  const imgElement = element.querySelector('img');
  const mainImg = document.getElementById('img_main');
  if (imgElement && mainImg) {
    const tempSrc = mainImg.src;
    const tempAlt = mainImg.alt;
    
    mainImg.src = imgElement.src;
    mainImg.alt = imgElement.alt;
    
    imgElement.src = tempSrc;
    imgElement.alt = tempAlt;
  }
}