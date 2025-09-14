import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, AlertCircle, Users, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WhatIsLipedemaPage() {
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
              <Link href="/what-is-lipedema" className="text-green-600 font-medium">
                What is Lipedema?
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
                Blog
              </Link>
              <Link href="/#volunteer" className="text-gray-700 hover:text-green-600 transition-colors">
                Get Involved
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">Donate Now</Button>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/">
          <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">What is Lipedema?</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Understanding this chronic adipose tissue disorder that affects millions of women worldwide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Definition Card */}
          <Card className="mb-8 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Stethoscope className="h-6 w-6 mr-3 text-green-600" />
                Medical Definition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Lipedema is a chronic adipose tissue disorder which is theorized to be linked to high estrogen levels.
                It almost exclusively affects women during periods of hormonal changes such as menarche and menopause.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The basic symptoms consist of a disproportionate distribution of fat accompanied by severe pain and
                mental distress.
              </p>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center border-green-200">
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Prevalence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-800 mb-2">11%</div>
                <p className="text-gray-600">of all adult women worldwide are estimated to be affected by lipedema</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Genetic Factor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-800 mb-2">60%+</div>
                <p className="text-gray-600">of women with lipedema have a genetic predisposition to the condition</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-800 mb-2">Low</div>
                <p className="text-gray-600">diagnosis rates due to similarity to obesity and lack of awareness</p>
              </CardContent>
            </Card>
          </div>

          {/* Challenges Section */}
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-red-800">
                <AlertCircle className="h-6 w-6 mr-3 text-red-600" />
                Current Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Misdiagnosis and Underdiagnosis</h4>
                  <p className="text-red-700">
                    Lipedema remains highly undiagnosed due to its similarity to obesity, leading many women to struggle
                    without proper medical support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Limited Medical Recognition</h4>
                  <p className="text-red-700">
                    Lipedema is poorly understood amongst American physicians. While recognized in European health
                    circles, there are no formal international guidelines for diagnosis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Healthcare System Gaps</h4>
                  <p className="text-red-700">
                    Large health systems, such as the United States, even lack ICD codes - a standardized system of
                    categorizing and coding different diseases and medical conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research and Hope */}
          <Card className="mb-8 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="h-6 w-6 mr-3 text-green-600" />
                Research and Growing Awareness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">International Research</h4>
                  <p className="text-gray-700">
                    A large body of current lipedema evidence comes from researchers in Germany, contributing to our
                    growing understanding of this condition.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Social Media Impact</h4>
                  <p className="text-gray-700">
                    With the advent of social media, more people are becoming vocal about expressing their experience
                    with lipedema, helping to raise awareness and build community support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Growing Recognition</h4>
                  <p className="text-gray-700">
                    Although lipedema awareness is growing, it is still poorly recognized and diagnosed. Organizations
                    like The Lipedema Cognizance are working to change this reality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-green-50 rounded-lg p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Join Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              Help us unveil the veil of lipedema by spreading awareness and supporting those affected by this
              condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#volunteer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Involved
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-green-400" />
                <h4 className="text-lg font-semibold">The Lipedema Cognizance</h4>
              </div>
              <p className="text-gray-400">
                Dedicated to educating communities, healthcare professionals, and people all around the world by
                unveiling the veil of Lipedema.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-lipedema" className="hover:text-white transition-colors">
                    What is Lipedema?
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.instagram.com/the_lipedema_cognizance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:thelipedemacognizance@gmail.com" className="hover:text-white transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Lipedema Cognizance. Founded by Shalvee Kasture.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
