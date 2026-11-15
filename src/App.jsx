import { Navbar, SiteLayout } from '@/components/layout'
import { About, Expertise, Hero, Philosophy } from '@/sections'

// The Footer fills SiteLayout's `footer` slot once built.
// Homepage sections live in src/sections and are composed here, in order.
export default function App() {
  return (
    <SiteLayout header={<Navbar />}>
      <Hero />
      <Philosophy />
      <About />
      <Expertise />
    </SiteLayout>
  )
}
