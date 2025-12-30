import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Clock, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Clock,
    title: 'Experiência',
    description: 'Anos de experiência desenvolvendo soluções robustas e escaláveis para empresas de diversos segmentos.',
  },
  {
    icon: Shield,
    title: 'Tecnologia',
    description: 'Utilizamos as tecnologias mais modernas do mercado para garantir performance e segurança.',
  },
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Compromisso com excelência em cada linha de código, seguindo as melhores práticas de desenvolvimento.',
  },
  {
    icon: Users,
    title: 'Parceria',
    description: 'Trabalhamos lado a lado com nossos clientes para entender e atender suas necessidades específicas.',
  },
];

export const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="quem-somos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            ref={sectionRef}
            className={cn(
              'transition-all duration-700',
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Impulsionando negócios através da{' '}
              <span className="text-gradient">tecnologia</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A GIAC Software Development é uma empresa especializada em desenvolvimento 
              de software sob medida. Transformamos ideias em soluções digitais inovadoras 
              que geram valor real para nossos clientes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa equipe multidisciplinar une expertise técnica e visão estratégica 
              para entregar sistemas robustos, escaláveis e alinhados aos objetivos 
              do seu negócio.
            </p>
          </div>

          {/* Feature Cards */}
          <div
            ref={cardsRef}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  'group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow',
                  cardsVisible
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
