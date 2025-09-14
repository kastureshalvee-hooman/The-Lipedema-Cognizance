import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export default function LipedemaGlobalPerspective() {
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
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Lipedema: A Global Perspective</h1>
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 9, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Shalvee Kasture</span>
              </div>
            </div>
          </header>

          <div className="text-slate-700 leading-relaxed space-y-6">
            <p className="text-xl text-slate-600 font-medium">Hello, I hope you are doing well.</p>

            <p>
              Today, I want to talk to you about Lipedema globally. Lipedema is a disease which is not bound by any
              international boundaries and demarcations. It is a disease which causes immense discomfort in many. Living
              with Lipedema is not a simple walk in the park. It is a burden which weighs on down. To put Lipedema in
              perspective, here are some (not- so fun) facts of Lipedema.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
              1. 10% of all women worldwide have Lipedema.
            </h2>

            <p>
              Despite being misdiagnosed and misunderstood, over 400,000,000 women (AFAB) have this disease. These
              individuals are actively facing immense physical and mental pain. Yet, Lipedema remains stigmatized and
              considered obesity.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
              2. It takes roughly 15 years for a diagnosis
            </h2>

            <p>
              This is one of the most concerning aspects of Lipedema. However, this is an average number. As many people
              are nowadays taking great strides in helping those with Lipedema, this number may have decreased
              significantly. Yet, the struggles of diagnosis still accompany the restless nature of this disease.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
              3. The average age of diagnosis is 48 years.
            </h2>

            <p>
              Imagine being stuck in this phase with no avail. The toll of Lipedema burdens all those facing it and
              their loved ones who have to watch them suffer. Therefore, it is essential to build awareness and support
              those going through this journey.
            </p>

            <p>
              A silver lining to this is: the ongoing research by multiple people and organizations who are doing their
              best to help research, advocate, and treat Lipedema. Together, we all can make a great difference on a
              global scale.
            </p>

            <p className="font-medium">
              Warm Regards,
              <br />
              Shalvee Kasture
            </p>

            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                References and other places which have Lipedema related help:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9775665/"
                    className="text-sage-600 hover:text-sage-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NCBI Research Article
                  </a>
                </li>
                <li>
                  <a
                    href="https://journals.lww.com/plasreconsurg/abstract/2019/12000/new_insights_on_lipedema__the_enigmatic_disease_of.46.aspx"
                    className="text-sage-600 hover:text-sage-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Plastic and Reconstructive Surgery Journal
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5055019/"
                    className="text-sage-600 hover:text-sage-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NCBI PMC Article
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lipedema.org/about"
                    className="text-sage-600 hover:text-sage-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lipedema.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://ichoosehealth.com.au/about"
                    className="text-sage-600 hover:text-sage-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    I Choose Health
                  </a>
                </li>
              </ul>
              <p className="text-xs text-slate-600 mt-4">
                Note: This post was not created by a medical professional. Your experience with this information may
                vary. Please contact your physician or a Lipedema expert to guide you in your journey. Remember: You
                know you the best! Thank you! 💛
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
