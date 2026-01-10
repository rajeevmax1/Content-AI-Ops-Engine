# Blueprint: Primary Source Ingestion Engine
**Status:** V1.0 (Stream 1)

## Objective
Automate the transition from handwritten/physical research to structured JSON data in Sanity.io.

## Logic Nodes
1. **Input:** Multi-modal (Image/OCR)
2. **Processing:** GPT-4o Vision for semantic extraction.
3. **Transformation:** Mapping AI JSON output to Sanity Schema fields:
   - `title` -> `{{prompt.title}}`
   - `content` -> `{{prompt.text}}`
   - `source` -> "Physical Notebook 2026"
4. **Output:** Sanity API Mutation (POST /data/mutate)
