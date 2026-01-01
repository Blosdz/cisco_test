function switchTab(tab) {
  const informationSection = document.getElementById('information-section');
  const imagesSection = document.getElementById('images-section');
  const desplegables = document.querySelector('.mt-8.w-full.mx-auto.space-y-4.p-4');
  const productTab = document.getElementById('product-tab');
  const imagesTab = document.getElementById('images-tab');

  if (tab === 'product') {
    informationSection.classList.remove('hidden');
    imagesSection.classList.add('hidden');
    desplegables.classList.remove('hidden');
    
    productTab.classList.remove('bg-gray-100', 'text-gray-700');
    productTab.classList.add('bg-blue-600', 'text-white');
    imagesTab.classList.remove('bg-blue-600', 'text-white');
    imagesTab.classList.add('bg-gray-100', 'text-gray-700');
  } else if (tab === 'images') {
    informationSection.classList.add('hidden');
    imagesSection.classList.remove('hidden');
    desplegables.classList.add('hidden');
    
    productTab.classList.remove('bg-blue-600', 'text-white');
    productTab.classList.add('bg-gray-100', 'text-gray-700');
    imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
    imagesTab.classList.add('bg-blue-600', 'text-white');
  }
}