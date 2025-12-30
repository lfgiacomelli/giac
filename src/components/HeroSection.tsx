import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Atom,
  Smartphone,
  Server,
  Braces,
  Database
} from 'lucide-react';

import giac from '../assets/images/giac.png';

export const HeroSection = () => {
  const technologies = [
    {
      name: "ReactJS",
      icon: Atom,
    },
    {
      name: "React Native",
      icon: Smartphone,
    },
    {
      name: "NodeJS",
      icon: Server,
    },
    {
      name: "TypeScript",
      icon: Braces,
    },
    {
      name: "PHP",
      icon: Code2,
    },
    {
      name: "PostgreSQL",
      icon: Database,
    },
    {
      name: "MySQL",
      icon: Database,
    },
  ];
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow delay-500" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <img
            src={giac}
            alt="GIAC"
            className="w-40 sm:w-48 md:w-64 lg:w-72 xl:w-80 object-contain"
          />
        </div>


        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Transformando ideias em soluções digitais
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in delay-100">
            Desenvolvimento de{' '}
            <span className="text-gradient">Software</span>
            <br />
            Sob Medida
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
            Criamos sistemas personalizados, aplicações SaaS e soluções digitais
            modernas que impulsionam o crescimento do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <Button
              variant="hero"
              onClick={() => document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="heroOutline"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entrar em Contato
            </Button>
          </div>

          <div className="mt-16 animate-fade-in delay-400">
            <p className="text-sm text-muted-foreground mb-4">
              Tecnologias que dominamos
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {technologies.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
