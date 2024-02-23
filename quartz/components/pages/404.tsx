import { i18n } from "../../i18n"
import { pathToRoot } from "../../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function NotFound({ fileData, cfg }: QuartzComponentProps) {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir} style={{ fontSize: "larger" }}>{i18n(cfg.locale).pages.error.getBackHome}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
