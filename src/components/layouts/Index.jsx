import Nav from "../elements/Nav"
import Footer from "../elements/Footer"

export function Index({children}){
    return(
        <>
        <div className="w-full h-screen flex flex-col">
                <Nav/>

                <main className="main w-full mt-28 mb-8" id="main">
                    {children}
                </main>
                <Footer/>
        </div>
        </>
    )
}

export default Index
