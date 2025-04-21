import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Construction className="h-6 w-6 text-secondary" />
          <span className="text-xl font-bold">СтройМастер</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">
            Услуги
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-secondary transition-colors">
            Проекты
          </a>
          <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors">
            О компании
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-secondary transition-colors">
            Отзывы
          </a>
          <a href="#contacts" className="text-sm font-medium hover:text-secondary transition-colors">
            Контакты
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm font-medium">+7 (800) 555-35-35</span>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
            Заказать звонок
          </Button>
        </div>
        
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#services" className="py-2 text-sm font-medium hover:text-secondary transition-colors">
              Услуги
            </a>
            <a href="#projects" className="py-2 text-sm font-medium hover:text-secondary transition-colors">
              Проекты
            </a>
            <a href="#about" className="py-2 text-sm font-medium hover:text-secondary transition-colors">
              О компании
            </a>
            <a href="#testimonials" className="py-2 text-sm font-medium hover:text-secondary transition-colors">
              Отзывы
            </a>
            <a href="#contacts" className="py-2 text-sm font-medium hover:text-secondary transition-colors">
              Контакты
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-sm font-medium">+7 (800) 555-35-35</span>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
