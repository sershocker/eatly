class OverlayMenu {
    selectors = {
        root: "[data-js-overlay-menu]",
        overlay: "[data-js-overlay-menu-dialog]",
        button: "[data-js-overlay-menu-burger-button]",
    };

    stateClasses = {
        isActive: "is-active",
        isLock: "is-lock"
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.dialogElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.button);

        this.bindEvents();
        console.log("Overlay Menu");

    }

    burgerButtonClick = ()=> {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.dialogElement.open = !this.dialogElement.open;
        document.documentElement.classList.toggle(this.stateClasses.isLock);

    }

    bindEvents() {
        this.burgerButtonElement.addEventListener("click", this.burgerButtonClick);
    }

}

export default OverlayMenu;