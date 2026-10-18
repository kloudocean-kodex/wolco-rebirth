import type {Metadata} from "next";
import {BuilderPage} from "@/components/BuilderPage";
import {StepsJourney} from "@/components/StepsJourney";
export const metadata:Metadata={title:"12 Steps to Start Building",description:"Understand WOLCO's 12 pre-construction steps, from your detailed proposal and WOW Studio selections to construction commencement."};
export default function Page(){return <BuilderPage number="04" eyebrow="THE ROAD TO YOUR NEW HOME" title="A clear path." italic="A considered beginning." description="From the first proposal to the moment construction begins. Explore the twelve steps in WOLCO's pre-construction guide, with space to understand each conversation and appointment along the way.">
 <section className="steps-page"><StepsJourney/></section></BuilderPage>}
