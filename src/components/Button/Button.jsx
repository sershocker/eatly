import './Button.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Button = (props) => {
    const {
        className,
        transparent,
        href,
        title,
        iconName,
        label,
        iconAccent,
        bordered,
        fontWeight = 500,
        isLabelHidden = false,
        iconPosition = "before",
        type = "button",
        hasFillIcon = false,
        extraAttrs

    } = props

    const isLink = href !== undefined;
    const Component = isLink ? 'a' : 'button'

    const linkProps = { href };
    const buttonProps = { type };

    const specificProps = isLink ? linkProps : buttonProps;

    const styleFont = {fontWeight: fontWeight};


    const iconComponent = iconName &&(
        <Icon
            className={classNames("button__icon", {
                ["button__icon--accent"]: iconAccent}
            )}
            name={iconName}
            hasFill={hasFillIcon}

        />);

    return (
        <Component
            className={classNames(className, 'button', {
                "button--transparent": transparent,
                "button--bordered": bordered,
            })}
            title={title}
            aria-label={title}
            {...specificProps}
            {...extraAttrs}

        >
            {iconPosition === 'before' && iconComponent}
            {!isLabelHidden && (<span className="button__label" style = {styleFont}>{label}</span>)}
            {iconPosition === 'after' && iconComponent}

        </Component>
    )
}

export default Button