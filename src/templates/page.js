import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const TemplatePage = (props) => {
  const {
    data: {
      page: {
        name,
        cover,
        childMarkdownRemark: { html },
      },
    },
  } = props

  console.log(props)

  return (
    <>
      <Link to='/'>
        <button>{'Home'}</button>
      </Link>
      <h1>{name}</h1>
      {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
      {cover && <GatsbyImage image={getImage(cover.image)} title={cover.title} alt={cover.alt} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default TemplatePage

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      cover {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      childMarkdownRemark {
        html
      }
    }
  }
`
