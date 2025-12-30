import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Sistema ERP Integrado',
    description: 'Plataforma completa de gestão empresarial com módulos de vendas, estoque, financeiro e RH.',
    type: 'Sistema Empresarial',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Marketplace B2B',
    description: 'Plataforma de e-commerce especializada para transações entre empresas com gestão de pedidos.',
    type: 'E-commerce',
    tags: ['Next.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'App de Delivery',
    description: 'Aplicativo mobile completo para delivery com rastreamento em tempo real e pagamentos.',
    type: 'Aplicativo Mobile',
    tags: ['React Native', 'Firebase', 'Maps'],
  },
  {
    title: 'Dashboard Analytics',
    description: 'Painel de análise de dados com visualizações interativas e relatórios automatizados.',
    type: 'Business Intelligence',
    tags: ['Vue.js', 'Python', 'D3.js'],
  },
];

export const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projetos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

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
            Projetos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projetos que{' '}
            <span className="text-gradient">entregamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos 
            empresas a alcançarem seus objetivos através da tecnologia.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                'group relative rounded-2xl overflow-hidden bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow',
                projectsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                  {project.type}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
