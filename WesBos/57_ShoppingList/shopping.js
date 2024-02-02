const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state.
let items = [];

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
  <input  value="${item.id}" type="checkbox" ${item.complete && 'checked'}>
  <span class="itemName">${item.name}</span>
  <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
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
    // items.push(lsItems[0], lsItems[2]);
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('DELETING ITEM', id);
  // update our items array without this one.
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: We listened on the click on the list <ul> but then delegate the the click over to the button if thats what was clicked.
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
