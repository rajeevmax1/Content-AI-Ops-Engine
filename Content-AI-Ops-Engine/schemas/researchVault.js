import { defineField, defineType } from 'sanity'

export const researchVault = defineType({
  name: 'researchVault',
  title: 'Research Vault',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Insight Title',
      type: 'string',
      description: 'A punchy summary of this specific research finding.'
    }),
    defineField({
      name: 'insightType',
      title: 'Insight Type',
      type: 'string',
      options: {
        list: [
          {title: 'Physical Note', value: 'physical'},
          {title: 'Interview Snippet', value: 'interview'},
          {title: 'Primary Document', value: 'document'},
          {title: 'Data Point', value: 'data'}
        ]
      }
    }),
    defineField({
      name: 'content',
      title: 'The Insight (Atomic)',
      type: 'text',
      description: 'The core piece of information. Keep it under 200 words for AI efficiency.'
    }),
    defineField({
      name: 'source',
      title: 'Source Reference',
      type: 'string',
      description: 'e.g., "Handwritten Notebook Vol 4, Page 22"'
    }),
    defineField({
      name: 'confidenceScore',
      title: 'Confidence Score (1-5)',
      type: 'number',
      validation: Rule => Rule.min(1).max(5),
      description: '1 = Speculative, 5 = Absolute Fact.'
    }),
    defineField({
      name: 'tags',
      title: 'Entities/Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: { layout: 'tags' }
    })
  ]
})
