"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Hereditary Side of Lipedema",
    excerpt:
      "For generations, women have passed down recipes, traditions, even eye color. But what happens when they also pass down pain? Exploring the genetic aspects of lipedema and empowering families to break the cycle.",
    date: "July 15, 2025",
    author: "Shalvee Kasture",
    readTime: "4 min read",
    category: "Education",
    slug: "hereditary-side-lipedema",
  },
  {
    id: 2,
    title: "The LipoLowdown #2: Waterjet-Assisted Liposuction Research",
    excerpt:
      "A retrospective cohort study examining how waterjet-assisted liposuction reduces inflammation but increases the risk of hypokalemia in patients with lipedema. Breaking down the latest research findings.",
    date: "June 22, 2025",
    author: "Shalvee Kasture",
    readTime: "3 min read",
    category: "Research",
    slug: "lipolowdown-waterjet-research",
  },
  {
    id: 3,
    title: "Mental Health and Lipedema: Breaking the Emotional Barriers",
    excerpt:
      "Living with Lipedema affects not only physical health but emotional well-being. Exploring the vital connection between mental health and lipedema, and why addressing emotional challenges is essential for comprehensive care.",
    date: "May 8, 2025",
    author: "Shalvee Kasture",
    readTime: "3 min read",
    category: "Mental Health",
    slug: "mental-health-lipedema",
  },
  {
    id: 4,
    title: "Understanding the Stages of Lipedema",
    excerpt:
      "From Stage 1's subtle symptoms to Stage 4's significant impact, understanding lipedema progression is crucial for timely diagnosis and appropriate care. A comprehensive guide through each stage.",
    date: "March 28, 2025",
    author: "Shalvee Kasture",
    readTime: "4 min read",
    category: "Education",
    slug: "stages-of-lipedema",
  },
  {
    id: 5,
    title: "Lipedema: A Global Perspective",
    excerpt:
      "Lipedema is a disease which is not bound by any international boundaries. With 10% of women worldwide affected and an average 15-year journey to diagnosis, we explore the global impact of this condition.",
    date: "January 12, 2025",
    author: "Shalvee Kasture",
    readTime: "2 min read",
    category: "Awareness",
    slug: "lipedema-global-perspective",
  },
  {
    id: 6,
    title: "The LipoLowdown #1: Living with Lipedema - Patient Experiences",
    excerpt:
      "An uncertain uphill battle – exploring the experiences and consequences of living with lipedema. Understanding the isolation, stigma, and the importance of support in the lipedema journey.",
    date: "November 30, 2024",
    author: "Shalvee Kasture",
    readTime: "4 min read",
    category: "Research",
    slug: "lipolowdown-living-experiences",
  },
  {
    id: 7,
    title: "The Difference Between Lipedema and Lymphedema",
    excerpt:
      "Lipedema has often been misdiagnosed as Lymphedema. Understanding the key differences between these two conditions is crucial for accurate diagnosis and proper treatment.",
    date: "August 21, 2025",
    author: "Shalvee Kasture",
    readTime: "2 min read",
    category: "Education",
    slug: "difference-lipedema-lymphedema",
  },
]

export default function BlogPage() {
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({})

  useEffect(() => {
    const savedViews = localStorage.getItem("blog-view-counts")
    if (savedViews) {
      setViewCounts(JSON.parse(savedViews))
    } else {
      const initialViews = {
        7: 500, // Latest: Lipedema vs Lymphedema post
        1: 567, // Hereditary Side
        2: 423, // Waterjet Research
        3: 1089, // Mental Health (the 1000+ post)
        4: 634, // Stages
        5: 756, // Global Perspective
        6: 489, // Living Experiences
      }
      setViewCounts(initialViews)
      localStorage.setItem("blog-view-counts", JSON.stringify(initialViews))
    }
  }, [])

  const handlePostClick = (postId: number) => {
    const newViewCounts = {
      ...viewCounts,
      [postId]: (viewCounts[postId] || 0) + 1,
    }
    setViewCounts(newViewCounts)
    localStorage.setItem("blog-view-counts", JSON.stringify(newViewCounts))
  }

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
                className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all font-medium shadow-sm"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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
          <h1 className="text-4xl font-bold text-slate-800 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Insights, stories, and educational content about lipedema awareness and advocacy
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Editorial Note:</span> Our content is originally written by human writers
              and undergoes extensive fact-checking and review processes. We utilize AI tools including Consensus AI for
              research synthesis, Scholarcy for academic paper analysis, and Grammarly for editorial enhancement to
              ensure the highest quality and accuracy in our lipedema advocacy efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} onClick={() => handlePostClick(post.id)}>
                <Card className="border-green-200 hover:shadow-lg transition-all duration-200 cursor-pointer group hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-1" />
                        {viewCounts[post.id] || 0} views
                      </div>
                      <Button
                        variant="ghost"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-slate-800">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6">
                Follow us on Instagram for the latest updates, educational content, and community stories about lipedema
                awareness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.instagram.com/the_lipedema_cognizance/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Follow on Instagram
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-lipedema-cognizance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Follow on LinkedIn
                  </Button>
                </a>
                <Link href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/tlc-logo.png"
                  alt="The Lipedema Cognizance Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
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
                  <a
                    href="https://www.linkedin.com/company/the-lipedema-cognizance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
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
