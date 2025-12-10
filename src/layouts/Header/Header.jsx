import './Header.scss'
import classNames from 'classnames'
import MainLogo from "@/components/MainLogo";
import Button from "@/components/Button";

const Header = (props) => {
    const {
        className,
    } = props

    return (
        <div className='header'>
            <div className="header__inner">
                <div className="header__shift">
                    <MainLogo className="header__logo"/>
                    <div className="header__menu">
                        <Button title ="Menu" slim/>
                        <Button title ="Blog" slim/>
                        <Button title ="Pricing" slim/>
                        <Button title ="Contact" slim/>
                    </div>
                </div>
                <div className="header__actions">
                    <Button title ="Login" />
                    <Button title ="Sign Up" isAccent/>
                </div>
            </div>

        </div>
    )
}

export default Header