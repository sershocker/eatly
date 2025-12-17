import './Footer.scss'
import classNames from 'classnames'
import MainLogo from "@/components/MainLogo";
import Button from "@/components/Button";
import Socials from "@/components/Socials";

const Footer = (props) => {
    const {
        className,
    } = props

    const links = [
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
        {
            title: 'About Us',
            href: '/about',
        },
        {
            title: 'Contact',
            href: '/contact',
        },

    ]
    const socials = [
        {
            title: "Instagram",
            iconName: "instagram",
        },
        {
            title: "LinkedIn",
            iconName: "linkedin",
        },
        {
            title: "Facebook",
            iconName: "facebook",
        },
        {
            title: "Twitter",
            iconName: "twitter",
            iconAccent: true,
        },
    ]

    return (
        <footer className='footer' >
            <div className="footer__inner container">
                <div className="footer__menu">
                    <MainLogo className="footer__logo"/>
                    <div className="footer__links">
                        {links.map(({title, href}, index) =>
                            (
                                <a
                                    className="footer__link"
                                    href={href}
                                    key={index}
                                >
                                    {title}
                                </a>
                        ))}
                    </div>
                </div>
                <div className="footer__extra">
                    <p className="footer__copyright">@<time dateTime="2023">2023</time> EATLY All Rights Reserved.</p>
                    <Socials className="footer__soc1als" links={socials} />
                </div>
            </div>
        </footer>
    )
}

export default Footer