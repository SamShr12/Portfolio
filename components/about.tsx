import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-platform compatibility.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience building web applications that solve
            real-world problems. I love working with modern technologies and am always eager to learn new tools and
            frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Started as a curious computer science student, I quickly fell in love with the art of programming. What
              began as simple HTML pages has evolved into building complex, scalable applications used by thousands of
              users.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I specialize in React, Node.js, and modern web technologies, always staying current with industry
              trends and best practices.
            </p>
          </div>
          <div className="relative">
            <img
              src="/professional-developer-headshot.png"
              alt="Developer portrait"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <highlight.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
