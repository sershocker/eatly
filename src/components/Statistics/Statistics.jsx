import './Statistics.scss'
import classNames from 'classnames'

const Statistics = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'statistics')}
        >
            Statistics
        </div>
    )
}

export default Statistics