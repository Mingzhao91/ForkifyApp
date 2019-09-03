import { elements, elementStrings } from './base';

export const renderItem = item => {
  const markup = `
        <li class="${elementStrings.shoppingItem}" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="${elementStrings.btnUpdateShoppingItemCount}" min="0">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="${elementStrings.btnDeleteShoppingItem} btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
  elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
  const item = document.querySelector(`[data-itemid="${id}"]`);
  if (item) {
    item.parentElement.removeChild(item);
  }
};
