# Oneflow site (finished version)

    npm install
    npm run dev        open http://localhost:5173
    npm run build      check that the build works

Images: `src/shared/images/` has tiny placeholder png files. Replace them with your Figma
exports (same file names). Video: put `oneflow-demo.mp4` in the `public/video/` folder.

## Folders
    src/
      app/         App.jsx and global.css (colors, fonts, .container)
      pages/home/  HomePage.jsx, data.js, and sections/ (every section: .jsx + .css)
      widgets/     header, footer          (big blocks, can be used on many pages)
      features/    subscribe-form, language-switch    (one action of the user)
      entities/    testimonial, resource             (a card and its data)
      shared/      ui (Button, Logo, Icon), lib, config, images

Rule: a folder can import only from the folders below it in this list:
app > pages > widgets > features > entities > shared
(for example shared never imports from widgets)

`@` in imports means the `src` folder: `@/shared/ui/Button` = `src/shared/ui/Button`.
