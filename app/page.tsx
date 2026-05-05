export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          A/B Test AI Prompts for{' '}
          <span className="text-[#58a6ff]">Better Outputs</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Run split tests on AI prompts, track output quality metrics, and find the best performing variations — all in one dashboard built for prompt engineers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Testing Prompts — $29/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { stat: '10x', label: 'Faster iteration' },
            { stat: '40%', label: 'Better output quality' },
            { stat: '100%', label: 'Data-driven decisions' },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: '⚡', title: 'Side-by-side Testing', desc: 'Run prompt variants simultaneously against the same inputs.' },
            { icon: '📊', title: 'Quality Metrics', desc: 'Score outputs on relevance, tone, accuracy, and custom criteria.' },
            { icon: '🏆', title: 'Winner Detection', desc: 'Automatically surface the best-performing prompt variation.' },
          ].map(({ icon, title, desc }) => (
            <div key={title}>
              <div className="text-3xl mb-2">{icon}</div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-8">One plan. Everything included.</p>
        <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-8">
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited A/B prompt tests',
              'Connect any OpenAI-compatible API',
              'Output quality scoring dashboard',
              'Test history & version control',
              'CSV export of results',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: 'Which AI APIs are supported?',
              a: 'Any OpenAI-compatible API endpoint works — including OpenAI, Anthropic (via proxy), Mistral, Together AI, and self-hosted models.',
            },
            {
              q: 'How are output quality metrics calculated?',
              a: 'You define scoring criteria per test. The app uses an LLM judge to rate each output, and you can also add manual scores. All results are aggregated in the dashboard.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-[#21262d] bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} AI Prompt A/B Split Tester. All rights reserved.
      </footer>
    </main>
  )
}
