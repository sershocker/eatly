import './Button.scss'
import classNames from 'classnames'

const Button = (props) => {
    const {
        className,
        isAccent,
        href,
        title,
        slim,
        type = "button",
    } = props

    const isLink = href !== undefined;
    const Component = isLink ? 'a' : 'button'

    const linkProps = { href };
    const buttonProps = { type };

    const specificProps = isLink ? linkProps : buttonProps;

    return (
        <Component
            className={classNames(className, 'button', {
                "accent": isAccent,
                "slim": slim,
            })}
            {...specificProps}
        >
            {title}
        </Component>
    )
}

export default Button