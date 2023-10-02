 // Get references to HTML elements
 const searchInput = document.getElementById('searchInput');
 const autocompleteInput = document.getElementById('autocomplete');
 const filterCheckboxes = document.querySelectorAll('.filterCheckbox');
 const rangeInput = document.getElementById('rangeInput');
 const rangeValue = document.getElementById('rangeValue');
 const itemList = document.getElementById('itemList');

 // Add event listeners
 searchInput.addEventListener('input', filterItems);
 autocompleteInput.addEventListener('input', filterItems);
 filterCheckboxes.forEach(checkbox => {
     checkbox.addEventListener('change', filterItems);
 });
 rangeInput.addEventListener('input', filterItems);

 // Filter function
 function filterItems() {
     const searchText = searchInput.value.toLowerCase();
     const autocompleteText = autocompleteInput.value.toLowerCase();
     const selectedCheckboxes = [...filterCheckboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
     const rangeFilterValue = parseInt(rangeInput.value);

     // Loop through items and apply filters
     const items = itemList.querySelectorAll('.item');
     items.forEach(item => {
         const text = item.textContent.toLowerCase();
         const options = item.getAttribute('data-options').split(' ');
         const price = parseInt(options.pop()); // Extract price

         if (
             text.includes(searchText) &&
             (autocompleteText === '' || options.includes(autocompleteText)) &&
             (selectedCheckboxes.length === 0 || selectedCheckboxes.every(checkbox => options.includes(checkbox))) &&
             price >= rangeFilterValue
         ) {
             item.classList.remove('hidden');
         } else {
             item.classList.add('hidden');
         }
     });

     // Update the range value display
     rangeValue.textContent = rangeFilterValue;
 }

 // Initial filtering
 filterItems();