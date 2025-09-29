"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutFounderPage() {
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
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
                Blog
              </Link>
              <Link href="/about-founder" className="text-green-600 font-medium">
                About the Founder
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
          <h1 className="text-4xl font-bold text-slate-800 mb-6">About the Founder</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Meet Shalvee Kasture, the passionate high school student behind The Lipedema Cognizance
          </p>
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
                Shalvee Kasture - Founder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am <strong>Shalvee Kasture</strong>, a passionate high school student dedicated to transforming the
                  lipedema landscape. My journey began when I first learned about lipedema through my mother, who
                  courageously faces this condition herself. Witnessing her experience ignited a fire within me to make
                  a difference.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Since that pivotal moment, I have dedicated countless hours to researching this misunderstood
                  condition, gathering resources, and connecting with the lipedema community. What started as a personal
                  mission to help my mother has evolved into a broader commitment to ensure no one faces lipedema
                  without proper knowledge and support.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through{" "}
                  <a
                    href="https://www.instagram.com/the_lipedema_cognizance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    @the_lipedema_cognizance
                  </a>{" "}
                  on Instagram, I've been able to reach over 34,000 people with educational content, building a
                  community of 1,200+ followers who are passionate about lipedema awareness.
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
                <div className="text-3xl font-bold text-slate-800 mb-2">34,000+</div>
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
                  <h4 className="font-semibold text-slate-800 mb-2 text-lg">Future Goals</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Distribute comprehensive lipedema education kits throughout neighborhoods and communities</li>
                    <li>Build a global network of young advocates passionate about lipedema awareness</li>
                    <li>Establish partnerships with healthcare providers to improve diagnosis and treatment</li>
                    <li>Create lasting change in how lipedema is understood and treated worldwide</li>
                  </ul>
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
