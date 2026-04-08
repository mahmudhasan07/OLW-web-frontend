import ServiceSection from "@/components/Service/Service";
import Tools from "@/components/Tools/Tools";
import Started from "@/components/Started/Started";
import FAQSection from "@/components/FAQ/FAQ";
import ClientReview from "@/components/ClientReview/ClientReview";
import Question from "@/components/Question/Question";
import Pricing from "@/components/Pricing/Pricing";
import TrustIndustries from "@/components/TrustIndustries/TrustIndustries";
import Banner from "@/components/banner/Banner";
export default function Page() {
    return (
        <section>
            <div id="banner">
                <Banner></Banner>
            </div>
            <div id="trust-industries">
                <TrustIndustries></TrustIndustries>
            </div>
            <div id="services">
                <ServiceSection></ServiceSection>
            </div>
            <div id="pricing">
                <Pricing></Pricing>
            </div>
            <div id="tools">
                <Tools></Tools>
            </div>
            <div id="started">
                <Started></Started>
            </div>
            <div id="client-review">
                <ClientReview></ClientReview>
            </div>
            
            <div id="faq">
               <FAQSection></FAQSection>
            </div>
            <div id="question">
                <Question></Question>
            </div>
            {/* <div>
                <Banner></Banner>
            </div>
            <div>
                <SubBrand></SubBrand>
            </div>
            <div>
                <ChooseNexus></ChooseNexus>
            </div>
            <div>
                <Build></Build>
            </div>
            <div>
                <ToolingMethod></ToolingMethod>
            </div>
            <div>
                <Capabilities></Capabilities>
            </div>
            <div id="work">
                <Work></Work>
            </div>
            <div id="faq">
                <FAQ />
            </div>
            <div id="touch">
                <Touch />
            </div> */}

        </section>
    );
}