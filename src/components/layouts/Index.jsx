import Nav from "../elements/Nav"
import Footer from "../elements/Footer"

export function Index({children}){
    return(
        <>
        <div className="w-full h-full min-h-screen flex flex-col dark:bg-[#0f1729]">
                <Nav/>

                <main className="main w-full mt-28 mb-8 dark:bg-[#0f1729]" id="main">
                    {children}
                </main>
                <Footer/>
        </div>
        </>
    )
}

export default Index
