"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Mail, Calendar, ArrowRight, BookOpen, Stethoscope, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/tlc-logo.png"
                alt="The Lipedema Cognizance Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h1 className="text-2xl font-bold text-slate-700">The Lipedema Cognizance</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </a>
              <a href="/what-is-lipedema" className="text-gray-700 hover:text-green-600 transition-colors">
                What is Lipedema?
              </a>
              <a href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
                Blog
              </a>
              <a href="#resources" className="text-gray-700 hover:text-green-600 transition-colors">
                Resources & Support
              </a>
              <a href="#volunteer" className="text-gray-700 hover:text-green-600 transition-colors">
                Get Involved
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </a>
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
              <div className="text-4xl font-bold mb-2">31,000+</div>
              <div className="text-green-100">People Educated Through Social Media</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,100+</div>
              <div className="text-green-100">Instagram Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Growing</div>
              <div className="text-green-100">Community Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated to educating communities, healthcare professionals, and people all around the world by unveiling
              the veil of Lipedema.
            </p>
          </div>

          {/* About the Founder section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-slate-800 mb-6 text-center">About the Founder</h4>
              <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I am <strong>Shalvee Kasture</strong>, a passionate high school student dedicated to transforming the
                  lipedema landscape. My journey began when I first learned about lipedema through my mother, who
                  courageously faces this condition herself. Witnessing her experience ignited a fire within me to make
                  a difference.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
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
                  on Instagram, I've been able to reach over 31,000 people with educational content, building a
                  community of 1,100+ followers who are passionate about lipedema awareness.
                </p>
              </div>
            </div>
          </div>

          {/* Future Vision section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">Our Vision for the Future</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="text-left border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-green-600" />
                      Lipedema Awareness Kits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Distributing comprehensive lipedema education kits throughout our neighborhood and beyond,
                      ensuring families have access to vital information about recognition, management, and support
                      resources.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-left border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-green-600" />
                      Community Expansion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Building a global network of young advocates and establishing partnerships with healthcare
                      providers to create lasting change in how lipedema is understood and treated worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-green-200">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Providing comprehensive resources and educational materials about lipedema for patients, families, and
                  communities through social media and community outreach.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Awareness Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creating engaging content and campaigns to help medical professionals and the general public recognize
                  and understand lipedema as a legitimate medical condition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fostering connections within the lipedema community through social media engagement and future support
                  initiatives to ensure no one faces this journey alone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources & Support Section */}
      <section id="resources" className="py-20 bg-green-50 px-4 sm:px-6 lg:px-8">
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
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
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
                  <a href="#resources" className="hover:text-white transition-colors">
                    Resources & Support
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
                  <a href="#about" className="hover:text-white transition-colors">
                    Education & Awareness
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Community Building
                  </a>
                </li>
                <li>
                  <a href="#volunteer" className="hover:text-white transition-colors">
                    Advocacy
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
