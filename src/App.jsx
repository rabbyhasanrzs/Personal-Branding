import { Navbar, SiteLayout } from '@/components/layout'
import FoundationPreview from '@/dev/FoundationPreview'

// The Footer fills SiteLayout's `footer` slot once built.
// Homepage sections will live in src/sections and be composed here.
export default function App() {
  return (
    <SiteLayout header={<Navbar />}>
      <FoundationPreview />
    </SiteLayout>
  )
}
