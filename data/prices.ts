export type RetailPriceType = { item: string, price: number, unit: string }

export const retailBeefPrices: RetailPriceType[] = [
  { 'item': "T-Bone", 'price': 13.95, 'unit': "Per Lb." },
  { 'item': "NY Strip", 'price': 13.95, 'unit': "Per Lb." },
  { 'item': "Tenderloin (Whole)", 'price': 22.95, 'unit': "Per Lb." },
  { 'item': "Tenderloin (Steaks)", 'price': 29.95, 'unit': "Per Lb." },
  { 'item': "Ribeye", 'price': 14.95, 'unit': "Per Lb." },
  { 'item': "Sirloin", 'price': 9.95, 'unit': "Per Lb." },
  { 'item': "Cubed Steak", 'price': 6.09, 'unit': "Per Lb." },
  { 'item': "Short Ribs", 'price': 5.99, 'unit': "Per Lb." },
  { 'item': "Stew Meat", 'price': 6.99, 'unit': "Per Lb." },
  { 'item': "Boneless Arm Roast", 'price': 6.49, 'unit': "Per Lb." },
  { 'item': "Flank Steak", 'price': 11.99, 'unit': "Per Lb." },
  { 'item': "Skirt Steak", 'price': 8.99, 'unit': "Per Lb." },
  { 'item': "Boneless Chuck Roast", 'price': 6.49, 'unit': "Per Lb." },
  { 'item': "Boneless Rump Roast", 'price': 6.49, 'unit': "Per Lb." },
  { 'item': "Tri-Tip Roast", 'price': 6.49, 'unit': "Per Lb." },
  { 'item': "Brisket", 'price': 4.99, 'unit': "Per Lb." },
  { 'item': "Beef Bacon", 'price': 7.49, 'unit': "Per Lb." },
  { 'item': "Oxtail", 'price': 6.99, 'unit': "Per Lb." },
  { 'item': "Lean Meat", 'price': 3.99, 'unit': "Per Lb." },
  { 'item': "Tongue", 'price': 6.99, 'unit': "Per Lb." },
  { 'item': "Ground Round", 'price': 6.09, 'unit': "Per Lb." },
  { 'item': "Ground Chuck", 'price': 5.79, 'unit': "Per Lb." },
  { 'item': "Ground Chuck Patties", 'price': 5.99, 'unit': "Per Lb." },
  { 'item': "Dog Bones", 'price': -1, 'unit': "Per Lb." }
]

export const sectionBeefPrices: RetailPriceType[] = [
  { 'item': "Side / Quarter", 'price': 4.69, 'unit': "Per Pound Figured on a 300 Pound Dressed Weight" },
  { 'item': "Fore Quarter", 'price': 4.49, 'unit': "Per Pound Figured on a 150 Pound Dressed Weight" },
  { 'item': "Hind Quarter", 'price': 4.99, 'unit': "Per Pound Figured on a 150 Pound Dressed Weight" }
]

export const retailPorkPrices: RetailPriceType[] = [
  { 'item': "Pork Chops", 'price': 3.79, 'unit': "Per Lb." },
  { 'item': "Pork Steak", 'price': 2.89, 'unit': "Per Lb." },
  { 'item': "Tenderloin", 'price': 4.99, 'unit': "Per Lb." },
  { 'item': "Spare Ribs", 'price': 2.99, 'unit': "Per Lb." },
  { 'item': "Baby Backs", 'price': 4.99, 'unit': "Per Lb." },
  { 'item': "Hot Sausage", 'price': 3.89, 'unit': "Per Lb." },
  { 'item': "Regular Sausage", 'price': 3.89, 'unit': "Per Lb." },
  { 'item': "Ground Pork", 'price': 3.49, 'unit': "Per Lb." },
  { 'item': "Boneless Loin Roast", 'price': 3.79, 'unit': "Per Lb." },
  { 'item': "Boneless Chops", 'price': 4.19, 'unit': "Per Lb." },
  { 'item': "Boneless Country Ribs", 'price': 2.89, 'unit': "Per Lb." },
  { 'item': "Butt Roast", 'price': 2.69, 'unit': "Per Lb." },
  { 'item': "Bacon", 'price': 7.49, 'unit': "Per Lb." },
  { 'item': "Bacon Ends", 'price': 0.99, 'unit': "Per Lb." },
  { 'item': "Fresh Ham", 'price': 2.69, 'unit': "Per Lb." },
  { 'item': "Smoked Ham", 'price': 2.99, 'unit': "Per Lb." }
]

export const sectionPorkPrices: RetailPriceType[] = [
  { 'item': "Half or Whole", 'price': 3.49, 'unit': "Per Pound Figured on a 75 Pound Take Home Weight" },
  { 'item': "Curing", 'price': 1.05, 'unit': "Per Pound Extra for Curing and Smoking" }
]

export const retailPoultryPrices: RetailPriceType[] = [
  { 'item': "Boneless Chicken Breasts", 'price': 3.79, 'unit': "Per Lb." },
  { 'item': "Whole Chicken", 'price': 1.89, 'unit': "Per Lb." }
]

export const beefSlaughterProcessingPrices: RetailPriceType[] = [
  { 'item': "Slaughter Fee", 'price': 75, 'unit': "Per Animal" },
  { 'item': "Processing Fee", 'price': 1.05, 'unit': "Per Lb. of Dressed Weight" },
  { 'item': "Make Patties", 'price': 0.45, 'unit': "Per Lb." },
  { 'item': "Split into Halfes", 'price': 3.00, 'unit': "Per Half" },
  { 'item': "Divide Half in Half", 'price': 5.00, 'unit': "Per Quarter" },
  { 'item': "Cut Stew Meat", 'price': 0.50, 'unit': "Per Lb." },
  { 'item': "Bone and Tenderize Round Steaks", 'price': 3.00, 'unit': "Per Half" },
  { 'item': "Make Cubed Steaks", 'price': 3.00, 'unit': "Per Half" },
  { 'item': "Bone out Prime Rib", 'price': 5.00, 'unit': "Per Half" },
  { 'item': "Bone out Loin", 'price': 10.00, 'unit': "Per Half" }
]

export const porkSlaughterProcessingPrices: RetailPriceType[] = [
  { 'item': "Slaughter Fee", 'price': 50.00, 'unit': "350 Lbs. or less" },
  { 'item': "Slaughter Fee", 'price': 60.00, 'unit': "351 Lbs. or more" },
  { 'item': "Processing Fee", 'price': 1.05, 'unit': "Per Lb. of Dressed Weight" },
  { 'item': "Cure", 'price': 1.05, 'unit': "Per Pound Cured" },
  { 'item': "Sausage", 'price': 0.25, 'unit': "Per Pound Made" }
]
