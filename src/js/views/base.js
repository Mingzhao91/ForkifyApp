export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')
};

export const elementStrings = {
    loader: 'loader',
    paginationBtn: 'btn-inline',
    searchResItem: 'results__link',
    searchResItemSelected: 'results__link--active',
    btnDecrease: 'btn-decrease',
    btnIncrease: 'btn-increase',
    recipeServings: 'recipe__info-data--people',
    recipeCount: 'recipe__count',
    btnAddRecipe: 'recipe__btn--add',
    shoppingItem: 'shopping__item',
    btnDeleteShoppingItem: 'shopping__delete',
    btnUpdateShoppingItemCount: 'shopping__count-value',
    btnLike: 'recipe__love',
    likesLink: 'likes__link'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = parent => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};