import { useState } from "react";
import { SvgCaret } from "./Icons";

const Disclosure = ({ title, children }: { title: string, children: JSX.Element | JSX.Element[] }) => { 
    
    const [open, setOpen] = useState(false);
    
    return (
        <div className="border border-neutral-400 my-4 p-2 rounded-md cursor-pointer">
            <div className="flex flex-row" onClick={() => setOpen(!open)}>
                <p className="flex-grow font-semibold">{title}</p>
                <SvgCaret className={(!open && "-rotate-90") + " h-6 w-6 transition-transform duration-300"} />
            </div>
            <div className={(open ? "max-h-screen" : "max-h-0") + " overflow-hidden transition-height duration-300"}>
                { children }
            </div>
        </div>
    );
}

export default Disclosure;