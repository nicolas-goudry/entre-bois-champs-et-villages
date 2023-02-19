import { evaluateSync } from '@mdx-js/mdx'
import * as provider from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import remarkFrontmatter from 'remark-frontmatter'

export function toHtml(markdown) {
  return evaluateSync(markdown, { remarkPlugins: [remarkFrontmatter], ...runtime, ...provider }).default()
}

export default function Markdown({ children }) {
  return toHtml(children)
}
