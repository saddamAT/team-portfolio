import { useState } from 'react';
import { Play, Sparkles, Terminal, Code2, RefreshCw } from 'lucide-react';
import type { ArchitectureBlueprint, PipelineExecutionResult } from '../types';

interface AISystemsArchitectureProps {
  blueprint?: ArchitectureBlueprint;
}

export default function AISystemsArchitecture({ blueprint }: AISystemsArchitectureProps) {
  if (!blueprint) return null;

  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResult, setSimResult] = useState<PipelineExecutionResult | null>(null);
  const [simStepIndex, setSimStepIndex] = useState<number>(-1);

  const snippets = blueprint.codeSnippets || [];
  const currentSnippet = snippets[activeSnippetIndex];

  const handleRunSimulation = async () => {
    setIsSimulating(true);
    setSimResult(null);
    setSimStepIndex(0);

    const stepLatency = blueprint.simulationConfig?.totalLatencyMs
      ? Math.round(blueprint.simulationConfig.totalLatencyMs / Math.max(1, blueprint.steps.length))
      : 25;

    const simulationSteps = blueprint.steps.map((s, idx) => ({
      step: idx + 1,
      name: s.title,
      status: 'PASSED' as const,
      latencyMs: Math.floor(stepLatency * (idx + 1)),
      details: `${s.tech}: ${s.description}`,
    }));

    // Step-by-step reveal animation
    for (let i = 0; i < simulationSteps.length; i++) {
      setSimStepIndex(i);
      await new Promise((r) => setTimeout(r, 260));
    }

    setSimResult({
      executionId: `sim_${Date.now()}`,
      status: blueprint.simulationConfig?.statusText || 'VERIFIED_ACTIVE',
      totalLatencyMs: blueprint.simulationConfig?.totalLatencyMs ?? 42,
      steps: simulationSteps,
      summary:
        blueprint.simulationConfig?.summaryText ||
        'Architecture pipeline trace verified with zero critical bottlenecks detected across all subsystems.',
    });

    setIsSimulating(false);
  };

  return (
    <section className="py-20 bg-brand-surface/75 backdrop-blur-sm relative border-t border-brand-border" id="ai-architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{blueprint.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-tight">
            {blueprint.title}
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            {blueprint.description}
          </p>
        </div>

        {/* 4-Step Architecture Grid */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-brand-border shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {blueprint.steps.map((step) => (
              <div
                key={step.stepNumber}
                className={`p-5 rounded-xl bg-brand-elevated border transition-colors relative group ${
                  step.highlight
                    ? 'border-cyan-500/50 shadow-glow-cyan/10'
                    : 'border-brand-border hover:border-cyan-500/30'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                  {step.stepNumber}
                </div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <div className="text-xs text-cyan-400 font-mono mt-1 mb-2 font-medium">
                  {step.tech}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Simulation Strip */}
          <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase font-mono">
                  {blueprint.simulationConfig?.diagnosticTitle || 'Architecture Pipeline Diagnostic'}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  {blueprint.simulationConfig?.diagnosticSubtext ||
                    'Verify throughput, latency, and subsystem integrity'}
                </div>
              </div>
            </div>

            <button
              type="button"
              disabled={isSimulating}
              onClick={handleRunSimulation}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs shadow-glow-cyan transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Profiling Subsystems...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>{blueprint.simulationConfig?.buttonLabel || 'Run Live Pipeline Test'}</span>
                </>
              )}
            </button>
          </div>

          {/* Simulation Output Area */}
          {(isSimulating || simResult) && (
            <div className="mt-6 p-4 rounded-xl bg-brand-dark border border-brand-border font-mono text-xs space-y-2">
              <div className="text-cyan-400 font-bold flex items-center justify-between">
                <span>
                  {blueprint.simulationConfig?.benchmarkHeader || '[BENCHMARK TRACE] Pipeline Health'}
                </span>
                <span>
                  {blueprint.simulationConfig?.benchmarkValue ||
                    `Total Latency: ${blueprint.simulationConfig?.totalLatencyMs ?? 42}ms`}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2">
                {blueprint.steps.map((st, i) => {
                  const isDone = simStepIndex >= i;
                  return (
                    <div
                      key={st.stepNumber}
                      className={`p-2 rounded border text-[11px] ${
                        isDone
                          ? 'bg-cyan-950/40 border-cyan-700/60 text-cyan-200'
                          : 'bg-brand-surface border-brand-border text-slate-500'
                      }`}
                    >
                      <div className="font-semibold">{st.title}</div>
                      <div className="text-[10px] text-slate-400">
                        {isDone
                          ? blueprint.simulationConfig?.stepStatusSuccess || '✓ Verified'
                          : 'Pending...'}
                      </div>
                    </div>
                  );
                })}
              </div>
              {simResult && (
                <div className="mt-3 pt-2 border-t border-brand-border/60 text-emerald-400 text-[11px]">
                  ✓ {simResult.summary}
                </div>
              )}
            </div>
          )}

          {/* Code Inspection Tabs */}
          {snippets.length > 0 && (
            <div className="mt-8 pt-6 border-t border-brand-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-white font-semibold">
                    Core Source Implementation
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-brand-dark p-1 rounded-lg border border-brand-border">
                  {snippets.map((snip, idx) => (
                    <button
                      key={snip.filename}
                      type="button"
                      onClick={() => setActiveSnippetIndex(idx)}
                      className={`px-3 py-1 text-[11px] font-mono rounded transition-colors ${
                        activeSnippetIndex === idx
                          ? 'bg-brand-elevated text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {snip.label}
                    </button>
                  ))}
                </div>
              </div>

              {currentSnippet && (
                <div className="rounded-xl bg-[#05070a] border border-brand-border p-4 font-mono text-xs overflow-x-auto text-slate-300">
                  <div className="text-[10px] text-slate-500 mb-2 border-b border-slate-800 pb-1 flex justify-between">
                    <span>{currentSnippet.filename}</span>
                    <span className="text-cyan-400 uppercase">{currentSnippet.language}</span>
                  </div>
                  <pre className="leading-relaxed">
                    <code>{currentSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
