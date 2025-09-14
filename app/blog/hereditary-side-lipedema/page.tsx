import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export default function HereditarySideLipedema() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold text-sage-400">
            The Lipedema Cognizance
          </Link>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Understanding the Hereditary Side of Lipedema</h1>
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>November 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Shalvee Kasture</span>
              </div>
            </div>
          </header>

          <div className="text-slate-700 leading-relaxed space-y-6">
            <p className="text-xl text-slate-600 font-medium">
              Exploring the genetic components of lipedema and how understanding family history can lead to earlier
              diagnosis and better outcomes.
            </p>

            <p>
              One of the most significant aspects of lipedema that often goes unrecognized is its hereditary nature.
              Understanding the genetic component of this condition can be crucial for early identification, family
              planning decisions, and breaking cycles of misdiagnosis that can span generations.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">The Genetic Connection</h2>

            <p>
              Research has consistently shown that lipedema has a strong familial component. Many women with lipedema
              report having mothers, sisters, aunts, or grandmothers with similar symptoms, though these family members
              may never have received a proper diagnosis.
            </p>

            <p>
              The hereditary pattern suggests that genetic factors play a significant role in the development of
              lipedema. While the exact genes involved are still being studied, the familial clustering is undeniable
              and provides important clues for both researchers and families.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Recognizing Family Patterns</h2>

            <p>
              When examining family history, it's important to look beyond formal diagnoses. Many older generations of
              women may have been told they had "thick ankles," "heavy legs," or were simply "big-boned." These
              descriptions often mask undiagnosed lipedema.
            </p>

            <p>Common family patterns include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple women in the family with disproportionate lower body fat distribution</li>
              <li>Family members who struggled with leg pain, swelling, or sensitivity</li>
              <li>Women who found traditional diet and exercise ineffective for certain body areas</li>
              <li>Family history of easy bruising in the legs and arms</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Breaking the Cycle</h2>

            <p>
              Understanding the hereditary nature of lipedema empowers families to break cycles of misdiagnosis and
              suffering. When one family member receives a proper diagnosis, it often opens the door for other family
              members to seek evaluation and find answers they've been searching for.
            </p>

            <p>
              This knowledge is particularly powerful for younger family members who may be showing early signs of
              lipedema. Early recognition can lead to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Earlier intervention and management strategies</li>
              <li>Better understanding and self-advocacy</li>
              <li>Reduced psychological impact from years of misunderstanding</li>
              <li>More informed healthcare decisions</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Empowerment Through Knowledge</h2>

            <p>
              While the hereditary nature of lipedema might initially seem daunting, it's actually empowering.
              Understanding your genetic predisposition allows you to be proactive about your health, seek appropriate
              care, and make informed decisions about management strategies.
            </p>

            <p>
              For families affected by lipedema, knowledge becomes a tool for breaking generational cycles of confusion
              and misdiagnosis. By understanding and sharing information about lipedema's hereditary nature, we can
              ensure that future generations have the knowledge and resources they need from the start.
            </p>

            <p>
              Remember: having a genetic predisposition doesn't define your journey. With proper understanding, support,
              and management, individuals with lipedema can lead full, active, and healthy lives.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
