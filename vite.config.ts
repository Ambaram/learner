import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

/** GitHub project Pages URL: https://<user>.github.io/<repo>/ */
const REPO_BASE = '/learner/'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? REPO_BASE : '/'

  return {
    base,
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'pwa-192.png', 'pwa-512.png', '.nojekyll'],
        manifest: {
          id: REPO_BASE,
          name: 'Harmony Mentor',
          short_name: 'Harmony Mentor',
          description:
            'Song-first music and vocal lessons with metronome, drones, and step-by-step explanations.',
          theme_color: '#0c0e14',
          background_color: '#0c0e14',
          display: 'standalone',
          display_override: ['standalone', 'browser'],
          orientation: 'any',
          scope: REPO_BASE,
          start_url: REPO_BASE,
          categories: ['education', 'music'],
          icons: [
            {
              src: 'pwa-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          navigateFallback: `${REPO_BASE}index.html`,
        },
      }),
    ],
  }
})
