import './Hero.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const Hero = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'hero')}
        >
        </div>
    )
}

export default Hero