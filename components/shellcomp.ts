import { html } from "uhtml"
import { OvlBaseElement } from "../OvlBaseElement"

export class ShellComp extends OvlBaseElement {
  comp1Visible: boolean
  getUI() {
    let comp1
    if (this.comp1Visible) {
      comp1 = html`<ovl-comp1></ovl-comp1>`
    }
    // DOESN'T WORK (left retainers -> possible memoryleak?)
    return html`
      <div>Shell</div>
      ${comp1}
    `
    // // WORKS with an enclosing parent div (no retainers)
    // return html`<div>
    //   <div>Shell</div>
    //   ${comp1}
    // </div> `
  }
  connectedCallback() {
    //simulating a state change which triggers a doRender...
    this.comp1Visible = true
    setTimeout(() => {
      this.comp1Visible = false
      this.doRender()
    }, 3000)
    super.connectedCallback()
  }
}
