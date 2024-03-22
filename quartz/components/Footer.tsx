import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

/*interface Options {
  links: Record<string, string>
}*/
interface Options {
  links: Record<string, LinkInfo>
}

interface LinkInfo {
  url: string;
  image?: string;
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <p>
        {i18n(cfg.locale).components.footer.by}: Gabriele Romano
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link.url}>{text} 
              {link.image && (
              <>
              <span style={{ marginRight: '3px' }} />
              <img src={link.image} alt={`${text} logo`} 
              style={{  width: '64px', 
                        height: '64px',
                        verticalAlign: 'middle', 
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

/*export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {i18n(cfg.locale).components.footer.by}{": Gabriele Romano"}
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }*/

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
