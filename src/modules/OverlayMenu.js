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
        this.overlayState = this.burgerButtonElement.classList.contains("is-active");


        this.bindEvents();
    }

    burgerButtonClick = ()=> {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.dialogElement.open = !this.dialogElement.open;
        document.documentElement.classList.toggle(this.stateClasses.isLock);

        this.overlayState = this.burgerButtonElement.classList.contains("is-active");

    }

    bindEvents() {
        this.burgerButtonElement.addEventListener("click", this.burgerButtonClick);
        window.onresize = () =>{
            if(window.innerWidth > 768 &&  this.overlayState){
                this.burgerButtonClick();
            }
        };
    }

}

export default OverlayMenu;