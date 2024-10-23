"use client";

import { useState, useEffect } from "react";
import { Button, buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  GitBranch,
  GitCommit,
  GitPullRequest,
  Terminal,
  Command,
  Book,
  Users,
} from "lucide-react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080C] text-[#F3F3F7]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div
          className={`mb-6 flex justify-center items-center transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <Command className="w-16 h-16 text-[#F3F3F7] mr-4" />
          <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F3F3F7] to-[#A0A0A8]">
            Borne
          </h1>
        </div>
        <p
          className={`mb-8 text-lg sm:text-xl text-[#A0A0A8] transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          The next-gen CLI to supercharge your Git and GitHub workflow
        </p>
        <a
          href="https://www.npmjs.com/package/borne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className={`bg-[#F3F3F7] text-[#08080C] hover:bg-[#A0A0A8] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Get Started
          </Button>
        </a>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl sm:text-4xl font-bold text-[#F3F3F7]">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Terminal className="h-8 w-8" />,
              title: "Intuitive CLI",
              description: "Manage Git from your terminal with ease",
            },
            {
              icon: <GitBranch className="h-8 w-8" />,
              title: "Branch Management",
              description: "Create, switch, and delete branches effortlessly",
            },
            {
              icon: <GitCommit className="h-8 w-8" />,
              title: "Commit History",
              description: "View and manage your commit history",
            },
            {
              icon: <GitPullRequest className="h-8 w-8" />,
              title: "Remote Operations",
              description: "Push, pull, and set remotes seamlessly",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`bg-[#12121A] text-[#F3F3F7] border-[#20202A] transition-all duration-300 ease-out transform hover:scale-105 hover:bg-[#1A1A24] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F3F3F7]">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#A0A0A8]">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl sm:text-4xl font-bold text-[#F3F3F7]">
          Quick Start
        </h2>
        <Card
          className={`bg-[#12121A] text-[#F3F3F7] border-[#20202A] transition-all pt-6 duration-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="p-6">
            <pre className="overflow-x-auto rounded bg-[#0f0f16] p-4 text-[#A0A0A8]">
              <code>npm install -g borne</code>
            </pre>
            <p className="mt-4 text-center text-[#A0A0A8]">
              Start using Borne with simple commands like:
            </p>
            <pre className="mt-2 overflow-x-auto rounded bg-[#0f0f16] p-4 text-[#A0A0A8]">
              <code>brn --help</code>
            </pre>
            <pre className="mt-2 overflow-x-auto rounded bg-[#0f0f16] p-4 text-[#A0A0A8]">
              <code>brn clone https://github.com/user/repo.git my-project</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Additional Information Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Documentation Section */}
          <Card
            className={`bg-[#12121A] text-[#F3F3F7] border-[#20202A] transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#F3F3F7]">
                <Book className="h-6 w-6" />
                <span>Comprehensive Documentation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#A0A0A8]">
                Explore our detailed documentation to learn all about Borne's
                features and how to use them effectively. From basic commands to
                advanced workflows, we've got you covered.
              </CardDescription>
              <a
                href="https://github.com/lioarce01/Borne-CLI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-4 bg-[#F3F3F7] text-[#08080C] hover:bg-[#A0A0A8] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md">
                  Read Docs
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Community Section */}
          <Card
            className={`bg-[#12121A] text-[#F3F3F7] border-[#20202A] transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#F3F3F7]">
                <Users className="h-6 w-6" />
                <span>Join Our Community</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#A0A0A8]">
                Connect with other Borne users, share your experiences, and get
                help from our active community. Join our forums or chat channels
                to stay up-to-date with the latest Borne news and tips.
              </CardDescription>
              <Button className="mt-4 bg-[#F3F3F7] text-[#08080C] hover:bg-[#A0A0A8] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08080C] py-10 border-t border-[#20202A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <div className="flex items-center mb-2">
                <Command className="w-8 h-8 text-[#F3F3F7] mr-2" />
                <h3 className="text-2xl font-bold text-[#F3F3F7]">Borne</h3>
              </div>
              <p className="text-[#A0A0A8]">
                Simplifying Git and GitHub interactions
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/lioarce01/Borne-CLI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A8] hover:text-[#F3F3F7] transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://github.com/lioarce01/Borne-CLI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A8] hover:text-[#F3F3F7] transition-colors duration-300"
              >
                Documentation
              </a>
              <a
                href="https://github.com/lioarce01/Borne-CLI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A8] hover:text-[#F3F3F7] transition-colors duration-300"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
