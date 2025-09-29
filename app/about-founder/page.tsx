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
                Shalvee's Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  In the summer before my sophomore year, my mother told me she had lipedema. After years of watching
                  her work out relentlessly and visit physicians with no clear answers about why her lower body was
                  heavier, more painful, and more sensitive than her upper body, I was baffled by the lack of resources
                  and support available for women living with this condition.
                </p>

                <p>
                  I made it my mission to educate physicians and women about this disease. Lipedema affects around 11%
                  of all women worldwide, yet most don't even know they have it, spending their lives battling chronic
                  pain and mental health struggles. I started reaching out to women advocating for lipedema and
                  conducted interviews to understand their concerns. Most commented on the lack of doctor-based
                  awareness while others talked about low self-esteem and high stigma.
                </p>

                <p>
                  With their advice, I founded The Lipedema Cognizance, focusing on raising awareness and providing
                  accessible mental health support. I started with a social media campaign featuring targeted posts
                  about lipedema and mental health support systems. My posts initially detailed information about the
                  disease and treatments, but I then experimented with creative content like myth-busting and
                  motivational quotes.
                </p>

                <p>
                  Through archived interviews with lipedema-lifestyle social media influencers, I learned that advocacy
                  is not about speaking for others, but amplifying voices already speaking. I stopped approaching
                  interviews with a checklist and simply listened. I began asking questions that led to stories, not
                  statistics, and understood the importance of creating spaces for others to speak.
                </p>

                <p>
                  One day, I received an email from a social media influencer who recently got a lipedema diagnosis. She
                  needed access to treatment options, available physicians, and resources to navigate her diagnosis. I
                  spent hours compiling a detailed resource guide—contact information for lipedema experts, treatment
                  summaries, and online support groups. This experience reminded me that behind every statistic is
                  someone navigating pain and confusion. It grounded everything I was trying to build.
                </p>

                <p>
                  I have seen how easy it is for someone suffering to go unnoticed—how women like my mother can spend
                  years before learning the answers they seek. That is why I continue to learn, listen, and help build
                  something better. My work with lipedema taught me that change does not always accompany a cure—it
                  starts with someone willing to ask better questions, and someone finally being seen.
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
