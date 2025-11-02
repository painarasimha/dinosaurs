import { Target, Users, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every line of code and every user interaction",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners in their success journey",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver future-proof solutions",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "We commit to timely delivery without compromising on quality",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About DevForge</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and innovators dedicated to building software that makes a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-glow group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;