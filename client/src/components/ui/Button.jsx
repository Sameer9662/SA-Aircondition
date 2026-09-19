import { cn } from '../../utils/cn';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[var(--teal)] hover:bg-[var(--deep-teal)] text-white',
    secondary: 'bg-[var(--bg-card)] hover:bg-[var(--ice-blue)] text-[var(--deep-teal)] border border-[var(--cool-blue)]',
    outline: 'bg-transparent border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white'
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
