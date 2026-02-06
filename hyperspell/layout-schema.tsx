// Organization JSON-LD Schema
// Generated for Hyperspell — add to your root layout
// e.g., app/layout.tsx
//
// This schema is global (same on every page). Add it once in your layout.

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hyperspell',
  url: 'https://hyperspell.com',
  // TODO: add logo — uncomment and set URL when available:
  // logo: 'https://hyperspell.com/logo.png',
  // TODO: add social profiles — uncomment and set URLs when available:
  // sameAs: [
  //   'https://twitter.com/hyperspell',
  //   'https://linkedin.com/company/hyperspell',
  //   'https://github.com/hyperspell',
  // ],
}

// Usage in your layout component:
//
// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
//   }}
// />
