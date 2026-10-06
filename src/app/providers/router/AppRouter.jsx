import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '@/shared/config'
import { HomePage } from '@/pages/home'
import { PricingPage } from '@/pages/pricing'
import { AboutPage } from '@/pages/about'
import { BlogPage } from '@/pages/blog'
import { NotFoundPage } from '@/pages/not-found'
import { ScrollManager } from './ScrollManager'

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.pricing} element={<PricingPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.blog} element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
