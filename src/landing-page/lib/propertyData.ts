// Property data - Single source of truth
// Derived from docs/reference/property_data.md

export const property = {
  // Basic Information
  address: "3754-56 Tennyson Street",
  city: "San Diego",
  state: "California",
  zip: "92107",
  neighborhood: "Point Loma",
  apn: "449-461-07-00",
  legalDescription: "BLK 20*LOT 8",

  // Pricing
  askingPrice: 1599000,
  previousPrice: 1790000,
  priceReduction: 191000,
  priceReduced: true,
  pricePerSFLand: 286,
  pricePerSFLiving: 1190,

  // Land & Zoning
  lotSizeSF: 5595,
  usableSF: 5600,
  zoning: "RM-3-7 Multifamily",
  propertyType: "Multi-family",
  streetType: "Cul-de-sac",

  // Main House
  mainHouse: {
    yearBuilt: 1941,
    bedrooms: 2,
    bathrooms: 1,
    livingSF: 1344,
    condition: "Fully Renovated",
    features: ["Full kitchen", "Living room", "Direct courtyard access"],
    strLicense: "STR-12124L",
    registrationId: "659128",
    airbnbGrossIncome: 4000,
    isAirbnbLicensed: true,
    airbnbRevenueQ4: [5000, 4136, 4698],
  },

  // Existing ADU (Teardown)
  existingADU: {
    status: "Teardown scheduled",
    condition: "Poor - to be demolished",
    config: "1-bedroom, 1-bath small ADU",
  },

  // Development Potential
  development: {
    totalNewADUs: 8,
    unitSize: 470,
    unitType: "1 Bedroom",
    ceilingType: "Vaulted",
    marketRateUnits: 5,
    deedRestrictedUnits: 3,
    totalNewSF: 3760,
    planApprovalDate: "End of January 2025",
    totalUnitsPostDev: 9,
    totalLivingSFPostDev: 5104,
  },

  // Grandfathered Advantage
  grandfathered: {
    effectiveDate: "Summer 2025",
    change: "ADUs can no longer be built on cul-de-sac properties in San Diego",
    impact: "These 8 approved ADUs are grandfathered under previous rules",
    scarcity: "This development potential cannot be replicated on similar properties",
  },

  // Location
  location: {
    highlights: [
      "Coastal San Diego neighborhood",
      "Walking distance to beaches",
      "Strong rental demand",
      "High household incomes",
      "Limited new development (built-out area)",
    ],
    amenities: [
      { name: "Liberty Station", description: "Food hall, Public Market, coffee shops, breweries", time: "5 min" },
      { name: "Sunset Cliffs", description: "Iconic sunset views", time: "10 min" },
      { name: "Ocean Beach", description: "Beach, pier, farmers market", time: "10 min" },
      { name: "Downtown San Diego", description: "Little Italy, Gaslamp, Petco Park", time: "10-12 min" },
      { name: "San Diego International Airport", description: "", time: "10 min" },
      { name: "La Jolla", description: "", time: "15 min" },
      { name: "Coronado", description: "", time: "15 min" },
    ],
    driveTimes: {
      oceanBeach: "5 min",
      downtown: "15 min",
      airport: "10 min",
      laJolla: "20 min",
    },
    coordinates: {
      lat: 32.7417,
      lng: -117.2258,
    },
  },

  // Contacts
  contacts: [
    {
      name: "Andrew Erickson",
      phone: "(619) 322-3395",
      email: "Andrew@TheNextWaveGroup.com",
    },
    {
      name: "Marcelo Valdez",
      phone: "(858) 204-1337",
      email: "Marcelo@TheNextWaveGroup.com",
    },
  ],
  company: "Next Wave Group",
  marketingDescription: "The property is a two-bedroom, one-bath primary home in front and a one-bedroom, one-bath small ADU in the back. The property is currently fully furnished and can be sold with the furniture in place. This makes it easy for someone to rent out that property on a short-term basis while they plan around the build. Opportunity knocks on this buildable lot in Point Loma with tons of upside potential! Property will be delivered with approved plans for 8 additional units. Final approval expected by late January 2025. Perfect for homeowners and multi-family investors alike. Live, develop and rent all on this incredible property. The existing home features modern finishes, a spacious layout, and a private courtyard. Twin doors let in an abundance of natural light and open onto the inviting patio that is perfect for entertaining or your morning cup of coffee. Huge lot with endless potential! The approved plans for 8 ADU units are expected to be ready to pull permits within weeks. Don't miss the opportunity to build your future today! Great location convenient to Point Loma beaches, Liberty Station, and local dining.",
  // Rental Analysis
  rentalAnalysis: {
    averageMarketRent: 2500, // Average of verified local 1BR comps
    projectedMonthlyGrossIncome: 20000, // 8 units * $2,500
    comps: [
      {
        address: "3042 Newell St",
        rent: 3250,
        beds: 1,
        sqft: 494,
        rentPerSqft: 6.58,
        status: "Available",
        url: "https://www.zillow.com/homedetails/3042-Newell-St-San-Diego-CA-92106/400818526_zpid/"
      },
      {
        address: "3982 Valeta St #280",
        rent: 3200,
        beds: 1,
        sqft: 750,
        rentPerSqft: 4.27,
        status: "Listed",
        url: "https://www.zillow.com/homedetails/3982-Valeta-St-UNIT-280-San-Diego-CA-92110/16965761_zpid/"
      },
      {
        address: "4320 Niagara Ave #B",
        rent: 3000,
        beds: 1,
        sqft: 600,
        rentPerSqft: 5.00,
        status: "Available",
        url: "https://www.zillow.com/homedetails/4320-Niagara-Ave-B-San-Diego-CA-92107/458718440_zpid/"
      },
      {
        address: "3040 Newell St",
        rent: 2450,
        beds: 1,
        sqft: 422,
        rentPerSqft: 5.81,
        status: "Available",
        url: "https://www.zillow.com/homedetails/3040-Newell-St-San-Diego-CA-92106/457897860_zpid/"
      },
      {
        address: "2380 Rosecrans St",
        rent: 2250,
        beds: 1,
        sqft: 400,
        rentPerSqft: 5.63,
        status: "Active",
        url: "https://www.zillow.com/homedetails/2380-Rosecrans-St-San-Diego-CA-92106/16967509_zpid/"
      },
      {
        address: "2551 Worden St",
        rent: 2200,
        beds: 1,
        sqft: 550,
        rentPerSqft: 4.00,
        status: "Current",
        url: "https://www.realtor.com/realestateandhomes-detail/2551-Worden-St_San-Diego_CA_92110_M94073-77443"
      },
      {
        address: "3846 Atascadero Dr",
        rent: 2200,
        beds: 1,
        sqft: 500,
        rentPerSqft: 4.40,
        status: "Active",
        url: "https://www.zillow.com/homedetails/3846-Atascadero-Dr-San-Diego-CA-92107/16964639_zpid/"
      }
    ]
  }
};

export const highlights = [
  {
    icon: "home",
    title: "8 Approved ADUs",
    description: "Plans locked in for 8 new 1BR units with vaulted ceilings",
  },
  {
    icon: "shield",
    title: "Grandfathered Rights",
    description: "Approved before Summer 2025 cul-de-sac ban",
  },
  {
    icon: "dollar",
    title: "$1,599,000",
    description: "Price reduced $191K — residential value alone, ADU plans free",
  },
  {
    icon: "map",
    title: "Point Loma",
    description: "Prime coastal San Diego location",
  },
  {
    icon: "building",
    title: "9 Total Units",
    description: "3BR house + 8 new ADUs post-development",
  },
  {
    icon: "dollar",
    title: "$4,000/mo Airbnb",
    description: "Currently licensed and grossing income",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
