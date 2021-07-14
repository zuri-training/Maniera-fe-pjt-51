const dropdownMenus = document.querySelector('.display-select-input');
const optionContainer = document.querySelector('.select-control');
const optionItems = document.querySelectorAll('.option-items');
const allOpenSelect = document.querySelectorAll('.display-select-input');

const dropdownMenu = () => {
    dropdownMenus.classList.toggle('show');
    console.log('I am clicked');
};

optionContainer.addEventListener('click', dropdownMenu);

for (const selectOption of optionItems) {
    selectOption.addEventListener('click', function () {
        console.log('okay');
        if (!this.classList.contains('selected')) {
            this.parentNode
                .querySelector('.option-items.selected')
                .classList.remove('selected');
            this.classList.add('selected');
            this.closest('.display-select-input').querySelector(
                '.option-display'
            ).textContent = this.textContent;
        }
    });
}

window.addEventListener('click', function (e) {
    for (const closeAll of allOpenSelect) {
        if (!closeAll.contains(e.target)) {
            closeAll.classList.remove('show');
        }
    }
});
