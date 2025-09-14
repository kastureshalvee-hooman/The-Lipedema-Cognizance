import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MentalHealthLipedemaBlog() {
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
                <Heart className="h-8 w-8 text-green-600 mr-2" />
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Mental Health
                </span>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
                Mental Health and Lipedema: Breaking the Emotional Barriers
              </CardTitle>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Shalvee Kasture
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  September 15, 2024
                </div>
                <span>3 min read</span>
              </div>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hi! I hope you are doing awesome today! I am going to talk about a vital part of Lipedema. The
                accompanying mental health challenges.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Living with Lipedema is a challenging experience, affecting not only yours physical health but also your
                emotional well-being. As you examines the relationship between these two critical parts of Lipedema, it
                becomes clear that treating the emotional well-being of patients with Lipedema is vital for a
                comprehensive approach to the care. Perhaps the most important.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Lipedema can cause emotions of discomfort, self-consciousness, and despair in many individuals. Coping
                with chronic pain, limited mobility, and the stigma associated with body shape can all have a negative
                impact on your self-esteem and general mental health. You may experience feelings of isolation as they
                manage an illness that is frequently misunderstood and misdiagnosed.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <p className="text-gray-700 leading-relaxed font-medium">
                  It is essential to remember that mental health is just as important as physical health. We should
                  build a supportive and sympathetic atmosphere for individuals afflicted with Lipedema by addressing
                  the emotional issues that come with it. Raising awareness of this connection is critical for building
                  understanding among friends, family, peers, and the general public 💟
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">Hope you enjoyed today's talk! See you next week.</p>

              <p className="text-gray-700 leading-relaxed font-medium">- Shalvee Kasture</p>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Image credit:</strong> Total Lipedema Care
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
