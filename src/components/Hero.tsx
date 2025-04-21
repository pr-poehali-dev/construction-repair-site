import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')",
        }}
      ></div>
      <div className="absolute inset-0 hero-overlay z-10"></div>
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mb-4">
          Качественный ремонт и отделка под ключ
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
          Создаем идеальные пространства для жизни и работы с 2008 года. 
          Полный спектр строительных и отделочных работ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
            Рассчитать стоимость
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Наши работы
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
