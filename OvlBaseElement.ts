import { render } from "uhtml"

export class OvlBaseElement extends HTMLElement {
  getUI() {
    return undefined
  }
  doRender() {
    let res = this.getUI()
    render(this, res)
  }
  connectedCallback() {
    //initial render of the comp
    this.doRender()
  }
  disconnectedCallback() {
    console.log("disconnect", this.tagName)
  }
}
