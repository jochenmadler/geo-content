# Convert Content Briefing to Blog Article

Create a high-quality blog article from a content briefing for neonhealth.com.

## Input
$ARGUMENTS (path to content briefing file, or "next" to pick the next one from the executive summary)

## Context Files to Read First
- `../00-executive-summary.md` - Content strategy and priority order
- `../product-marketing-context.md` - Brand voice and messaging
- `../seo-audit-neonhealth.md` - SEO context (if available)

## Instructions

1. **Review Strategy**
   - Read the executive summary to understand the overall content strategy
   - If argument is "next", pick the next article in priority order that hasn't been written

2. **Read the Briefing**
   - Carefully read the content briefing for the target article
   - Note primary/secondary keywords, target audience, and key points to cover

3. **Write the Article**
   - Apply the 7-pass technique for quality content:
     1. Outline based on briefing structure
     2. First draft with all key information
     3. SEO optimization pass
     4. Readability and flow pass
     5. Voice and tone alignment pass
     6. Fact-check and accuracy pass
     7. Final polish

4. **Add Featured Image Description**
   - At the top of the article, include a description of an appropriate featured image
   - Format: `**Featured Image Description:** [description]`

5. **Include Meta Information**
   - Title with year bracket if appropriate
   - Meta description
   - Primary and secondary keywords

## Output
Save the completed article to `./output/[slug].md`

## Quality Standards
- Professional but accessible tone
- Data-backed claims with sources
- Actionable insights for readers
- Clear structure with H2/H3 hierarchy
- Tables where comparisons are needed
