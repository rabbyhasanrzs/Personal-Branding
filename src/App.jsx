import { Footer, Navbar, SiteLayout } from '@/components/layout'
import { About, Contact, Education, Expertise, FeaturedWork, Hero, Philosophy, Research } from '@/sections'

// Homepage sections live in src/sections and are composed here, in order.
export default function App() {
  return (
    <SiteLayout header={<Navbar />} footer={<Footer />}>
      <Hero />
      <Philosophy />
      <About />
      <Expertise />
      <FeaturedWork />
      <Research />
      <Education />
      <Contact />
    </SiteLayout>
  )
}
