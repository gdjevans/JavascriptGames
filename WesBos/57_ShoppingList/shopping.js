const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state.
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!!!');
  const name = e.currentTarget.item.value;
  // If its empty then don't submitted it
  if (!name) {
    return;
  }
  console.log(name);
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push the items into our state.
  items.push(item);
  console.log(`There are now ${items.length} in your state.`);
  // Clear the form.
  e.target.reset();
  // Fire off a custom event that will tell anyone else who cares that the items have been updated.
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      (item) => `<li class="shopping-item">
  <input type="checkbox">
  <span class="itemName">${item.name}</span>
  <button aria-label="Remove ${item.name}">&times;</button>
  </li>`
    )
    .join('');
  console.log(html);
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS');
  // Pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();