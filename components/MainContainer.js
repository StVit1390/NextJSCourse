import Head from "next/head"
import A from "./A"


const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'any, nextjs' + keywords} />
                <title>main page</title>
            </Head>
            <div className="navbar">
                <A href="/" text="main" className="link" />
                <A href="/users" text="users" />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;

                    }
                    
                `}
            </style>
        </>
    )
}

export default MainContainer