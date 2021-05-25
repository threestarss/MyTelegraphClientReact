export type Node = 'string' | NodeElement
export interface NodeElement {
  tag: string;
  attrs?: {
    href?: string
    src?: string
  }
  children?: Array<Node>
}

export interface Page {
  path: string,
  url: string,
  title: string,
  description: string,
  author_name?: string,
  author_url?: string,
  image_url?: string,
  content?: Array<Node>,
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