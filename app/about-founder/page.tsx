"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutFounderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md border-b-2 border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/images/tlc-logo.png"
                alt="The Lipedema Cognizance Logo"
                width={50}
                height={50}
                className="rounded-full transition-transform group-hover:scale-105"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
                The Lipedema Cognizance
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                Home
              </Link>
              <Link
                href="/what-is-lipedema"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                What is Lipedema?
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                Blog
              </Link>
              <Link
                href="/about-founder"
                className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all font-medium shadow-sm"
              >
                About the Founder
              </Link>
              <Link
                href="/#resources"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                Resources
              </Link>
              <Link
                href="/#volunteer"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                Get Involved
              </Link>
            </nav>
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
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1710103224087-PjhTcxV9SelswfZ5FxjP7eiJQVbx37.jpg"
                alt="Shalvee Kasture, Founder of The Lipedema Cognizance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-6">About the Founder</h1>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Meet Shalvee Kasture, the passionate high school student behind The Lipedema Cognizance
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            onClick={() => window.open("https://www.linkedin.com/in/shalvee-kasture-949461213/", "_blank")}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Connect with Shalvee on LinkedIn
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Founder Story Card */}
          <Card className="mb-8 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="h-6 w-6 mr-3 text-green-600" />
                Shalvee's Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In the summer before my sophomore year, my mother told me she had lipedema. After years of watching
                  her struggle with chronic pain and visiting physicians with no clear answers, I was baffled by the
                  lack of resources and support available for women living with this condition.
                </p>

                <p>
                  I made it my mission to educate physicians and women about this disease. Lipedema affects around 11%
                  of all women worldwide, yet most don't even know they have it. I started reaching out to women
                  advocating for lipedema and conducted interviews to understand their concerns.
                </p>

                <p>
                  With their advice, I founded The Lipedema Cognizance, focusing on raising awareness and providing
                  accessible mental health support. Through my interviews, I learned that advocacy is about amplifying
                  voices already speaking, not speaking for others.
                </p>

                <p>
                  One day, I received an email from someone who recently got a lipedema diagnosis. I spent hours
                  compiling a detailed resource guide for her. This experience reminded me that behind every statistic
                  is someone navigating pain and confusion, and that is why I continue to learn, listen, and help build
                  something better.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="text-center border-green-200">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">People Reached</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-800 mb-2">39,000+</div>
                <p className="text-gray-600">Educated through social media content and awareness campaigns</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <Instagram className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-800 mb-2">1,200+</div>
                <p className="text-gray-600">Instagram followers engaged in lipedema awareness</p>
              </CardContent>
            </Card>
          </div>

          {/* Mission & Vision */}
          <Card className="mb-8 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="h-6 w-6 mr-3 text-green-600" />
                Mission & Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-lg">Our Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    To educate communities, healthcare professionals, and people all around the world by unveiling the
                    veil of Lipedema. We strive to ensure that no one faces this condition without proper knowledge,
                    support, and resources.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-lg">Looking Ahead</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    As The Lipedema Cognizance continues to grow, I envision expanding our impact through strategic
                    initiatives that bring lipedema awareness directly to communities and healthcare systems:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Developing comprehensive lipedema education kits to distribute throughout neighborhoods, community
                      centers, and healthcare facilities
                    </li>
                    <li>
                      Building a global network of young advocates passionate about lipedema awareness and creating
                      youth-led chapters worldwide
                    </li>
                    <li>
                      Establishing partnerships with medical schools and healthcare providers to integrate lipedema
                      education into medical training
                    </li>
                    <li>
                      Creating accessible resources in multiple languages to reach underserved communities globally
                    </li>
                    <li>
                      Hosting community workshops and webinars that connect patients with specialists and support
                      networks
                    </li>
                    <li>
                      Advocating for policy changes that improve insurance coverage and access to lipedema treatment
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    My goal is to create lasting systemic change in how lipedema is understood, diagnosed, and treated
                    worldwide—ensuring that no one has to wait years for answers like my mother did.
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
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open("https://www.instagram.com/the_lipedema_cognizance/", "_blank")}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                onClick={() => window.open("https://www.linkedin.com/in/shalvee-kasture-949461213/", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect with Shalvee on LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                onClick={() => window.open("https://forms.gle/V9z9nfjoewp4XM9c8", "_blank")}
              >
                Get Involved
              </Button>
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
                  <Link href="/about-founder" className="hover:text-white transition-colors">
                    About the Founder
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
            <p>&copy; 2025 The Lipedema Cognizance. Founded by Shalvee Kasture.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
