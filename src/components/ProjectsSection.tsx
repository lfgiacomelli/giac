import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

import zoomx from '../assets/images/zoomx.png';
import copybus from '../assets/images/copybus.png';
import beachduo from '../assets/images/beachduo.png';
import pdv from '../assets/images/caixa-egs.png';

const projects = [
  {
    title: 'ZoomX – Plataforma para Gerenciamento e Solicitação de Mototáxi',
    image: zoomx,
    description: 'Plataforma digital completa, com aplicativo e website para solicitação de corridas e gestão operacional de mototáxi, incluindo controle de motoqueiros, pedidos em tempo real, acompanhamento de viagens e painéis administrativos.',
    type: 'Plataforma de Mobilidade Urbana',
    tags: ['React Native', 'ReactJS', 'NodeJS', 'Typescript', 'PostgreSQL', 'API REST', 'Tempo Real', 'Maps'],
    link: 'https://zoomx-gestao.onrender.com',
  },
  {
    title: 'CopyBus – Plataforma de Gestão de Frotas',
    image: copybus,
    description: 'Plataforma integrada (web e mobile) para gestão empresarial de frotas e transporte, com controle operacional, monitoramento de veículos, gestão de motoristas e integração via API.',
    type: 'Sistema ERP de Transportes',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Node.js',
      'React Native',
      'TypeScript',
      'API REST'
    ],
    link: 'https://github.com/lfgiacomelli/copybus',

  },
  {
    title: 'BeachDuo – Gestão de Arenas de Esportes de Areia',
    image: beachduo,
    description: 'Aplicativo mobile desenvolvido para a gestão completa de torneios em arenas de esportes de areia, foi pensado para funcionar sem acesso à internet. Foi escolhido como melhor aplicativo Etec Professor Milton Gazzetti 2024, eleito por votos.',
    type: 'Aplicativo Mobile de Gestão',
    tags: ['React Native', 'Expo', 'SQLite', 'JavaScript'],
    link: 'https://github.com/lfgiacomelli/beachduo-projeto',

  },
  {
    title: 'PDV EGS 2025 – Sistema de Ponto de Venda',
    image: pdv,
    description: 'Sistema de ponto de venda desenvolvido para o evento ETEC Game Show 2025, voltado ao controle operacional das barracas. Possui cadastro e gerenciamento de produtos (CRUD), registro e histórico de vendas, controle de caixa e geração de relatórios detalhados para acompanhamento financeiro.',
    type: 'Sistema PDV / Gestão de Vendas',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'XAMPP'
    ],
    link: 'https://github.com/caixa-egs-2025'
  },

];
export const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projetos" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Projetos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projetos que <span className="text-gradient">entregamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos
            empresas a alcançarem seus objetivos através da tecnologia.
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                'group relative rounded-2xl overflow-hidden bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow flex flex-col h-full',
                projectsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-primary/20" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                  {project.type}
                </span>

                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target='_blank'
                  className="mt-auto w-full flex items-center justify-center rounded-xl
                             bg-primary text-primary-foreground
                             py-3 font-semibold uppercase tracking-wide
                             transition-all duration-300
                             hover:bg-primary/90 hover:shadow-glow"
                >
                  Acessar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
