import { 
  Building2, 
  PaintBucket, 
  Forklift, 
  Construction, 
  Lightbulb, 
  Home 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Building2 className="h-10 w-10 text-secondary" />,
    title: "Строительство",
    description: "Строительство жилых и коммерческих объектов с нуля под ключ с соблюдением всех норм и стандартов."
  },
  {
    icon: <PaintBucket className="h-10 w-10 text-secondary" />,
    title: "Отделочные работы",
    description: "Внутренняя и внешняя отделка помещений любой сложности с использованием современных материалов."
  },
  {
    icon: <Home className="h-10 w-10 text-secondary" />,
    title: "Ремонт квартир",
    description: "Косметический, капитальный и дизайнерский ремонт квартир под ключ с гарантией качества."
  },
  {
    icon: <Forklift className="h-10 w-10 text-secondary" />,
    title: "Поставка материалов",
    description: "Работаем напрямую с производителями, что гарантирует лучшие цены на строительные материалы."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-secondary" />,
    title: "Дизайн-проекты",
    description: "Разработка индивидуальных дизайн-проектов с учетом всех пожеланий и требований заказчика."
  },
  {
    icon: <Construction className="h-10 w-10 text-secondary" />,
    title: "Инженерные системы",
    description: "Проектирование и монтаж всех инженерных систем: электрика, сантехника, отопление, вентиляция."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем полный комплекс строительных и отделочных работ для жилых и коммерческих помещений
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
