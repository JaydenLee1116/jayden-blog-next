import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Log = defineDocumentType(() => ({
  name: 'Log',
  filePathPattern: `logs/**/*.md`,
  fields: {
    emoji: { type: 'string', required: true },
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    author: { type: 'string', required: true },
    tags: { type: 'string', required: false },
    categories: { type: 'string', required: true },
    thumbnail: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: log => `/${log._raw.flattenedPath}` },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  fields: {
    emoji: { type: 'string', required: true },
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    author: { type: 'string', required: true },
    tags: { type: 'string', required: false },
    categories: { type: 'string', required: true },
    thumbnail: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: post => `/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Log, Post],
});
