import { cn } from '@/lib/utils';

import luisFelipe from '../assets/images/luis_felipe.png';

export const TeamSection = () => {
    return (
        <section
            id="equipe"
            className="relative py-24 lg:py-32 overflow-hidden bg-gradient-hero"
        >
            {/* Background effects */}
            <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-primary/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Fundador
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Quem está por trás da{' '}
                        <span className="text-gradient">Giac</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Conheça o profissional responsável por idealizar, desenvolver e
                        entregar soluções digitais completas.
                    </p>
                </div>

                {/* Profile */}
                <div className="flex flex-col lg:flex-row items-center gap-14 justify-center">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow" />

                        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden glass shadow-glow">
                            <img
                                src={luisFelipe}
                                alt="Luís Felipe Giacomelli Rodrigues"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="max-w-xl text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                            Luís Felipe Giacomelli Rodrigues
                        </h3>

                        <span className="text-primary text-sm font-medium uppercase tracking-wide block mb-5">
                            Software Developer Full Stack · Gestor de Tráfego · Fundador
                        </span>

                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                            Desenvolvedor full stack com foco na criação de soluções
                            digitais completas, atuando desde a definição da arquitetura
                            backend até a construção de interfaces modernas e performáticas
                            para web e mobile. Fundador da Giac, onde transforma ideias em
                            produtos digitais escaláveis, funcionais e orientados a
                            resultados.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
