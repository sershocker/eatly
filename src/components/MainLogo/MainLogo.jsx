import './MainLogo.scss'
import classNames from 'classnames'

const MainLogo = (props) => {
    const {
        className,
        isShort = false,
    } = props

    return (
        <div
            className={classNames('main-logo', className)}
        >
            <div className="main-logo__inner">
                <img src="/images/logo_image.svg" alt="" className="main-logo__img"/>
                <span
                    className={classNames("main-logo__text",
                        {"visually-hidden": isShort}
                        )}>
                    eatly
                    </span>
            </div>
        </div>
    )
}

export default MainLogo