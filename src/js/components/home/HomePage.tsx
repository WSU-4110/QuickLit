//@ts-ignore
import underConstructionImage from "../../../assets/under-construction.jpeg";

export function Home() {
    return(
    <>
    <img alt="site" id='under-construction-img' src={underConstructionImage}></img><div className='under-construction-statement big-font'>
        <div id='quick-lit'>QuickLit</div> is coming soon!
    </div><div className='under-construction-statement'>We're currently under construction.
        (<a href="https://github.com/WSU-4110/QuickLit/blob/main/README.md">
                Click here</a> if you want to read more about us).</div>          
    </>
    )
}

export default Home;