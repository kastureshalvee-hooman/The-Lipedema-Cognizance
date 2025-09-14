import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StagesOfLipedemaBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Image
                  src="/images/tlc-logo.png"
                  alt="The Lipedema Cognizance Logo"
                  width={50}
                  height={50}
                  className="rounded-full cursor-pointer"
                />
              </Link>
              <Link href="/">
                <h1 className="text-2xl font-bold text-slate-700 cursor-pointer">The Lipedema Cognizance</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/what-is-lipedema" className="text-gray-700 hover:text-green-600 transition-colors">
                What is Lipedema?
              </Link>
              <Link href="/blog" className="text-green-600 font-medium">
                Blog
              </Link>
              <Link href="/#volunteer" className="text-gray-700 hover:text-green-600 transition-colors">
                Get Involved
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article */}
      <article className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-200">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600 mr-2" />
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Education
                </span>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
                Understanding the Stages of Lipedema
              </CardTitle>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Shalvee Kasture
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  August 22, 2024
                </div>
                <span>4 min read</span>
              </div>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hi there! Our topic of discussion for this week will be the stages of Lipedema. For context, Lipedema
                can be defined by an abnormal build-up of fat in the limbs and can be accompanied by bruises,
                inflammation and chunk-like texture in the skin.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">These are the stages of Lipedema:</p>

              <div className="space-y-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Stage 1</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Lipedema may be misdiagnosed as general weight gain at this time. However, there will be an abnormal
                    buildup of fat, mainly in the limbs. The skin is still smooth, and there are no nodules/chucks of
                    fat visible, but can be felt. One may develop touch sensitivity and discomfort.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Stage 2</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In Stage 2, fat buildup becomes more noticeable, and nodules will start to be visible. As blood
                    vessels are more fragile, bruising may be more prevalent.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Stage 3</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This stage is distinguished by an increase in lipedema fat, resulting in a more column-like look of
                    the legs and arms. The build-up of fat may start to protrude from the body. The appearance and
                    texture of the nodules increase, and movement might be considerably hindered. At this stage,
                    lipedema-related discomfort and tenderness are more severe.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Stage 4</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The afflicted regions eventually suffer a vast buildup of lipedema fat, resulting in substantial
                    alterations in the body's form and function. Individuals may experience mobility issues, and
                    lipedema can have a detrimental effect on the lymphatic system, potentially leading to secondary
                    lymphedema.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-gray-700 leading-relaxed font-medium">
                  These stages can manifest differently for everyone that is why a timely diagnosis is necessary to gain
                  appropriate advice.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Thank you for reading our blog! Please comment any questions and future blog topics.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This is not procured by a medical professional and is not medical advice.
                  Please use and treat this as general information regarding. One should consult their doctor to manage
                  symptoms, stages, etc.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  Sources used and for additional information:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>The Mayo Clinic</li>
                  <li>Lipedema Foundation</li>
                  <li>The Lipedema Project</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  (There are many websites which provide quality information regarding Lipedema, if you wish to learn
                  more about Lipedema and websites to refer to, please contact thelipedemacognizance@gmail.com)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
