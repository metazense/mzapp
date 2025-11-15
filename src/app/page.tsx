import TopBanner from '@/components/TopBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CustomerLogos from '@/components/CustomerLogos'
import EnterpriseMappingSection from '@/components/EnterpriseMappingSection'
import InfoSections from '@/components/InfoSections'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <CustomerLogos />
      <EnterpriseMappingSection />
      <InfoSections />
      <Solutions />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  )
}
