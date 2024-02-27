import { QuartzComponentConstructor, QuartzComponentProps, QuartzComponent } from "./types"
// @ts-ignore
import script from "./scripts/mycomponent.inline"
 
const YourComponent: QuartzComponent = ({ fileData, displayClass, cfg, ctx }: QuartzComponentProps) => {
  //if (fileData.slug == "index"){  console.log(fileData.htmlAst?.children);}
  return (
    <p> 
      <button id="btn">{fileData.slug}</button>
      {fileData.text} 
    </p>
  )
}
 
YourComponent.afterDOMLoaded = script

export default (() => YourComponent) satisfies QuartzComponentConstructor