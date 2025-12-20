import './Header.scss'
import classNames from 'classnames'
import MainLogo from "@/components/MainLogo";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

const Header = (props) => {
    const {
        url
    } = props

    const menuItems = [
        { title: "Menu", href: "/menu" },
        { title: "Blog", href: "/blog" },
        { title: "Pricing", href: "/pricing" },
        { title: "Contact", href: "/contact" },
    ]

    return (
        <header className='header container' data-js-overlay-menu="">
            <div className="header__inner">
                <MainLogo className="header__logo"/>
                <dialog className="header__overlay-menu-dialog" data-js-overlay-menu-dialog="">
                    <div className="header__menu">
                        <ul className="header__menu--list">
                        {menuItems.map(({title, href}, index) => (
                            <li className="header__menu--item" key = {index} >
                                <a
                                    href={href}
                                    className={
                                        classNames("header__menu--link", {"is-active": href === url})
                                    }
                                >
                                    {title}
                                </a>
                            </li>
                        ))}
                        </ul>
                        </div>
                <div className="header__actions">
                    <Button label ="Login" fontWeight={700} transparent/>
                    <Button label ="Sign Up" fontWeight={700} />

                </div>
                </dialog>
                <BurgerButton className="header__burger-button visible-mobile"
                              extraAttrs={{"data-js-overlay-menu-burger-button":""}}
                />
            </div>

        </header>
    )
}

export default Header