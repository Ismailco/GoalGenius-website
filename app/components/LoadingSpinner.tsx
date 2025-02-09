interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function LoadingSpinner({ size = 'medium', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="h-full w-full rounded-full border-4 border-blue-500/30 border-t-blue-500"></div>
      </div>
    </div>
  );
}

export function LoadingOverlay() {
  return (
    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <LoadingSpinner size="large" />
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="large" className="mb-4" />
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
