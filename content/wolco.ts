/** WOLCO-controlled brochure facts transcribed 14 Oct 2026. Verify terms before production. */
export const wolco = {
  brand:"WOLCO HOMES",
  line:"We don't build ordinary. We build extraordinary.",
  phoneDisplay:"1300 16 36 66",
  phoneHref:"tel:1300163666",
  address:["9/28 Longford Road","Epping VIC 3076"],
  planning:"/contact/",
} as const;
export type Collection = {slug:string;name:string;eyebrow:string;headline:string;description:string;image:string;imageCredit:string;};
export const collections:Collection[]=[
 {slug:"aurelia",name:"Aurelia",eyebrow:"01 / REFINED LIVING",headline:"Designed to feel extraordinary.",description:"The Aurelia collection explores elegance, considered proportions and thoughtful spaces. Ask our consultants for current plans, available facades and inclusions.",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82",imageCredit:"Design mood image — not a verified WOLCO project."},
 {slug:"elevate",name:"Elevate",eyebrow:"02 / CONTEMPORARY LIVING",headline:"Contemporary living, elevated.",description:"The Elevate collection explores open modern living with a confident architectural presence. Final designs and specifications are confirmed with WOLCO.",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=82",imageCredit:"Design mood image — not a verified WOLCO project."},
 {slug:"simplex",name:"Simplex",eyebrow:"03 / INTENTIONAL LIVING",headline:"Simplicity is a design decision.",description:"The Simplex collection focuses on well-resolved everyday living and intelligent use of space. Request the current floorplans and specifications.",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=82",imageCredit:"Design mood image — not a verified WOLCO project."}
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
