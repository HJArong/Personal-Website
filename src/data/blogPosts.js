import { marked } from 'marked'

const markdownFiles = import.meta.glob('../content/blog/*.md', {
  eager: true,
  import: 'default',
  query: '?raw'
})

function getSlugFromPath(filePath) {
  return filePath.split('/').pop().replace(/\.md$/, '')
}

function parseFrontmatterValue(value) {
  return value.replace(/^['"]|['"]$/g, '').trim()
}

function parseMarkdownFile(rawMarkdown) {
  const normalizedMarkdown = rawMarkdown.replace(/\r\n/g, '\n')

  if (!normalizedMarkdown.startsWith('---\n')) {
    return {
      data: {},
      content: normalizedMarkdown
    }
  }

  const frontmatterEndIndex = normalizedMarkdown.indexOf('\n---\n', 4)

  if (frontmatterEndIndex === -1) {
    return {
      data: {},
      content: normalizedMarkdown
    }
  }

  const frontmatter = normalizedMarkdown.slice(4, frontmatterEndIndex)
  const content = normalizedMarkdown.slice(frontmatterEndIndex + 5)
  const data = {}
  let currentKey = null

  frontmatter.split('\n').forEach((line) => {
    if (!line.trim()) {
      return
    }

    const listItemMatch = line.match(/^\s*-\s+(.*)$/)
    if (listItemMatch && currentKey) {
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = []
      }
      data[currentKey].push(parseFrontmatterValue(listItemMatch[1]))
      return
    }

    const fieldMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!fieldMatch) {
      currentKey = null
      return
    }

    const [, key, value] = fieldMatch
    currentKey = key
    data[key] = value ? parseFrontmatterValue(value) : []
  })

  return {
    data,
    content
  }
}

function normalizePost(filePath, rawMarkdown) {
  const { data, content } = parseMarkdownFile(rawMarkdown)
  const slug = data.slug || getSlugFromPath(filePath)

  return {
    id: Number(data.id) || 0,
    slug,
    category: data.category || 'Blog',
    date: data.date || '',
    readTime: data.readTime || '',
    title: data.title || slug,
    excerpt: data.excerpt || '',
    intro: data.intro || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    content: marked.parse(content.trim())
  }
}

const posts = Object.entries(markdownFiles)
  .map(([filePath, rawMarkdown]) => normalizePost(filePath, rawMarkdown))
  .sort((firstPost, secondPost) => firstPost.id - secondPost.id)

export default posts
