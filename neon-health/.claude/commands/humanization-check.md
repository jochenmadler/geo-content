# Check Articles for AI Detection

Analyze articles to identify signs that might flag them as AI-generated.

## Input
$ARGUMENTS (path to file or glob pattern for multiple files)

## Instructions

Evaluate the provided article(s) for AI detection signals. Look for:

### Structural Signals
- Rigid, identical formatting across sections (e.g., same 6-point structure for every item)
- Perfect symmetry in list items and comparisons
- Algorithmic "Decision Framework" sections
- Template-based organization

### Language Signals
- Pristine grammar throughout (no natural variations)
- Encyclopedic/synthesized tone
- Corporate transitions ("This guide evaluates...", "The following...")
- Lack of hedging or uncertainty
- Missing conversational elements

### Human Fingerprints (Absent = AI Signal)
- Typos or minor grammatical slips
- Emotional language or strong opinions
- Rhetorical questions
- Conversational phrasing ("We're talking about...", "Here's the thing...")
- Parenthetical asides
- Acknowledgment of limitations or uncertainty

### Content Signals
- Over-reliance on older data when newer should be available
- Generic descriptions without specific insights
- Balanced, neutral tone on everything (no opinions)

## Output Format

For each article, provide:

1. **AI Likelihood:** Low / Medium / High
2. **Key Evidence:** Specific examples with line numbers
3. **Recommendations:** Concrete changes to make the content feel more human

## Example Analysis

```
**File:** example-article.md
**AI Likelihood:** High

**Evidence:**
- Lines 77-248: Identical 6-point structure for all 14 platform reviews
- Line 19: "This guide evaluates..." (corporate transition)
- Throughout: Pristine grammar, no typos or natural variations
- No opinions expressed, everything balanced

**Recommendations:**
- Vary the structure of platform reviews
- Add conversational phrases and opinions
- Include hedging ("This may vary depending on...")
- Break up some perfect sentences
```
