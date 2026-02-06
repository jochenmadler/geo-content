// Blog Post JSON-LD Schemas
// Generated for Hyperspell — add to your blog post page component
// e.g., app/blog/[slug]/page.tsx
//
// Follows the official Next.js JSON-LD pattern:
// https://nextjs.org/docs/app/guides/json-ld

// Frontmatter type matching the content pipeline's YAML output
interface PostFrontmatter {
  title: string
  slug: string
  author: string
  date: string
  format: string
  category: string
  tags: string[]
  seo: {
    metaTitle: string
    metaDescription: string
    primaryKeyword: string
    secondaryKeywords: string[]
    searchIntent: string
    searchVolume?: number
  }
  wordCount: number
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function generateBlogSchemas(post: PostFrontmatter) {
  const blogUrl = `https://hyperspell.com/blog/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo.metaDescription,
    url: blogUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person' as const,
      name: post.author,
      // TODO: add author profile URL (e.g., https://hyperspell.com/about)
      // TODO: add jobTitle (e.g., 'Founder')
    },
    publisher: {
      '@type': 'Organization' as const,
      name: 'Hyperspell',
      url: 'https://hyperspell.com',
      // TODO: add logo — uncomment and set URL when available:
      // logo: { '@type': 'ImageObject', url: 'https://hyperspell.com/logo.png' },
    },
    keywords: post.tags.join(', '),
    wordCount: post.wordCount,
    mainEntityOfPage: {
      '@type': 'WebPage' as const,
      '@id': blogUrl,
    },
  }

  const faqSchema = post.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question' as const,
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer' as const,
            text: faq.answer,
          },
        })),
      }
    : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem' as const, position: 1, name: 'Home', item: 'https://hyperspell.com' },
      { '@type': 'ListItem' as const, position: 2, name: 'Blog', item: 'https://hyperspell.com/blog' },
      { '@type': 'ListItem' as const, position: 3, name: post.title, item: blogUrl },
    ],
  }

  return { articleSchema, faqSchema, breadcrumbSchema }
}

// Usage in your page component:
//
// const { articleSchema, faqSchema, breadcrumbSchema } = generateBlogSchemas(post)
//
// return (
//   <>
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
//       }}
//     />
//     {faqSchema && (
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
//         }}
//       />
//     )}
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
//       }}
//     />
//     {/* Article content */}
//   </>
// )
