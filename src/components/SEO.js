import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const SEO = () => {
  const { title, description } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="es" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <title>{title}</title>
    </Helmet>
  )
}

export default SEO
