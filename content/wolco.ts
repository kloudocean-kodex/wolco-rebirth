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
 {slug:"aurelia",name:"Aurelia",eyebrow:"Refined living",headline:"Elegance, considered.",description:"A collection centred on elegance, thoughtful proportions and a sense of occasion in the everyday.",image:"/media/generated-exterior-dusk.webp",imageCredit:"Concept inspiration / Design visualisation",media:"generated-exterior-dusk",alt:"Concept inspiration: a contemporary stone and timber home at dusk, created as a design visualisation"},
 {slug:"elevate",name:"Elevate",eyebrow:"Contemporary living",headline:"A fresh perspective.",description:"Contemporary living with an open outlook. Explore a confident architectural direction for the way you want to live.",image:"/media/generated-living.webp",imageCredit:"Concept inspiration / Design visualisation",media:"generated-living",alt:"Concept inspiration: a light-filled contemporary living space opening to a garden, created as a design visualisation"},
 {slug:"simplex",name:"Simplex",eyebrow:"Intentional living",headline:"Beautifully resolved.",description:"Thoughtful everyday living, with an emphasis on purposeful space and an uncomplicated sense of home.",image:"/media/generated-kitchen.webp",imageCredit:"Concept inspiration / Design visualisation",media:"generated-kitchen",alt:"Concept inspiration: a calm kitchen with oak joinery and a pale stone island, created as a design visualisation"}
];
export const preconstruction=[
  {title:"Request your detailed proposal",subtitle:"Start with a clear conversation.",detail:"Meet with your New Home Consultant at WOW Studio to discuss your home and request a detailed proposal.",who:"New Home Consultant · WOW Studio"},
  {title:"Accept your proposal",subtitle:"Confirm your next step.",detail:"Review and accept the proposal with your acceptance fee.",who:"New Home Consultant · WOW Studio"},
  {title:"New home appointment",subtitle:"Shape your vision.",detail:"Meet your New Home Consultant at WOW Studio for your new home appointment.",who:"New Home Consultant · WOW Studio"},
  {title:"Walk through & external open studio",subtitle:"Explore the exterior direction.",detail:"Walk through the external selections with an Interior Design Consultant.",who:"Interior Design Consultant · WOW Studio"},
  {title:"Plan presentation appointment",subtitle:"See the plan come together.",detail:"Attend the plan presentation appointment with your Plan Presenter Consultant.",who:"Plan Presenter Consultant · WOW Studio"},
  {title:"HIA building agreement",subtitle:"Set out the agreement.",detail:"Review the building agreement with your Project Coordinator.",who:"Project Coordinator · WOW Studio"},
  {title:"External selections & internal open studio",subtitle:"Discover the possibilities.",detail:"Return to WOW Studio for external selections and the internal open studio appointment.",who:"New Home Consultant · WOW Studio"},
  {title:"Internal selections appointment",subtitle:"Make it your own.",detail:"Explore and confirm internal selections with your New Home Consultant.",who:"New Home Consultant · WOW Studio"},
  {title:"Developer & building authority approvals",subtitle:"Navigate approvals.",detail:"The approvals team lodges applicable developer and building-authority approval requests on your behalf.",who:"Approvals team"},
  {title:"Electrical selections appointment",subtitle:"Light the way.",detail:"Meet your Lighting & Electrical Design Consultant for electrical selections.",who:"Lighting & Electrical Design Consultant"},
  {title:"Finance approval & authority to commence",subtitle:"Ready the next milestone.",detail:"Provide the required finance approval and Authority to Commence Construction (ACC), where applicable, so construction can proceed.",who:"Customer + approvals team"},
  {title:"Construction commences",subtitle:"From line to life.",detail:"With the necessary requirements met, the project moves into construction.",who:"WOLCO construction team"},
];
