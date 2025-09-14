"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LipedemaVsLymphedemaPost() {
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
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Shalvee Kasture
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  August 21, 2025
                </div>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  Education
                </span>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
                The Difference Between Lipedema and Lymphedema
              </CardTitle>
              <p className="text-lg text-gray-600">2 min read</p>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">Hello!</p>
              <p className="text-lg leading-relaxed mb-6">I hope you are doing well!</p>

              <p className="text-lg leading-relaxed mb-6">
                Today I am going to be talking about the difference between Lipedema and Lymphedema. Why is this
                important? Lipedema has often been misdiagnosed as Lymphedema, a condition which also affects the
                lymphatic system but has different root causes, symptoms, and treatment.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                To start off, Lipedema is a chronic illness characterized by an abnormal buildup of fat cells in the
                lower body, typically the legs and, in a few instances, the arms. The disorder is more common in women
                and is thought to have a hereditary component. Lipedema can cause discomfort, soreness, easy bruising,
                pain, and decreased movement. While the precise cause is unknown, hormones are thought to have a part in
                its development. Currently, there is no cure for Lipedema, yet treatment (not cure) options include
                Liposuction, compression therapy etc.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Lymphedema, on the other hand, is caused by a weakened lymphatic system, which results in the buildup of
                protein-rich fluid in the tissues. This swelling, which is most usually seen in the arms and legs, can
                be either primary (genetic) or secondary (as a result of an accident, infection, or surgery that
                destroys lymph nodes or veins). It is seen most often in the form where one limb is worse than the other
                but, in some circumstances both limbs or just one limb is affected. Lymphedema has nothing to do with
                fat, and its severity can range from mild to severe, compromising limb function and causing recurring
                infections if left untreated. Compression treatment, manual lymphatic drainage, and exercise are all
                used to treat the condition.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In summary, Lipedema is defined by an abnormal buildup of fat cells in the limbs, whereas Lymphedema is
                characterized by swelling caused by poor lymphatic outflow. Differentiating between these two disorders
                is critical for accurate diagnosis and treatment. <Heart className="inline h-5 w-5 text-pink-500" />
              </p>

              <p className="text-lg leading-relaxed mb-6">Hope this helped clear the air! Have a great Day</p>
              <p className="text-lg leading-relaxed mb-8">
                From,
                <br />
                Shalvee Kasture
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Websites used and for additional information:
                </h3>
                <ol className="space-y-2 text-gray-700">
                  <li>
                    1.{" "}
                    <a
                      href="https://lnkd.in/g-ZbhAn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Lymphedema: Symptoms, treatments, and causes - Medical News Today
                    </a>
                  </li>
                  <li>
                    2.{" "}
                    <a
                      href="https://lymphnet.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      National Lymphedema Network
                    </a>
                  </li>
                  <li>
                    3.{" "}
                    <a
                      href="https://lipedema.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Lipedema- Dr. V.K Srinagesh
                    </a>
                  </li>
                  <li>
                    4.{" "}
                    <a
                      href="https://www.lipedema.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Lipedema Foundation
                    </a>
                  </li>
                </ol>
                <p className="text-sm text-gray-600 mt-4 italic">Image used from Lymphedema Therapy Specialists</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
