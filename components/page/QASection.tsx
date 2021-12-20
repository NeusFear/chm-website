import Disclosure from "../utility/Disclosure";

const QASection = () => {
    return (
        <div className="bg-neutral-200 w-screen flex flex-col place-items-center py-10" id="inspection">
            <div className="container bg-neutral-100 rounded-md p-10 shadow-lg">
                <h1 className="text-4xl mb-4">Inspection and Regulations</h1>
                <Disclosure title="What is meat Inspection?">
                    <p>There are 2 types of meat inspection, state and federal.  State inspection is regulated by the Oklahoma Department of Agriculture.  Federal inspection is regulated by the United States Department of Agriculture.</p>
                </Disclosure>
                <Disclosure title="Who Regulates You?">
                    <p>We are a state plant.  We are regulated by the Oklahoma Department of Agriculture.</p>
                </Disclosure>
                <Disclosure title="What does it mean to be inspected?">
                    <p>A plant can carry inspection on a number of things, such as slaughter, processing, and ready to eat.  If a plant goes under inspection an inspector is assigned to that plant.  Inspectors are there to monitor cleanliness, see that all regulatory requirements are being met at that facility, all the while maintaining good records to ensure public safety.</p>
                    <br />
                    <p>In the interest of public safety, inspection is required to sell a product wholesale.  Example:  If you owned a restaurant and you wanted to sell steaks that were processed locally,  you would need to buy your product from a facility that was inspected for processing (purchased from a wholesaler).  You could then cook your inspected product and sell it at the retail level.  If you owned a meat shop and wanted to sell cattle raised on your ranch, you would need to slaughter them at an inspected slaughter operation.  You could then take your inspected carcasses to your shop for further processing and retail sales.</p>
                </Disclosure>
                <Disclosure title="Can anyone be state inspected?">
                    <p>Yes and No.  In order to be inspected a facility must meet certain criteria set forth by the Department of Agriculture.   First the facility will be visited by a regulatory official to assess the cleanliness of the facilities and address any issues there may be.  Next, the facility must develop a HACCP system to keep everything in check.</p>
                    <br />
                    <p>In the interest of public safety, inspection is required to sell a product wholesale.  Example:  If you owned a restaurant and you wanted to sell steaks that were processed locally,  you would need to buy your product from a facility that was inspected for processing (purchased from a wholesaler).  You could then cook your inspected product and sell it at the retail level.  If you owned a meat shop and wanted to sell cattle raised on your ranch, you would need to slaughter them at an inspected slaughter operation.  You could then take your inspected carcasses to your shop for further processing and retail sales.</p>
                </Disclosure>
                <Disclosure title="What is HACCP?">
                    <p>HACCP is an acronym for Hazard Analysis and Critical Control Points.  HACCP is a plan develop by a facility to find any food safety hazards in their process and set up control measures to insure they do not occur.</p>
                </Disclosure>
                <Disclosure title="Aren't all meat shops inspected?">
                    <p>Not necessarily.  All food related facilities are reviewed by the health department for cleanliness, proper cooling temperatures, cooking temperatures, and etc.  Some even receive periodical reviews from the Department of Agriculture.  To meet the requirements for inspection you must have and maintain a HACCP program.</p>
                </Disclosure>
            </div>
        </div>
    );
}

export default QASection;