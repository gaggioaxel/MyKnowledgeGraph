import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  platforms: Record<string, {url: string; image: string}>
  creator: string
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const platforms = opts?.platforms ?? []
    const creator = opts?.creator ?? "not set"
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <p>
        {i18n(cfg.locale).components.footer.by}: {creator}
        </p>
        <ul>
          {Object.entries(platforms).map(([text, link]) => (
            <li style={{ verticalAlign: 'middle', display: 'inline-block', marginRight: '20px' }}>
              <a href={link.url}>{text} 
              {link.image && (
              <>
              <span style={{ marginRight: '8px' }} />
              <img src={link.image} alt={`${text} logo`} 
              style={{  width: '2em', 
                        height: '2em',
                        verticalAlign: '-95%', 
                    }}/>
              </>
              )}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
