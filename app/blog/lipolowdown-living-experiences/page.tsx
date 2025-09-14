import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export default function LipoLowdownLivingExperiences() {
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
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              The LipoLowdown #1: An uncertain uphill battle – experiences and consequences of living with lipedema
            </h1>
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>September 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Shalvee Kasture</span>
              </div>
            </div>
          </header>

          <div className="text-slate-700 leading-relaxed space-y-6">
            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-slate-800 mb-2">Research Details:</p>
              <p className="text-sm text-slate-600 mb-1">
                <strong>Link:</strong>{" "}
                <a
                  href="https://lnkd.in/eHC8wnsM"
                  className="text-sage-600 hover:text-sage-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://lnkd.in/eHC8wnsM
                </a>
              </p>
              <p className="text-sm text-slate-600 mb-1">
                <strong>DOI:</strong>{" "}
                <a
                  href="https://lnkd.in/euSycu8x"
                  className="text-sage-600 hover:text-sage-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://lnkd.in/euSycu8x
                </a>
              </p>
              <p className="text-sm text-slate-600">
                <strong>Authors:</strong> Johan Dahlberg, Elisabet Nylander, Margarita Persson, Alexander Shayesteh
              </p>
            </div>

            <p>
              Lipedema often goes misunderstood and unnoticed. It's often very hard living in a body which is
              stigmatized and different from the regular societal standards.
            </p>

            <p>
              Some of the most important themes this research identifies was the sense of isolation accompanied with
              lipedema. Participants described feeling different.
            </p>

            <blockquote className="border-l-4 border-sage-400 pl-4 italic text-slate-600 my-6">
              "You hear repeatedly that you are not the norm or that you do not fit the norm."
            </blockquote>

            <p>
              Women with lipedema often hear remarks reinforcing this belief adding on to their struggles. It's also
              common to face stigma from physicians as well.
            </p>

            <p>
              Despite these difficulties, this research highlights the importance and need of support. Women have often
              found support discussing their struggles with those who care and empathize with them.
            </p>

            <blockquote className="border-l-4 border-sage-400 pl-4 italic text-slate-600 my-6">
              "It feels good to inform my friends... I have received a diagnosis."
            </blockquote>

            <p>
              Online support through communities and social media platforms also helps. However, negative comments and
              interactions cause patients to feel overwhelmed.
            </p>

            <p>Another observed theme is about the progression of lipedema.</p>

            <blockquote className="border-l-4 border-sage-400 pl-4 italic text-slate-600 my-6">
              "I am terrified by everything that could trigger an exacerbation,"
            </blockquote>

            <p>
              This is a common concern among those with lipedema. This hopelessness and anxiety can decrease mental
              health.
            </p>

            <p>
              These experiences of women with lipedema should remind us of the importance of understanding and empathy.
              Lipedema has both physical and mental challenges. We, as a community, should work together to create a
              more positive environment for those with lipedema. Physicians and healthcare professionals should be
              informed about the condition effectively to potentially have a systemwide impact.
            </p>

            <div className="bg-sage-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Question for Reflection:</h3>
              <p className="text-slate-700 font-medium">What does advocacy mean to you?</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
