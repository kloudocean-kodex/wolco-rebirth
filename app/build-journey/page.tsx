import type {Metadata} from "next";
import {BuilderPage} from "@/components/BuilderPage";
import {StepsJourney} from "@/components/StepsJourney";
export const metadata:Metadata={title:"12 Steps to Start Building",description:"Understand WOLCO's 12 pre-construction steps, from your detailed proposal and WOW Studio selections to construction commencement."};
export default function Page(){return <BuilderPage number="04" eyebrow="THE ROAD TO YOUR NEW HOME" title="A clear path." italic="A better beginning." description="Explore the real WOLCO 12-step pre-construction process, from proposal and personalisation through approvals and commencement.">
 <section className="steps-page"><StepsJourney/></section></BuilderPage>}