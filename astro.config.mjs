// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    // Se define el sitio real (importante para SEO y sitemap)
    site: 'https://cachandolabola.com',
    devToolbar: {
        enabled: false
    },
    integrations: [mdx(), sitemap()],
    // Markdown configuration
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: '_blank',
                    rel: ['nofollow', 'noopener', 'noreferrer']
                }
            ]
        ]
    }
});