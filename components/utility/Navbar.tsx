import { useState } from "react";
import { Link } from "react-scroll";

const logo = '/images/brand/logo.svg'

const Navbar = () => {

  return (
    <>
      <NavbarHeader />
      <div className="hidden lg:block w-screen">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden w-screen">
        <MobileNavbar />
      </div>
    </>
  );
}

const NavbarHeader = () => { 
  return (
    <div className="w-full bg-stone-700 text-white font-bold text-xs py-1 pl-4">
      (405) 341-0267
    </div>
  );
}

const MobileNavbar = () => {

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className="bg-red-700">
      <div className="bg-red-700 w-screen lg:h-14 h-24 md:pl-10 flex flex-row">
        <NavbarBrandButton />
        <div className="flex-grow"></div>
        <MobileNavOpenButton open={open} toggleOpen={toggleOpen} />
      </div>
      {open && <NavbarItems />}
    </div>
  );
}

const MobileNavOpenButton = ({ open, toggleOpen }: { open: boolean, toggleOpen: () => void }) => {
  return (
    <div className="mt-5 mr-2 md:mr-10 group" onClick={toggleOpen}>
      <div className={(open ? "translate-y-1 -rotate-45 group-hover:bg-red-500" : "-translate-y-2 group-hover:bg-neutral-200") + " rounded-full h-1 w-8 bg-white transition-all"}></div>
      <div className={(open ? "opacity-0 group-hover:bg-red-500" : "opacity-100 group-hover:bg-neutral-200") + " rounded-full h-1 w-8 bg-white  transition-all"}></div>
      <div className={(open ? "-translate-y-1 rotate-45 group-hover:bg-red-500" : "translate-y-2 group-hover:bg-neutral-200") + " rounded-full h-1 w-8 bg-white transition-all"}></div>
    </div>
  );
}

const DesktopNavbar = () => {

  return (
    <div className="bg-red-700 w-screen h-14 pl-10 flex flex-row z-50">
      <NavbarBrandButton />
      <NavbarItems />
    </div>
  );
}

const NavbarBrandButton = () => {

  return (
    <div className="bg-transparent px-4 text-white text-xs capitalize hover:bg-red-900 hover:bg-opacity-50 h-full font-semibold flex flex-row cursor-pointer">
      {/*<div className="mt-4 mr-2 h-6 w-6 relative">
        <Image alt="logo" src={logo} layout="fill" />
      </div>*/}
      <p className="pt-5 w-40 text-center">COUNTRY HOME MEATS</p>
    </div>
  );
}

const NavbarItems = () => {
  return (
    <div className="w-full lg:flex lg:flex-row relative top-0 z-50">
      <NavbarButton name="HOME" target="none" />
      { /* <NavbarButton name="ABOUT" target="about" /> */}
      <NavbarButton name="PRICING" target="prices" />
      <NavbarButton name="CUSTOM SLAUGHTER" target="slaughter" />
      <NavbarButton name="HOURS & LOCATION" target="location" />
    </div>
  );
}

const NavbarButton = ({ name, target }: { name: string, target: string }) => {

  return (
    <Link to={target} smooth={true} duration={300} offset={-100} isDynamic={true} className="pt-5 cursor-pointer bg-transparent px-4 text-white text-xs capitalize hover:bg-red-900 hover:bg-opacity-50 lg:h-full font-semibold transition-colors lg:w-auto w-full h-10">
      {name}
    </Link>
  );
}

export default Navbar;