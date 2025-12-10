import "@/styles"
import { Head } from "minista"
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";
// import Content from "@/layouts/Content";

export default function (props) {
    const { children } = props;
    return (
        <>
            <Head>
                <title>eatly | HOME PAGE</title>
            </Head>
            <Header/>
            <Content>
                {children}
            </Content>
            {/*<Footer/>*/}
        </>
    )
}
