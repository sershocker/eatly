import "@/styles"
import { Head } from "minista"
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";
import Footer from "@/layouts/Footer";
// import Content from "@/layouts/Content";

export default function (props) {
    const { children, title, url } = props;
    return (
        <>
            <Head>
                <title>eatly | {title} </title>
                <script src="/src/main.js" type="module"/>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Header url={url} />
            <Content>
                {children}
            </Content>
            <Footer/>
        </>
    )
}
