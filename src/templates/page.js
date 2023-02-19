import { Button, Divider, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import { Link as GatsbyLink, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import rehypeReact from 'rehype-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a({ href, children }) {
      return (
        <Link as={GatsbyLink} href={href} to={href} target={href.startsWith('#') ? '_self' : '_blank'}>
          {children}
        </Link>
      )
    },
    h1({ children }) {
      return (
        <Heading as='h1' size='3xl'>
          {children}
        </Heading>
      )
    },
    h2({ children }) {
      return (
        <Heading as='h2' size='2xl'>
          {children}
        </Heading>
      )
    },
    h3({ children }) {
      return (
        <Heading as='h3' size='xl'>
          {children}
        </Heading>
      )
    },
    h4({ children }) {
      return (
        <Heading as='h4' size='lg'>
          {children}
        </Heading>
      )
    },
    h5({ children }) {
      return (
        <Heading as='h5' size='md'>
          {children}
        </Heading>
      )
    },
    h6({ children }) {
      return (
        <Heading as='h6' size='sm'>
          {children}
        </Heading>
      )
    },
    strong({ children }) {
      return <Text as='strong'>{children}</Text>
    },
    em({ children }) {
      return <Text as='em'>{children}</Text>
    },
    hr() {
      return <Divider />
    },
    ol({ children }) {
      return (
        <p>
          <OrderedList>{children}</OrderedList>
        </p>
      )
    },
    ul({ children }) {
      return (
        <p>
          <UnorderedList>{children}</UnorderedList>
        </p>
      )
    },
    li({ children }) {
      return <ListItem>{children}</ListItem>
    },
    p({ children }) {
      return <p>{children}</p>
    },
  },
}).Compiler

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      cover {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`

export default function PageTemplate({
  data: {
    page: {
      name,
      cover,
      childMarkdownRemark: { htmlAst },
    },
  },
}) {
  return (
    <>
      <GatsbyLink to='/'>
        <Button>Home</Button>
      </GatsbyLink>
      <Heading as='h1' size='3xl'>{name}</Heading>
      {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
      {cover && <GatsbyImage image={getImage(cover.image)} title={cover.title} alt={cover.alt} />}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <div>{renderAst(htmlAst)}</div>
    </>
  )
}
