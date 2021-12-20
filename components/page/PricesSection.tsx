import { retailBeefPrices, retailPorkPrices, retailPoultryPrices, sectionBeefPrices, sectionProkPrices } from "../../data/prices";
import Disclosure from "../utility/Disclosure";
import PricesList from "../utility/PricesList";

const PricesSection = () => {
  return (
    <div className="bg-neutral-200 w-screen flex flex-col place-items-center py-10" id="prices">
      <div className="container bg-neutral-100 rounded-md p-10 shadow-lg">
        <h1 className="text-4xl mb-4">Retail Prices</h1>
        <p className="text-red-800 text-xl">Prices are subject to change. Please call for pricing dut to impact of COVID-19 on the market. Thank you!</p>
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
          <PricesList priceList={sectionProkPrices} />
        </Disclosure>
        <Disclosure title="Poultry Retail Prices">
          <PricesList priceList={retailPoultryPrices} />
        </Disclosure>
      </div>
    </div>
  );
}

export default PricesSection;