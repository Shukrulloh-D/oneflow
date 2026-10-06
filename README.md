# Oneflow landing (React + Vite + FSD)

## Run
npm install
npm run dev        # http://localhost:5173
npm run build      # check production build

## Images
All images live in src/shared/assets/images/. The files there are 4x4 px placeholders.
Replace each one with your Figma export (same file name). Video: public/video/oneflow-demo.mp4

## FSD layers (import only downwards)
app -> pages -> widgets -> features -> entities -> shared
- app       providers (router), global styles, entry component
- pages     home, pricing, about, blog, not-found (pages only compose widgets)
- widgets   big page blocks (header, hero, footer ...)
- features  user actions (mobile menu, tabs switch, slider, subscribe form ...)
- entities  business things (company, testimonial, resource, integration, product-tab, promo-card)
- shared    ui kit, lib (helpers + hooks), config, api stub, assets
Every slice has index.js (public API) and segments: ui / model / api / lib.

## Team split
Lead:    app, shared, pages/home, widgets header, hero, features-tabs, press-play,
         platform-features, testimonials; features mobile-menu, tabs-switch, slider, play-video;
         entities product-tab, testimonial
Partner: widgets client-logos, smart-contracts, believe-your-eyes, integrations, resources,
         more-from-oneflow, footer; features request-demo, try-free, subscribe-form,
         change-language; entities company, resource, integration, promo-card;
         pages pricing, about, blog, not-found
