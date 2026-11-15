import { SiteLayout } from '@/components/layout'
import FoundationPreview from '@/dev/FoundationPreview'

// Navbar and Footer plug into SiteLayout's `header` / `footer` slots next.
// Homepage sections will live in src/sections and be composed here.
export default function App() {
  return (
    <SiteLayout>
      <FoundationPreview />
    </SiteLayout>
  )
}
