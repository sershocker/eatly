import './Rating.scss'
import classNames from 'classnames'

const Rating = (props) => {
    const {
        className,
        label,
        rating= 5 //0-5

    } = props

    return (
        <div
            className={classNames(className, 'rating')}
            style={{
                '--ratingViewValue': rating,
            }}
        >
            <img className="rating__stars-unfilled"
                 src="rating/stars_unfilled.svg" alt="" />
            <img className="rating__stars-filled"
                 src="rating/stars_filled.svg" alt="" />

            {label && (<span className={('rating__quantity')}>{label}</span>)}
        </div>
    )
}

export default Rating