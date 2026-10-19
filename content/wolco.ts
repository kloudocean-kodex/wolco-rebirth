/** WOLCO-controlled brochure facts transcribed 14 Oct 2026. Verify terms before production. */
export const wolco = {
  brand:"WOLCO HOMES",
  line:"We don't build ordinary. We build extraordinary.",
  phoneDisplay:"1300 16 36 66",
  phoneHref:"tel:1300163666",
  email:"wolcohomes@gmail.com",
  address:["9/28 Longford Road","Epping VIC 3076"],
  planning:"/contact/",
} as const;
export type Collection = {slug:string;name:string;eyebrow:string;headline:string;description:string;image:string;imageCredit:string;media:string;alt:string;};
export const collections:Collection[]=[
 {slug:"aurelia",name:"Aurelia",eyebrow:"Refined living",headline:"Elegance, considered.",description:"A collection centred on elegance, thoughtful proportions and a sense of occasion in the everyday.",image:"/media/wolco-courtyard-arrival.webp",imageCredit:"Concept inspiration / Design visualisation",media:"wolco-courtyard-arrival",alt:"Concept inspiration: a brick courtyard home with a charcoal pitched roof and timber entry, created as a design visualisation"},
 {slug:"elevate",name:"Elevate",eyebrow:"Contemporary living",headline:"A fresh perspective.",description:"Contemporary living with an open outlook. Explore a confident architectural direction for the way you want to live.",image:"/media/wolco-courtyard-dwell.webp",imageCredit:"Concept inspiration / Design visualisation",media:"wolco-courtyard-dwell",alt:"Concept inspiration: a timber-ceiling living room with a brick hearth, garnet seating and courtyard garden, created as a design visualisation"},
 {slug:"simplex",name:"Simplex",eyebrow:"Intentional living",headline:"Beautifully resolved.",description:"Thoughtful everyday living, with an emphasis on purposeful space and an uncomplicated sense of home.",image:"/media/wolco-courtyard-gather.webp",imageCredit:"Concept inspiration / Design visualisation",media:"wolco-courtyard-gather",alt:"Concept inspiration: a courtyard kitchen with timber cabinetry and a squared pale stone island, created as a design visualisation"}
];
export const preconstruction=[
  {title:"New Home Selection",subtitle:"Pre-site / choose a direction.",detail:"Explore floor plans, facade options and possible customisations with the WOLCO team.",who:"Published guide · pre-site"},
  {title:"Prelims Documentation",subtitle:"Pre-site / review the early documents.",detail:"Review preliminary plans and the documents that take your home one step closer.",who:"Published guide · pre-site"},
  {title:"Contract Review",subtitle:"Pre-site / understand the agreement.",detail:"The guide describes building-contract review and signing as the next point in the journey.",who:"Published guide · pre-site"},
  {title:"Let’s Personalise",subtitle:"Pre-site / bring selections together.",detail:"Consider interior and exterior colour selections, and keep your selection record for reference.",who:"Published guide · pre-site"},
  {title:"Permits",subtitle:"Pre-site / prepare for approvals.",detail:"Once documentation is finalised, permit approvals move into the next stage for the project.",who:"Published guide · pre-site"},
  {title:"Building Supervisor Meeting",subtitle:"On site / establish the connection.",detail:"Meet the building supervisor before construction and understand how project updates will be shared.",who:"Published guide · on site"},
  {title:"Base Stage",subtitle:"On site / prepare the block.",detail:"The published guide describes preparation, excavation, underground connections and a slab inspection at this stage.",who:"Published guide · on site"},
  {title:"Frame Stage",subtitle:"On site / the structure takes shape.",detail:"The guide places the frame stage here, with its stated inspection before the next phase.",who:"Published guide · on site"},
  {title:"Lockup Stage",subtitle:"On site / enclose the home.",detail:"The guide describes completed brickwork, roofing, windows and temporary external doors at lockup.",who:"Published guide · on site"},
  {title:"Fixings Stage",subtitle:"On site / finish the details.",detail:"The published guide describes the installation of skirting, cabinetry and cupboards, with painting beginning.",who:"Published guide · on site"},
  {title:"Final Stage",subtitle:"On site / prepare for handover.",detail:"The guide sets out practical-completion review and agreement-specific installations before the handover date.",who:"Published guide · on site"},
  {title:"Handover",subtitle:"On site / receive your home.",detail:"The published journey concludes its on-site stages with handover of the finished home.",who:"Published guide · on site"},
];
