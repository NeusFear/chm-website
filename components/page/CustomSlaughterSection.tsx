import { beefSlaughterProcessingPrices, porkSlaughterProcessingPrices } from "../../data/prices";
import Disclosure from "../utility/Disclosure";
import PricesList from "../utility/PricesList";

const CustomSlaughterSection = () => {
  return (
    <div className="bg-stone-400 bg-opacity-40 w-screen flex flex-col place-items-center py-10" id="slaughter">
      <div className="container bg-neutral-100 rounded-md p-10 shadow-lg">
        <h1 className="text-4xl mb-4 lg:ml-10">Custom Slaughter</h1>
        <div className="flex flex-row lg:w-1/2">
          <div className="flex-grow lg:pl-10 mb-5">
            <p className="">We encourage our customers to tour our plant when thinking about having an animal processed with us. Our plant always welcomes visitors. If you would like to schedule an animal for processing please think ahead. The winter and spring seasons are our busy times of the year. Slaughter dates fill up quickly and you need to make an appointment.</p>
            <br />
            <p className="">Call us Monday through Friday from 8am to 5pm to make an appointment. Our helpful staff will be glad to answer any questions you may have.</p>
            <br />
            <p className="">When bringing in an animal for slaughter, be sure to have it here by 8am the morning of slaughter. It’s always helpful if you have a list of eaters and phone numbers ready to go.</p>
          </div>
        </div>
        <div className="lg:flex flex-row">
          <div className="lg:p-10 mb-10">
            <h1 className="text-red-800 font-bold text-3xl">Slaughter</h1>
            <p>Slaughtering removes blood, hide, and inedible parts form the animal.  In beef, veal, and lamb it will account for an average loss of slightly less than half the original live weight of the animal.  The slaughter weight loss in hogs averages about one-quarter of the live weight.</p>
            <br />
            <p className="italic">EXAMPLE: If your steer weighs 750 lbs. live, it will weigh 397 – 465 lbs. dressed. (53%-62% of live weight)</p>
            <div className="border border-stone-300 rounded-md p-4 mt-4">
              <table className="w-full">
                <thead className="border-b border-stone-800">
                  <tr>
                    <td>Animal</td>
                    <td>Percentage Yeild</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-b-stone-300">
                    <td>Beef</td>
                    <td>53%-62% of Live Weight</td>
                  </tr>
                  <tr className="border-b border-b-stone-300">
                    <td>Veal</td>
                    <td>53%-58% of Live Weight</td>
                  </tr>
                  <tr className="border-b border-b-stone-300">
                    <td>Pork</td>
                    <td>67%-75% of Live Weight</td>
                  </tr>
                  <tr className="border-b border-b-stone-300">
                    <td>Lamb</td>
                    <td>48%-52% of Live Weight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:p-10">
            <h1 className="text-red-800 font-bold text-3xl">Processing</h1>
            <p>Processing is the cutting of the dressed meat into ready- to- cook portions. It accounts for another loss in weight as excess fat and bone are trimmed away. Not only does trimming make meat more appetizing, but it also eliminates extra storage space and further kitchen preparation.</p>
            <br />
            <p className="italic">EXAMPLE: If your hog weighs 145lbs. dressed, expect approximately 104lbs. – 118lbs. of eating meat after processing. (72% – 82% of dressed weight)</p>
            <div className="border border-stone-300 rounded-md p-4 mt-4">
              <table className="w-full">
                <thead className="border-b border-stone-800">
                  <tr>
                    <td>Animal</td>
                    <td>Percentage Yeild</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-b-stone-300">
                    <td>Beef</td>
                    <td>50%-65% of Dressed Weight</td>
                  </tr>
                  <tr className="border-b border-b-stone-300">
                    <td>Veal</td>
                    <td>81%-85% of Dressed Weight</td>
                  </tr>
                  <tr className="border-b border-b-stone-300">
                    <td>Pork</td>
                    <td>72%-82% of Dressed Weight</td>
                  </tr>
                  <tr className="border-b border-b-stone-300">
                    <td>Lamb</td>
                    <td>70%-90% of Dressed Weight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="py-10 lg:px-10">
          <h1 className="text-red-800 font-bold text-3xl">Beef Processing</h1>
          <h2 className="text-lg italic pb-4">Minimum Processing Fee $400</h2>
          <div>
            <ul className="list-disc">
              <li>Beef are slaughtered on Monday, Wednesday, and Thursday. Please have your animal at the plant by 8am the day of slaughter.</li>
              <li>Generally, Beef are aged between 10 and 14 days. Age time depends on fat content and fat cover.</li>
            </ul>
          </div>
          <Disclosure title="Beef Slaughter & Processing Pricing">
            <PricesList priceList={beefSlaughterProcessingPrices} />
          </Disclosure>
        </div>
        <div className="py-10 lg:px-10">
          <h1 className="text-red-800 font-bold text-3xl">Pork Processing</h1>
          <h2 className="text-lg italic pb-4">Minimum Processing Fee $400</h2>
          <div>
            <ul className="list-disc">
              <li>Hogs are slaughtered on Tuesdays. Please be sure to have your animals here by 8am the day of slaughter.</li>
              <li>Hogs are processed on Thursday of the same week and your fresh meat will be ready for pick-up on Friday.</li>
              <li>Cured and Smoked meats are usually ready for pick-up 1 1/2 weeks after your fresh.</li>
            </ul>
          </div>
          <Disclosure title="Beef Slaughter & Processing Pricing">
            <PricesList priceList={porkSlaughterProcessingPrices} />
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default CustomSlaughterSection;