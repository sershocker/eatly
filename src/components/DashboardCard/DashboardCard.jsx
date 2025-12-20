import './DashboardCard.scss'
import classNames from 'classnames'

const DashboardCard = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'dashboard-card')}
        >
            DashboardCard
        </div>
    )
}

export default DashboardCard