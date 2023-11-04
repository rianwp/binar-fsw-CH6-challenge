import CTABannerSection from "../components/LandingPage/CTABanner/CTABannerSection"
import FAQSection from "../components/LandingPage/FAQ/FAQSection"
import OurServicesSection from "../components/LandingPage/OurServices/OurServicesSection"
import TestimonySection from "../components/LandingPage/Testimony/TestimonySection"
import WhyUsSection from "../components/LandingPage/WhyUs/WhyUsSection"

const LandingPage = () => {
	return (
		<>
			<OurServicesSection />
			<WhyUsSection />
			<TestimonySection />
			<CTABannerSection />
			<FAQSection />
		</>
	)
}

export default LandingPage
