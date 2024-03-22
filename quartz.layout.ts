import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: {url: "https://github.com/gaggioaxel/MyKnowledgeGraph", image:"https://raw.githubusercontent.com/gaggioaxel/MyKnowledgeGraph/67874a43997865bc35215011a1c8e90065f0292b/quartz/static/github.png"},
      LinkedIn: {url:"https://www.linkedin.com/in/gabriele-romano/", image:"https://raw.githubusercontent.com/gaggioaxel/MyKnowledgeGraph/67874a43997865bc35215011a1c8e90065f0292b/quartz/static/linkedin.png"},
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.Test(),
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
