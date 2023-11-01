import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    emoji: { type: 'string', required: true },
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    author: { type: 'string', required: true },
    tags: { type: 'string', required: true },
    categories: { type: 'string', required: true },
    thumbnail: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: post => `/posts/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] });
