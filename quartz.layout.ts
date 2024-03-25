import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    platforms: {
      GitHub:   { url: "https://github.com/gaggioaxel/MyKnowledgeGraph", 
                  image:"https://raw.githubusercontent.com/gaggioaxel/MyKnowledgeGraph/v4/quartz/static/github.png" },
      LinkedIn: { url: "https://www.linkedin.com/in/gabriele-romano", 
                  image:"https://raw.githubusercontent.com/gaggioaxel/MyKnowledgeGraph/v4/quartz/static/linkedin.png" },
      Instagram:{ url: "https://www.instagram.com/gaggioaxel", 
                  image:"https://raw.githubusercontent.com/gaggioaxel/MyKnowledgeGraph/v4/quartz/static/instagram.png" }
    },
    creator: "Gabriele Romano",
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    //Component.NeuralNetwork(),
  ],
  left: [
    Component.TitleAndDarkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.TitleAndDarkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
