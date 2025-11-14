import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern, high-performance shopping experience featuring product catalogs, secure checkout, responsive UI, and real-time order tracking for boutique retail.",
    tags: ["Next.js", "Firebase"],
    image: "/rayomaben-img.png",
    link: "https://www.therayomaben.com/",
  },
  {
    title: "Retail Billing & Inventory Web App",
    description: "Lightning-fast billing and inventory management system tailored for kid-centric retail stores, with multi-user access and cloud-synced data.",
    tags: ["Next.js", "Firebase"],
    image: "/peekaboo-dash-img.png",
    link: "https://peekaboominiclubs.com/login",
  },
  {
    title: "Cafe POS System",
    description: "Smart, efficient point-of-sale solution for cafes with real-time order management, billing, inventory tracking, and seamless device compatibility.",
    tags: ["React Native", "Node.js", "Firebase"],
    image: "/cafe-pos.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Successful projects delivered to satisfied clients across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-glow overflow-hidden group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {project.link && (
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;