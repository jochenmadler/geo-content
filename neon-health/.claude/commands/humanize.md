# Humanize Article Tone

Improve the tone of voice for the provided article to be more human and less obviously AI-generated.

## Input
$ARGUMENTS (path to markdown file to humanize)

## Instructions

1. Read the article at the provided path
2. Read the reference tone examples at `../ref1.md` and `../ref2.md`
3. Apply the Gemini analysis insights to identify and fix AI giveaways:

### AI Giveaways to Fix

**Structural Rigidity:**
- Avoid identical 6-point structures repeated for every item
- Vary paragraph and section lengths
- Break rigid templates with occasional digressions

**Tone Issues:**
- Replace synthesized/encyclopedic tone with conversational voice
- Remove corporate transitions like "This guide evaluates..."
- Add emotional language and opinion where appropriate
- Use conversational phrasing: "We're talking about...", "Here's the thing..."

**Formatting:**
- Break pristine grammar occasionally with natural flow
- Vary sentence structures
- Allow some rhetorical questions

**Human Fingerprints to Add:**
- Hedging and acknowledgment of uncertainty
- Occasional strong opinions
- Asides and parenthetical thoughts
- Direct address to reader

### Process

1. Go through the article section by section
2. Identify phrases and structures that signal AI generation
3. Rewrite to feel more natural while preserving accuracy and quality
4. Validate the edited article maintains high quality

## Output
Save the humanized article to a new file with `-v2.md` suffix in the same directory.
