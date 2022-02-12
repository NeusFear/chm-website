import BackgroundImage from "../utility/BackgroundImage";

const WelcomeBanner = () => { 
    return (
        <div className="w-screen h-96 relative">
            <BackgroundImage alt="banner" src="/images/front.jpg" />
            <div className="bg-gray-900 bg-opacity-70 absolute w-full h-full top-0 text-white text-center flex flex-col place-content-center">
                <h1 className="text-7xl font-bold" >COUNTRY HOME MEATS</h1>
                <p className="text-xl">Your local source for Retail, Custom Processed Meats, <br />and Inspected Slaughter in Central Oklahoma.</p>
            </div>
        </div>
    );
}

export default WelcomeBanner;