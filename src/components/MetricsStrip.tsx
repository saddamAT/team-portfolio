import type { MetricItem } from '../types';
import { METRICS } from '../data/portfolioData';

interface MetricsStripProps {
  metrics?: MetricItem[];
}

export default function MetricsStrip({ metrics = METRICS }: MetricsStripProps) {
  if (!metrics || metrics.length === 0) return null;

  const count = metrics.length;
  // Calculate dynamic grid columns based on count
  const gridClass =
    count === 3
      ? 'grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center'
      : count === 4
      ? 'grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center'
      : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center';

  return (
    <section className="border-y border-brand-border bg-brand-surface/70 backdrop-blur-sm py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={gridClass}>
          {metrics.map((metric, index) => {
            const isGradient = index === 0;
            const isCyan = index === 2;
            const isBlue = index === 4;

            return (
              <div
                key={metric.label}
                className={`p-5 rounded-2xl glass-card border border-brand-border ${
                  count === 5 && index === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight ${
                    isGradient
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'
                      : isCyan
                      ? 'text-cyan-400'
                      : isBlue
                      ? 'text-blue-400'
                      : 'text-white'
                  }`}
                >
                  {metric.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 mt-1.5 font-medium">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <div className="text-[10px] font-mono text-cyan-400/80 mt-1">
                    {metric.subtext}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
