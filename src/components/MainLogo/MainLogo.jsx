import './MainLogo.scss'
import classNames from 'classnames'
import {Image} from "minista";

const MainLogo = (props) => {
    const {
        className,
        isShort = false,
    } = props

    const title = "Home"

    return (
        <a
            className={classNames('main-logo', className)}
            href='/'
            title={title}
            aria-label={title}
        >
            <div className="main-logo__inner">
                <img src="logo_image.svg" alt="Logo" className="main-logo__img"/>
                <span
                    className={classNames("main-logo__text",
                        {"visually-hidden": isShort}
                        )}>
                    eatly
                    </span>
            </div>
        </a>
    )
}

export default MainLogo