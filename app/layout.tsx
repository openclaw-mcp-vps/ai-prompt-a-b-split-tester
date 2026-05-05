import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt A/B Split Tester — Find Your Best Prompts',
  description: 'Run split tests on AI prompts, track output quality metrics, and find the best performing prompt variations. Built for AI product teams and prompt engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ce9b716a-4e7d-4861-8867-e4b60ad1f5df"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
