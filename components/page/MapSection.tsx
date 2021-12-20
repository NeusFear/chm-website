import BackgroundImage from "../utility/BackgroundImage";

const MapSection = () => {
  return (
    <div className="bg-stone-400 bg-opacity-40 w-screen flex flex-col place-items-center py-10" id="location">
      <div className="container bg-neutral-100 rounded-md p-10 shadow-lg flex flex-row">
        <div>
          <h1 className="text-4xl mb-4">Our Location</h1>
          <p className="text-red-800 text-xl">Country Home Meats is located at the NW Corner of Waterloo and Coltrane in Edmond Oklahoma.</p>
          <p className="pt-4">2775 E. Waterloo Road<br />Edmond, OK 73034</p>
        </div>
        <div className="w-full aspect-video">
          <BackgroundImage alt="map" src="/images/map.png" />
        </div>
      </div>
    </div>
  );
}

export default MapSection;