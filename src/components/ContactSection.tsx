import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Lottie from 'lottie-react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

import techStartupAnimation from '../assets/animations/techstartup.json';
export const ContactSection = () => {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contato"
      className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div
            ref={infoRef}
            className={cn(
              'transition-all duration-700',
              infoVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            )}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contato
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Vamos construir algo{' '}
              <span className="text-gradient">incrível</span> juntos?
            </h2>

            <p className="text-muted-foreground text-lg mb-10">
              Conte-nos sobre seu projeto. Nossa equipe entrará em contato para
              entender suas necessidades e propor a melhor solução.
            </p>

            <div className="space-y-6">
              <ContactItem icon={Mail} label="E-mail" value="lfgiacomellirodrigues@gmail.com" />
              <ContactItem icon={Phone} label="Telefone" value="(18) 98197-1147" />
              <ContactItem icon={MapPin} label="Localização" value="Presidente Prudente - SP" />
            </div>
          </div>

          <div
            ref={formRef}
            className={cn(
              'relative transition-all duration-700',
              formVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            )}
          >
            <Lottie
              animationData={techStartupAnimation}
              loop
              className="
    hidden lg:block
    absolute
    -top-24
    -right-40
    w-96
    opacity-40
    pointer-events-none
  "
            />


            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-4 relative z-10"
            >
              <Input name="name" placeholder="Seu nome" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}

              <Input name="email" type="email" placeholder="Seu e-mail" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}

              <Textarea name="message" placeholder="Sua mensagem" rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}

              <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

