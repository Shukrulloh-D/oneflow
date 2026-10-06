import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { PageStub } from '@/shared/ui'

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main>
        <PageStub title="404" text="This page does not exist. Use the menu to go back." />
      </main>
      <Footer />
    </>
  )
}
