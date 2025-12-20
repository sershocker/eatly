import './Hero.scss'
import classNames from 'classnames'
import Button from "@/components/Button";
import Rating from "@/components/Rating";
import DashboardCard from "@/components/DashboardCard";
import Statistics from "@/components/Statistics";
import Icon from "@/components/Icon";
import {Image} from "minista";

const Hero = (props) => {
    const {
        className,
    } = props

    const metrics = [
        {
            title: "10K+",
            description: ["Satisfied Costumers", "All Great Over The World"]
        },
        {
            title: "4M",
            description: ["Healthy Dishes Sold", "Including Milk Shakes Smooth"]
        },
        {
            title: "99.99%",
            description: ["Reliable Customer Support", "We Provide Great Experiences"]
        },
    ]

    return (
        <section className={classNames('hero', className)}>
            <div className="hero__inner container">
                <div className="hero__body">
                    <div className="hero__body--inner">
                        <p className="hero__subtitle">OVER 1000 USERS</p>
                        <h1 className="hero__title">
                            Enjoy Foods <span className="hidden-mobile">All </span><br/> Over
                            <span className="hidden-mobile"> The</span>
                            <span className="hero__title--accent"> World</span></h1>
                        <p className="hero__description">EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a
                            <span className="hero__description--accent"> $20 bonus</span>.
                    </p>
                        <div className="hero__controls">
                            <Button
                                label="Get Started"
                            />
                            <Button
                                label="Go Pro"
                                bordered
                                transparent
                            />
                        </div>
                        <div className="hero__rating">
                            <img src="trustpilot.svg" className="hero__rating--logo"/>
                            <Rating label="4900+"/>

                        </div>
                    </div>
                </div>
                <div className="hero__poster">
                    <div className="hero__poster--inner">
                        {/*<DashboardCard />*/}
                        <Image src="src/assets/images/hero/main-dish.png" className="hero__poster-dish" />
                        {/*<Statistics />*/}
                    </div>
                </div>
            </div>
                <div className="hero__metrics">
                    <ul className="hero__metrics--inner container">
                        {metrics.map(({title, description}, index) => (
                            <li className="hero__metrics--card" key={index}>
                                <div className="hero__metrics--title">{title}</div>
                                <div className="hero__metrics--description">
                                    {description.map((line, index) => (
                                        <p>{line}</p>
                                    ))}
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>

        </section>
    )
}

export default Hero