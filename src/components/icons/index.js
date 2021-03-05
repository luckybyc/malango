import React from "react"
import PropTypes from "prop-types"
import IconExternal from "./external"
import IconGitHub from "./github"
import IconLinkedin from "./linkedin"
import IconTwitter from "./twitter"
//import IconWhatsapp from "./whatsapp"

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "github":
      return <IconGitHub color={color} />
    //case "whatsapp":
     // return <IconWhatsapp color={color} />

    case "external":
      return <IconExternal color={color} />
    case "linkedin":
      return <IconLinkedin color={color} />
    case "twitter":
      return <IconTwitter color={color} />
    default:
      return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Icon
