import { Global } from "@emotion/react"
import * as React from "react"

export default () => (
  <Global
    styles={`
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        button, input {
            border: none;
            outline: none;
        }
    `}
  />
)