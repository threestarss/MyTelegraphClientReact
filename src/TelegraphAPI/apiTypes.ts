import { ElementType } from 'react'

export type ArticleNode = 'string' | ArticleNodeElement
export interface ArticleNodeElement {
  tag: ElementType;
  attrs?: {
    href?: string
    src?: string
  }
  children?: Array<ArticleNode>
}

export interface Page {
  path: string,
  url: string,
  title: string,
  description: string,
  author_name?: string,
  author_url?: string,
  image_url?: string,
  content?: Array<ArticleNode>,
  views: number,
  can_edit?: boolean
}

export interface PageList {
  total_count: number,
  pages: Array<Page>
}

export interface Account {
  short_name: string,
  author_name: string,
  author_url: string,
  access_token?: string,
  auth_url?: string,
  page_count?: number
}