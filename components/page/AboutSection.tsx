import { Link } from "react-scroll";

const AboutSection = () => {
    return (
        <div className="bg-stone-400 bg-opacity-40 w-screen flex flex-col place-items-center" id="about">
            <div className="container bg-neutral-100 rounded-md -translate-y-10 p-10 shadow-lg">
                <h1 className="text-4xl">About</h1>
                <p className="pb-10">For 30 years this company was known as Hasty’s Country Home Meat Co. In February of 2002, former employee Robert, and his wife Anna, became the new owners of country home meat co. Robert and Anna, along with their crew of dedicated employees, continue to offer the same great quality products, five star customer service, and all the same integrity and honesty you had come to expect from the Hastys.</p>
                <h1 className="text-4xl">Regulations</h1>
                <p className="pb-10">Country Home Meats Co. is a State Inspected Plant. Regulated by the Oklahoma Department of Agricultrue.</p>
                <Link to="inspection" smooth={true} duration={300} offset={-100} isDynamic={true} className="chm-button">Read More</Link>
            </div>
        </div>
    );
}

export default AboutSection;