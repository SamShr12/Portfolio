import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Lead development of enterprise web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Built responsive web applications from scratch. Collaborated with design team to implement pixel-perfect UI components and optimize user experience.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Firebase", "Figma"],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Developed custom WordPress themes and plugins. Maintained client websites and implemented SEO best practices.",
      technologies: ["WordPress", "PHP", "MySQL", "jQuery", "CSS3"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and key accomplishments</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-accent">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
