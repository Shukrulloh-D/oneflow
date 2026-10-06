import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { PageStub } from '@/shared/ui'

export function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageStub title="Blog" />
      </main>
      <Footer />
    </>
  )
}
