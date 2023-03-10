import { RetailPriceType } from "../../data/prices";

const PricesList = ({ priceList }: { priceList: RetailPriceType[] }) => {

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="text-left">Item</th>
          <th>Price</th>
          <th className="text-left">Unit</th>
        </tr>
      </thead>
      <tbody>
        {priceList.map((item, key) => <PriceItem key={ key } priceItem={item} />)}
      </tbody>
    </table>
  );
}

const PriceItem = ({ priceItem }: { priceItem: RetailPriceType }) => {
  return (
    <tr className="border-neutral-300 border-b even:bg-stone-100 hover:bg-red-700 hover:bg-opacity-10">
      <td>{priceItem.item}</td>
      <td className="text-center">{priceItem.price === -1 ? "Call for Pricing" : "$" + priceItem.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') }</td>
      <td>{priceItem.unit}</td>
    </tr>
  );
}

export default PricesList;