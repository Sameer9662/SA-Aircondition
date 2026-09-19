import { cn } from '../../utils/cn';

const Card = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("bg-[var(--bg-card)] rounded-2xl shadow-sm border border-[var(--ice-blue)] overflow-hidden transition-all hover:shadow-md hover:border-[var(--cool-blue)]", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
