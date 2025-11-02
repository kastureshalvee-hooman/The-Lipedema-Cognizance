"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Mail, Calendar, ArrowRight, BookOpen, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-md border-b-2 border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-3 group cursor-pointer">
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
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all font-medium shadow-sm"
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
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                About the Founder
              </Link>
              <Link
                href="#resources"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                Resources
              </Link>
              <Link
                href="#volunteer"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium"
              >
                Get Involved
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Raising Awareness, Empowering Lives</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Dedicated to educating communities, healthcare professionals, and people all around the world by unveiling
            the veil of Lipedema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://www.lipedema.org/", "_blank")}
            >
              Support Lipedema.org
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://lipedema-simplified.org/", "_blank")}
            >
              Support Lipedema Simplified
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              onClick={() => (window.location.href = "/what-is-lipedema")}
            >
              Learn About Lipedema
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Supporting{" "}
            <a
              href="https://www.lipedema.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 underline"
            >
              Lipedema.org
            </a>{" "}
            and{" "}
            <a
              href="https://lipedema-simplified.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 underline"
            >
              Lipedema Simplified
            </a>{" "}
            - leading nonprofits dedicated to lipedema research and advocacy
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">39,000+</div>
              <div className="text-green-100">People Educated Through Social Media</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-green-100">Instagram Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Growing</div>
              <div className="text-green-100">Community Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGE5NmUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg animate-pulse">
              COMING SOON
            </span>
          </div>

          <div className="mb-8">
            <BookOpen className="h-20 w-20 text-green-600 mx-auto mb-6 animate-bounce" />
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Something Special is on the Way...</h3>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
              We're working on an exciting new resource to help you better understand and navigate your lipedema
              journey.
              <span className="block mt-2 text-green-700 font-semibold">Stay tuned for our upcoming launch.</span>
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-green-200 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6 text-lg">
              Be the first to know when we launch. Sign up for updates and get exclusive early access.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold shadow-lg transform hover:scale-105 transition-all"
              onClick={() => window.open("https://forms.gle/HyxH6DZnmw8g2A5x6", "_blank")}
            >
              Get Notified
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resources & Support Section */}
      <section id="resources" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Resources & Support</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with support groups, access educational resources, and explore the latest research to better
              understand and manage lipedema.
            </p>
          </div>

          {/* Support Groups */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">Support Groups & Communities</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    Lipedema Simplified Tribe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Join a supportive community of individuals living with lipedema. Share experiences, get advice, and
                    connect with others who understand your journey.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => window.open("https://learn.lipedema-simplified.org/tribe/", "_blank")}
                  >
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-green-600" />
                    The Grounded Body
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Access holistic approaches to lipedema management, including movement therapy, nutrition guidance,
                    and body-positive support resources.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => window.open("https://www.thegroundedbody.com/", "_blank")}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    Lipedema India
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Connect with the lipedema community in India and access region-specific resources, support networks,
                    and healthcare provider information.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => window.open("https://lipedema.in/", "_blank")}
                  >
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Research Resources */}
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">Research & Medical Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Stethoscope className="h-5 w-5 mr-2 text-green-600" />
                    Clinical Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Access peer-reviewed research papers and clinical studies about lipedema from trusted medical
                    sources.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.ncbi.nlm.nih.gov/books/NBK573066/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-green-600 hover:text-green-800 underline"
                    >
                      NCBI: Lipedema Overview
                    </a>
                    <a
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5055019/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-green-600 hover:text-green-800 underline"
                    >
                      PMC: Lipedema Research
                    </a>
                    <a
                      href="https://med.stanford.edu/news/all-news/2020/11/biomarker-for-lipedema-discovered.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-green-600 hover:text-green-800 underline"
                    >
                      Stanford: Biomarker Discovery
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    Educational Materials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive resources for patients, families, and healthcare providers to better understand
                    lipedema.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://rarediseases.org/rare-diseases/dercums-disease/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-green-600 hover:text-green-800 underline"
                    >
                      Rare Diseases: Lipedema Info
                    </a>
                    <a
                      href="https://truewomenshealth.com/lets-chat-lipedema/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-green-600 hover:text-green-800 underline"
                    >
                      True Women's Health Guide
                    </a>
                    <a href="/what-is-lipedema" className="block text-sm text-green-600 hover:text-green-800 underline">
                      Our Complete Lipedema Guide
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                For a comprehensive list of research papers and medical resources, visit our blog for detailed research
                reviews.
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => (window.location.href = "/blog")}
              >
                View Research Blog Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Get Involved</h3>
          <p className="text-lg text-gray-600 mb-8">
            Join our mission to raise awareness and support those affected by lipedema. Every voice matters in creating
            change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  Social Media Advocacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help amplify our message by sharing our content, engaging with our posts, and spreading lipedema
                  awareness in your own networks.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => window.open("https://www.instagram.com/the_lipedema_cognizance/", "_blank")}
                >
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  Community Outreach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join us in future community initiatives and help distribute awareness materials in your local area to
                  reach more people who need this information.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => window.open("https://forms.gle/V9z9nfjoewp4XM9c8", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Email Signup Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border-2 border-green-200">
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold text-slate-800 mb-3">Stay Updated</h4>
              <p className="text-gray-600 mb-6 max-w-2xl text-center">
                Join our mailing list to receive the latest updates on lipedema research, resources, community events,
                and ways to get involved in our mission.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold"
                onClick={() => window.open("https://forms.gle/HyxH6DZnmw8g2A5x6", "_blank")}
              >
                Sign Up for Updates
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://forms.gle/V9z9nfjoewp4XM9c8", "_blank")}
          >
            Get Involved
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Contact Us</h3>
            <p className="text-lg text-gray-600">Ready to join our mission? Get in touch with our team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="font-semibold text-slate-800 mb-2">Email</h4>
              <p className="text-gray-600">thelipedemacognizance@gmail.com</p>
            </div>

            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="font-semibold text-slate-800 mb-2">Follow Us</h4>
              <p className="text-gray-600">
                <a
                  href="https://www.instagram.com/the_lipedema_cognizance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 underline"
                >
                  @the_lipedema_cognizance
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Email Signup Section */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 mb-12 border border-green-700/50">
            <div className="text-center">
              <Mail className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-3">Join Our Community</h4>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to receive updates, resources, and stories from The Lipedema Cognizance community.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold"
                onClick={() => window.open("https://forms.gle/HyxH6DZnmw8g2A5x6", "_blank")}
              >
                Sign Up for Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

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
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/what-is-lipedema" className="hover:text-white transition-colors">
                    What is Lipedema?
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/about-founder" className="hover:text-white transition-colors">
                    About the Founder
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-white transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#volunteer" className="hover:text-white transition-colors">
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
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
                  <a
                    href="https://www.linkedin.com/company/the-lipedema-cognizance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Our Mission</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/what-is-lipedema" className="hover:text-white transition-colors">
                    Education & Awareness
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Support
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
