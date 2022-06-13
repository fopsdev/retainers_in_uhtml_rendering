import { html, render } from "uhtml"
import { Comp1 } from "./components/comp1"
import { ShellComp } from "./components/shellcomp"

console.log("start")

customElements.define("ovl-shell", ShellComp)
customElements.define("ovl-comp1", Comp1)

render(document.getElementById("app"), html`<ovl-shell></ovl-shell>`)
