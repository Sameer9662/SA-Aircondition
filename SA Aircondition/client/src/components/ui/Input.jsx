import { cn } from '../../utils/cn';

const Input = ({ label, id, error, className, ...props }) => {
  return (
    <div className="w-full flex flex-col mb-4">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all",
          error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-[var(--ice-blue)] focus:border-[var(--teal)]",
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default Input;
