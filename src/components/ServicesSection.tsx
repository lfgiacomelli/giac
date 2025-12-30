import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe, Layers, Cloud, Smartphone, Plug, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações web modernas, responsivas e otimizadas para performance.',
  },
  {
    icon: Layers,
    title: 'Sistemas Sob Medida',
    description: 'Soluções personalizadas para automatizar e otimizar os processos do seu negócio.',
  },
  {
    icon: Cloud,
    title: 'Plataformas SaaS',
    description: 'Desenvolvimento de produtos SaaS escaláveis e prontos para o mercado.',
  },
  {
    icon: Smartphone,
    title: 'Aplicações Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional.',
  },
  {
    icon: Plug,
    title: 'Integrações e APIs',
    description: 'Conectamos sistemas e desenvolvemos APIs robustas para sua infraestrutura.',
  },
];

export const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções completas para{' '}
            <span className="text-gradient">sua empresa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços de desenvolvimento para 
            atender todas as necessidades digitais do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                'group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow cursor-pointer',
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
