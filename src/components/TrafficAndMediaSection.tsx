import { useEffect, useMemo, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import {
  Megaphone,
  BarChart3,
  Camera,
  TrendingUp,
  Instagram,
  Target,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  LineChart,
  Sparkles,
} from 'lucide-react';

export const TrafficAndMediaSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInView = useInView(chartRef, { once: true, margin: '-80px' });

  const services = [
    {
      icon: Megaphone,
      title: 'Gestão de Tráfego Pago',
      description:
        'Estruturamos, segmentamos e otimizamos campanhas no Meta Ads com foco em alcance qualificado, geração de demanda e crescimento consistente.',
    },
    {
      icon: Instagram,
      title: 'Gestão de Mídias Sociais',
      description:
        'Organizamos a presença digital da marca com planejamento estratégico, constância de comunicação e fortalecimento de posicionamento.',
    },
    {
      icon: Camera,
      title: 'Criação de Conteúdo',
      description:
        'Desenvolvemos criativos, peças visuais e conteúdos estratégicos que conectam identidade, autoridade e performance.',
    },
    {
      icon: BarChart3,
      title: 'Análise de Performance',
      description:
        'Monitoramos métricas, comportamento de campanha e oportunidades de escala para evoluir continuamente os resultados.',
    },
  ];

  const highlights = [
    'Estratégias personalizadas de acordo com o perfil de cada negócio',
    'Criativos pensados para conversão, autoridade e retenção',
    'Campanhas com foco em resultado real e otimização contínua',
    'Posicionamento digital consistente e profissional',
  ];

  const clientCases = [
    {
      name: 'StellaBoats',
      segment: 'Locação de embarcações',
      description:
        'Atuação focada em posicionamento digital e campanhas estratégicas para geração de leads qualificados no segmento náutico, fortalecendo presença e percepção de valor da marca.',
      highlights: [
        'Captação de leads qualificados',
        'Fortalecimento de presença digital',
        'Campanhas orientadas à conversão',
      ],
    },
    {
      name: 'The Wash Experience',
      segment: 'Estética automotiva premium',
      description:
        'Estratégia combinando gestão de mídias sociais, criação de conteúdo e tráfego pago para consolidar a autoridade da marca e ampliar sua visibilidade comercial.',
      highlights: [
        'Conteúdo visual com padrão premium',
        'Posicionamento de marca mais sólido',
        'Maior alcance e reconhecimento digital',
      ],
    },
  ];

  const performanceData = [
    { label: 'Reconhecimento de Marca', value: 92 },
    { label: 'Qualidade dos Criativos', value: 88 },
    { label: 'Otimização de Campanhas', value: 95 },
    { label: 'Consistência Digital', value: 86 },
  ];

  return (
    <section
      id="marketing"
      className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-[260px] w-[260px] rounded-full bg-primary/5 blur-[100px] md:left-0 md:h-[360px] md:w-[360px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-[-60px] h-[240px] w-[240px] rounded-full bg-primary/10 blur-[90px] md:right-0 md:h-[320px] md:w-[320px] md:blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <header className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-primary md:text-sm">
              Tráfego Pago • Mídias Sociais • Conteúdo
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Estratégia digital para gerar{' '}
              <span className="text-gradient">posicionamento, alcance e resultado</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
              Atendemos marcas que buscam crescimento com uma operação digital mais
              estratégica. Unimos gestão de tráfego pago, mídias sociais, criação de
              conteúdo e análise de performance para transformar presença digital em
              valor de marca, oportunidade comercial e resultado.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="h-full rounded-[28px] border border-border/50 bg-secondary/30 p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Operação estratégica com foco em crescimento
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Nossa atuação vai além do impulsionamento. Estruturamos a presença
                  digital da empresa com inteligência estratégica, alinhando criativos,
                  conteúdo, campanhas e leitura de dados para gerar mais relevância,
                  autoridade e oportunidades reais de negócio.
                </p>

                <div className="mt-8 space-y-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border/40 bg-background/60 px-4 py-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-foreground md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="h-full rounded-[28px] border border-border/50 bg-background/80 p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8">
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Nossos serviços
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                    Estrutura completa para performance digital
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
                  {services.map(({ icon: Icon, title, description }) => (
                    <article
                      key={title}
                      className="group rounded-2xl border border-border/40 bg-secondary/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary/30"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <h4 className="text-base font-semibold tracking-tight md:text-lg">
                        {title}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
            <StatCard
              icon={Target}
              title="Meta Ads"
              description="Campanhas estruturadas para reconhecimento, tráfego, geração de leads e conversão com direcionamento estratégico."
            />
            <StatCard
              icon={Camera}
              title="Conteúdo Estratégico"
              description="Criativos desenvolvidos para reforçar posicionamento, comunicar valor e aumentar a eficiência das campanhas."
            />
            <StatCard
              icon={BarChart3}
              title="Otimização Contínua"
              description="Leitura de dados e ajustes constantes para ampliar eficiência, consistência e evolução dos resultados."
            />
          </div>

          <section
            ref={chartRef}
            className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 md:mt-20"
          >
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={chartInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="h-full rounded-[28px] border border-border/50 bg-secondary/30 p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Crescimento visual
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  Evolução constante em performance digital
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Um gráfico visualmente limpo, com leitura executiva e estética premium,
                  reforçando a percepção de crescimento contínuo nas estratégias de tráfego,
                  conteúdo e posicionamento digital.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <MetricHighlight value="+82%" label="Crescimento visual" />
                  <MetricHighlight value="+64%" label="Mais consistência" />
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={chartInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
                className="rounded-[28px] border border-border/50 bg-background/80 p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8"
              >
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Panorama de crescimento
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                      Curva ascendente de performance
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-border/50 bg-secondary/30 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Tendência
                    </p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      Sempre em evolução
                    </p>
                  </div>
                </div>

                <RisingLineChart inView={chartInView} />

                <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border/50 pt-6 sm:grid-cols-3">
                  <SummaryPill title="Tráfego Pago" value="+Performance" />
                  <SummaryPill title="Conteúdo" value="+Autoridade" />
                  <SummaryPill title="Posicionamento" value="+Presença" />
                </div>
              </motion.div>
            </div>
          </section>

          <section className="mt-16 md:mt-20">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-primary md:text-sm">
                Clientes em destaque
              </span>

              <h3 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                Marcas que confiam na nossa estratégia
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Aplicamos uma operação estratégica que conecta tráfego pago,
                posicionamento digital e conteúdo de alto nível para negócios que
                desejam crescer com consistência e autoridade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {clientCases.map((client) => (
                <ClientCaseCard
                  key={client.name}
                  name={client.name}
                  segment={client.segment}
                  description={client.description}
                  highlights={client.highlights}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

type StatCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const StatCard = ({ icon: Icon, title, description }: StatCardProps) => {
  return (
    <article className="rounded-2xl border border-border/50 bg-secondary/20 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 md:p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight md:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
    </article>
  );
};

type ClientCaseCardProps = {
  name: string;
  segment: string;
  description: string;
  highlights: string[];
};

const ClientCaseCard = ({
  name,
  segment,
  description,
  highlights,
}: ClientCaseCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-border/50 bg-background/80 p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 md:p-8">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/5 blur-3xl transition-all duration-300 group-hover:bg-primary/10" />

      <div className="relative z-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {segment}
            </span>
            <h4 className="mt-2 text-2xl font-bold tracking-tight">{name}</h4>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-secondary/30">
            <ArrowUpRight className="h-5 w-5 text-primary" />
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>

        <div className="mt-8 grid gap-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border/40 bg-secondary/20 px-4 py-3"
            >
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p className="text-sm leading-relaxed text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

type AnimatedBarProps = {
  label: string;
  value: number;
  delay?: number;
  inView: boolean;
};

const AnimatedBar = ({ label, value, delay = 0, inView }: AnimatedBarProps) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-foreground md:text-base">
          {label}
        </span>
        <AnimatedNumber value={value} inView={inView} suffix="%" />
      </div>

      <div className="relative h-3 overflow-hidden rounded-full bg-secondary/40">
        <motion.div
          initial={{ width: 0, opacity: 0.7 }}
          animate={inView ? { width: `${value}%`, opacity: 1 } : { width: 0, opacity: 0.7 }}
          transition={{ duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 h-full rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.35)]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full border border-border/40" />
      </div>
    </div>
  );
};

type AnimatedNumberProps = {
  value: number;
  inView: boolean;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

const AnimatedNumber = ({
  value,
  inView,
  duration = 1200,
  prefix = '',
  suffix = '',
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    let animationFrame = 0;
    const startTime = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(value * eased);
      setDisplayValue(start);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, inView]);

  return (
    <span className="text-sm font-semibold text-foreground md:text-base">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

type SummaryMetricProps = {
  value: number;
  label: string;
  inView: boolean;
  prefix?: string;
  suffix?: string;
};

const SummaryMetric = ({
  value,
  label,
  inView,
  prefix = '',
  suffix = '',
}: SummaryMetricProps) => {
  return (
    <div className="rounded-2xl border border-border/40 bg-secondary/20 px-4 py-4">
      <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        <AnimatedNumber
          value={value}
          inView={inView}
          prefix={prefix}
          suffix={suffix}
          duration={1000}
        />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
};

type MiniMetricCardProps = {
  icon: React.ElementType;
  value: number;
  label: string;
  inView: boolean;
  suffix?: string;
};

const MiniMetricCard = ({
  icon: Icon,
  value,
  label,
  inView,
  suffix = '',
}: MiniMetricCardProps) => {
  return (
    <div className="rounded-2xl border border-border/40 bg-background/60 p-4">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <div className="text-2xl font-bold tracking-tight text-foreground">
        <AnimatedNumber value={value} inView={inView} suffix={suffix} duration={1100} />
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
};

type MetricHighlightProps = {
  value: string;
  label: string;
};

const MetricHighlight = ({ value, label }: MetricHighlightProps) => {
  return (
    <div className="rounded-2xl border border-border/40 bg-background/60 px-4 py-4">
      <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {label}
      </p>
    </div>
  );
};

type SummaryPillProps = {
  title: string;
  value: string;
};

const SummaryPill = ({ title, value }: SummaryPillProps) => {
  return (
    <div className="rounded-2xl border border-border/40 bg-secondary/20 px-4 py-4">
      <p className="text-sm uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
};

type RisingLineChartProps = {
  inView: boolean;
};

const RisingLineChart = ({ inView }: RisingLineChartProps) => {
  const linePath =
    'M 20 220 C 70 205, 95 185, 135 170 C 175 155, 210 145, 250 120 C 290 95, 330 82, 370 58 C 405 38, 440 28, 480 18';

  const areaPath = `
    M 20 220
    C 70 205, 95 185, 135 170
    C 175 155, 210 145, 250 120
    C 290 95, 330 82, 370 58
    C 405 38, 440 28, 480 18
    L 480 260
    L 20 260
    Z
  `;

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-border/40 bg-secondary/20 p-4 md:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.22)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />

      <div className="relative z-10 h-[240px] w-full md:h-[300px]">
        <svg
          viewBox="0 0 500 260"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="riseAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.30" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
            </linearGradient>

            <linearGradient id="riseLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
              <stop offset="45%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            </linearGradient>

            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d={areaPath}
            fill="url(#riseAreaGradient)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />

          <motion.path
            d={linePath}
            fill="none"
            stroke="url(#riseLineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.4 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.circle
            cx="480"
            cy="18"
            r="7"
            fill="hsl(var(--primary))"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 1.45, duration: 0.35 }}
          />

          <motion.circle
            cx="480"
            cy="18"
            r="16"
            fill="hsl(var(--primary))"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 0.16 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 1.45, duration: 0.45 }}
          />
        </svg>
      </div>

      <div className="relative z-10 mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Tendência visual
          </p>
          <p className="mt-1 text-base font-semibold text-foreground md:text-lg">
            Crescimento contínuo
          </p>
        </div>

        <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
          <span className="text-sm font-semibold text-primary">+ Alta</span>
        </div>
      </div>
    </div>
  );
};