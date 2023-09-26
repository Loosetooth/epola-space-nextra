import { Callout as OriginalCallout } from "nextra-theme-docs"

export const Callout = (props) => {
  return <div style={{textAlign: "left"}}>
    <OriginalCallout {...props}>
      {props.children}
    </OriginalCallout>
  </div>
}