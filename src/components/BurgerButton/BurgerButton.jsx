import './BurgerButton.scss'
import classNames from 'classnames'

const BurgerButton = (props) => {
    const {
        className,
        extraAttrs,
    } = props

    const title = "Open menu"

    return (
        <button
            className={classNames('burger-button', className) }
            type="button"
            aria-label={title}
            title={title}
            {...extraAttrs}
        >
                <div className="burger-button__line"></div>
                <div className="burger-button__line"></div>
                <div className="burger-button__line"></div>
        </button>
    )
}

export default BurgerButton