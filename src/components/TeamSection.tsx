import { cn } from '@/lib/utils';

import funcionario1 from '../assets/images/luis_felipe.png';
import funcionario2 from '../assets/images/luis_felipe.png';

export const TeamSection = () => {
    const team = [
        {
            name: 'Luís Felipe Giacomelli Rodrigues',
            role: 'Sofware Developer FullStack | Gestor de Tráfego | Fundador da Giac',
            description:
                'Responsável pelo desenvolvimento de soluções completas, atuando desde a arquitetura do backend até a construção de interfaces modernas e performáticas da Web e Mobile.',
            image: funcionario1,
            reverse: false,
        },
        {
            name: 'Matheus Eduardo Carvalho',
            role: 'Sócio & Analista de Negócios | Automação e Bots',
            description:
                'Responsável pela análise estratégica de perfis e negócios para identificar oportunidades e direcionar soluções digitais personalizadas. Atua no desenvolvimento de bots para Telegram, automações e integrações que otimizam processos e comunicação.',
            image: funcionario2,
            reverse: true,
        },

    ];

    return (
        <section
            id="equipe"
            className="relative py-24 lg:py-32 overflow-hidden bg-gradient-hero"
        >
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Nossa Equipe
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Pessoas por trás das{' '}
                        <span className="text-gradient">soluções</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Conheça os profissionais responsáveis por transformar ideias em
                        produtos digitais de alto nível.
                    </p>
                </div>

                <div className="space-y-24">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className={cn(
                                'flex flex-col lg:flex-row items-center gap-12',
                                member.reverse && 'lg:flex-row-reverse'
                            )}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow" />

                                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden glass shadow-glow">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="max-w-xl text-center lg:text-left">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                                    {member.name}
                                </h3>
                                <span className="text-primary text-sm font-medium uppercase tracking-wide block mb-4">
                                    {member.role}
                                </span>
                                <p className="text-muted-foreground leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
