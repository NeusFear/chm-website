import { retailBeefPrices, retailPorkPrices, retailPoultryPrices, sectionBeefPrices, sectionPorkPrices } from "../../data/prices";
import Disclosure from "../utility/Disclosure";
import PricesList from "../utility/PricesList";

const PricesSection = () => {
  return (
    <div className="bg-neutral-200 w-screen flex flex-col place-items-center py-10" id="prices">
      <div className="container bg-neutral-100 rounded-md p-10 shadow-lg">
        <h1 className="text-4xl mb-4 lg:pl-10">Retail Prices</h1>
        <p className="text-red-800 text-xl lg:pl-10">Need something &quot;not on the list&quot;? Give us a call. I bet we can help.</p>
        <Disclosure title="Beef Retail Prices">
          <PricesList priceList={retailBeefPrices} />
        </Disclosure>
        <Disclosure title="Beef Section Prices">
          <PricesList priceList={sectionBeefPrices} />
        </Disclosure>
        <Disclosure title="Pork Retail Prices">
          <PricesList priceList={retailPorkPrices} />
        </Disclosure>
        <Disclosure title="Pork Section Prices">
          <PricesList priceList={sectionPorkPrices} />
        </Disclosure>
        <Disclosure title="Poultry Retail Prices">
          <PricesList priceList={retailPoultryPrices} />
        </Disclosure>
      </div>
    </div>
  );
}

export default PricesSection;
