type ClientCardProps = {
  name: string;
  description: string;
  highlights: string[];
};

export const ClientCard = ({ name, description, highlights }: ClientCardProps) => {
  return (
    <div className="rounded-3xl border border-border/50 bg-background/80 backdrop-blur-sm p-6 md:p-8 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
      
      <h4 className="text-xl md:text-2xl font-bold mb-3 text-gradient">
        {name}
      </h4>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="space-y-3">
        {highlights.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
            <p className="text-sm text-foreground">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};