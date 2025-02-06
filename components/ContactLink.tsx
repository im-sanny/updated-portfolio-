import { ContactLinkProps } from '@/app/types';
import { ArrowRight } from 'lucide-react';

export const ContactLink: React.FC<ContactLinkProps> = ({
  label,
  icon: Icon,
  pattern,
  link,
}) => (
  <a
    href={link}
    target='_blank'
    className="block p-4 border border-black hover:bg-black hover:text-blue-500 transition-colors group relative overflow-hidden"
  >
    <div className="flex items-center justify-between relative z-10">
      <div className="flex items-center gap-4">
        <Icon size={20} />
        <span>{label}</span>
      </div>
      <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
    </div>
    <div
      className="absolute inset-0 bg-black transition-transform duration-500 -translate-x-full group-hover:translate-x-0"
      style={{ background: pattern }}
    />
  </a>
);
