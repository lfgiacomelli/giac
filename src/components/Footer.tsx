import { Code2, Linkedin, Github, Instagram } from 'lucide-react';

import giac from '../assets/images/giac.png';

const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex flex-col">
                <img src={giac} />
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Transformamos ideias em soluções digitais inovadoras.
              Desenvolvimento de software sob medida para empresas que
              buscam excelência e resultados.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="text-sm text-white ">E-mail Desenvolvedor | Marketing</li>
              <li className="flex flex-wrap items-center gap-1 text-sm">
                <a
                  href="mailto:lfgiacomellirodrigues@gmail.com"
                  className="hover:text-primary transition-colors whitespace-nowrap"
                >
                  lfgiacomellirodrigues@gmail.com
                </a>
                <span className="text-muted-foreground">|</span>
                <a
                  href="mailto:matheuseducarvalhosant@gmail.com"
                  className="hover:text-primary transition-colors whitespace-nowrap"
                >
                  matheuseducarvalhosant@gmail.com
                </a>
              </li>


              <li className="text-sm text-white ">Telefone Desenvolvedor | Marketing</li>
              <li className="font-medium">(18) 98197-1147 | (18) 99115-1383</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GIAC Software Development. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Desenvolvido com</span>
            <Code2 className="w-4 h-4 text-primary" />
            <span>por GIAC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
