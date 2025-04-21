import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Жилой комплекс «Приморский»",
    type: "Строительство",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=3270&auto=format&fit=crop",
    description: "Комплексное строительство жилого дома на 120 квартир"
  },
  {
    title: "Бизнес-центр «Горизонт»",
    type: "Отделка",
    image: "https://images.unsplash.com/photo-1533321942807-08c40205cc13?q=80&w=3269&auto=format&fit=crop",
    description: "Внутренняя отделка помещений бизнес-центра класса А"
  },
  {
    title: "Ресторан «Панорама»",
    type: "Ремонт",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=3134&auto=format&fit=crop",
    description: "Капитальный ремонт и отделка ресторана в центре города"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Реализованные объекты компании — лучшее подтверждение нашего профессионализма
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center mt-4 md:mt-0">
            Все проекты <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary/80 text-white text-xs px-3 py-1 rounded-full">
                    {project.type}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline">
            Все проекты <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
