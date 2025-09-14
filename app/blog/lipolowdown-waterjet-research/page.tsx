import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export default function LipoLowdownWaterjetResearch() {
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
              The LipoLowdown: Waterjet-Assisted Liposuction Research
            </h1>
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 8, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Shalvee Kasture</span>
              </div>
            </div>
          </header>

          <div className="text-slate-700 leading-relaxed space-y-6">
            <p className="text-xl text-slate-600 font-medium">
              Exploring the latest research on waterjet-assisted liposuction as a treatment option for lipedema
              patients.
            </p>

            <p>
              Welcome to The LipoLowdown, our research-focused series where we dive deep into the latest scientific
              developments in lipedema treatment. Today, we're examining waterjet-assisted liposuction (WAL) and its
              emerging role in lipedema management.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
              The LipoLowdown #2: A retrospective cohort study: Waterjet-assisted liposuction reduces inflammation but
              increases the risk of hypokalemia in patients with lipoedema
            </h2>

            <div className="bg-sage-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-slate-800 mb-2">Research Links:</p>
              <p className="text-sm text-slate-600 mb-1">
                <strong>Link:</strong>{" "}
                <a
                  href="https://lnkd.in/ex72p_sA"
                  className="text-sage-600 hover:text-sage-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://lnkd.in/ex72p_sA
                </a>
              </p>
              <p className="text-sm text-slate-600 mb-1">
                <strong>DOI:</strong>{" "}
                <a
                  href="https://lnkd.in/ezPb6AV4"
                  className="text-sage-600 hover:text-sage-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://lnkd.in/ezPb6AV4
                </a>
              </p>
              <p className="text-sm text-slate-600">
                <strong>Authors:</strong> Jessica Hoffmann, Adam Stepniewski, Wolfgang Lehmann, Katharina Jäckle
              </p>
            </div>

            <p>
              Lipedema is a chronic adipose tissues disorder primarily affecting women. Often, lipedema fat can be
              removed through liposuction. This study looked at the benefits of water jet-assisted liposuction (WAL).
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">How was the research conducted:</h3>
            <p>
              Researchers treated 72 women who had lipedema. 47 women had tumescent liposuction while 25 had WAL. They
              had blood tests done before and after the surgery which measured their inflammation and electrolyte levels
              to evaluate tissue trauma and recovery.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Results:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                WAL led to lesser inflammation, indicated by lesser C-reactive protein levels. It also had lesser tissue
                damage as well.
              </li>
              <li>
                There was a drop in potassium levels in the blood. However, the WAL group experienced more of this. The
                researchers recommend monitoring potassium levels after WAL.
              </li>
              <li>WAL helped remove more fat compared to the tumescent method</li>
              <li>It also causes less damage to lymphatic vessels and tissues, reducing risk of lymphoedema.</li>
            </ul>

            <p className="mt-6">
              This research proved the efficacy of WAL compared to the usual tumescent method. However, there is a
              distinct need to monitor electrolyte levels.
            </p>

            <p className="font-medium text-slate-800">Thank you!</p>
          </div>
        </article>
      </main>
    </div>
  )
}
