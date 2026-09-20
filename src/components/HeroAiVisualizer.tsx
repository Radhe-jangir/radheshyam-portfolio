import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Copy, 
  Check, 
  Play, 
  Activity, 
  Zap, 
  ChevronRight,
  Code2,
  Server
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

type WorkbenchTab = 'terminal' | 'inference' | 'pipeline';

interface InferenceScenario {
  id: string;
  name: string;
  model: string;
  input: string;
  latencyMs: number;
  primaryClass: string;
  confidence: number;
  secondaryClass: string;
  secondaryConfidence: number;
  tensorShape: string;
}

const INFERENCE_SCENARIOS: InferenceScenario[] = [
  {
    id: 'churn',
    name: 'Customer Churn Model',
    model: 'XGBoost + SHAP Explainer',
    input: '{ tenure: 24mo, spend: $120/mo, tickets: 4 }',
    latencyMs: 14.8,
    primaryClass: 'High Risk (Churn)',
    confidence: 89.4,
    secondaryClass: 'Retained',
    secondaryConfidence: 10.6,
    tensorShape: '[1, 38] -> [1, 2]',
  },
  {
    id: 'sentiment',
    name: 'LLM Intent Classifier',
    model: 'DistilBERT Multi-Head Attention',
    input: '"Deploy model weights to production cluster"',
    latencyMs: 21.2,
    primaryClass: 'System Execution Intent',
    confidence: 97.8,
    secondaryClass: 'Informational Query',
    secondaryConfidence: 2.2,
    tensorShape: '[1, 12, 768]',
  },
  {
    id: 'anomaly',
    name: 'Data Drift & Anomaly',
    model: 'Autoencoder (Reconstruction Loss)',
    input: 'Packet delta: +480%, entropy: 0.94',
    latencyMs: 8.6,
    primaryClass: 'Nominal Telemetry',
    confidence: 93.1,
    secondaryClass: 'Statistical Outlier',
    secondaryConfidence: 6.9,
    tensorShape: '[64, 128] -> [64, 8]',
  },
];

export const HeroAiVisualizer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState<WorkbenchTab>('terminal');
  const [selectedScenario, setSelectedScenario] = useState<InferenceScenario>(INFERENCE_SCENARIOS[0]);
  const [isRunningInference, setIsRunningInference] = useState(false);
  const [inferenceSuccess, setInferenceSuccess] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const runSampleInference = () => {
    setIsRunningInference(true);
    setInferenceSuccess(false);
    setTimeout(() => {
      setIsRunningInference(false);
      setInferenceSuccess(true);
      setTimeout(() => setInferenceSuccess(false), 2200);
    }, 400);
  };

  const handleCopySnippet = async () => {
    try {
      await navigator.clipboard.writeText('python -m pip install -r requirements.txt && python train.py');
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      id="hero-developer-console"
      className={`relative w-full rounded-xl border transition-all overflow-hidden font-mono text-xs ${
        isDark 
          ? 'bg-neutral-950 border-neutral-800 text-neutral-200 shadow-2xl shadow-black' 
          : 'bg-white border-neutral-300 text-neutral-900 shadow-md'
      }`}
    >
      {/* Console Top Chrome */}
      <div className={`px-4 py-3 border-b flex items-center justify-between gap-3 ${
        isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-neutral-100/80 border-neutral-200'
      }`}>
        {/* Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-neutral-400'}`} />
          <span className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-neutral-400'}`} />
          <span className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-neutral-400'}`} />
          <span className={`ml-2 text-[11px] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            radheshyam@workstation:~
          </span>
        </div>

        {/* View Tabs */}
        <div className={`flex items-center p-0.5 rounded-lg border text-[11px] ${
          isDark ? 'bg-black/60 border-neutral-800' : 'bg-neutral-200/80 border-neutral-300'
        }`}>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded transition-all font-semibold ${
              activeTab === 'terminal'
                ? isDark ? 'bg-white text-black font-bold' : 'bg-black text-white font-bold'
                : isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Terminal
          </button>

          <button
            onClick={() => setActiveTab('inference')}
            className={`px-2.5 py-1 rounded transition-all font-semibold ${
              activeTab === 'inference'
                ? isDark ? 'bg-white text-black font-bold' : 'bg-black text-white font-bold'
                : isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Inference
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 py-1 rounded transition-all font-semibold ${
              activeTab === 'pipeline'
                ? isDark ? 'bg-white text-black font-bold' : 'bg-black text-white font-bold'
                : isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Pipeline
          </button>
        </div>
      </div>

      {/* Tab 1: Terminal Info */}
      {activeTab === 'terminal' && (
        <div className="p-4 sm:p-5 flex flex-col gap-3 leading-relaxed">
          <div>
            <span className={isDark ? 'text-neutral-500' : 'text-neutral-400'}>$ </span>
            <span className="text-white font-bold">radheshyam --whoami</span>
          </div>

          <div className={`p-3 rounded-lg border text-[11px] flex flex-col gap-1.5 ${
            isDark ? 'bg-black/40 border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <div className="flex justify-between">
              <span className="text-neutral-500">DEVELOPER:</span>
              <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">ACADEMICS:</span>
              <span className="text-white">BCA CS @ IGNTU (8.8 / 10 CGPA)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">DISCIPLINE:</span>
              <span className="text-white">AI / Machine Learning &amp; Data Analytics</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">AVAILABILITY:</span>
              <span className="text-white">Open for Internships &amp; Roles</span>
            </div>
          </div>

          <div>
            <span className={isDark ? 'text-neutral-500' : 'text-neutral-400'}>$ </span>
            <span className="text-white font-bold">cat stack.config</span>
          </div>

          <div className={`p-3 rounded-lg border text-[11px] flex flex-col gap-1.5 ${
            isDark ? 'bg-black/40 border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <div>
              <span className="text-neutral-500">CORE: </span>
              <span className="text-white">Python, PyTorch, Scikit-Learn, Pandas, NumPy</span>
            </div>
            <div>
              <span className="text-neutral-500">WEB/API: </span>
              <span className="text-white">FastAPI, TypeScript, React, TailwindCSS, SQL</span>
            </div>
            <div>
              <span className="text-neutral-500">DEV TOOLS: </span>
              <span className="text-white">Docker, Git, Linux, Jupyter, Vite</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 text-[10px] text-neutral-500">
            <span>UPTIME: 99.9%</span>
            <span>SYSTEM: LINUX / X86_64</span>
            <button
              onClick={handleCopySnippet}
              className="text-neutral-400 hover:text-white flex items-center gap-1"
            >
              {copiedSnippet ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
              <span>{copiedSnippet ? 'Copied' : 'Copy Quickstart'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: 2D Inference Lab */}
      {activeTab === 'inference' && (
        <div className="p-4 sm:p-5 flex flex-col gap-3.5">
          {/* Scenario Selector */}
          <div className="flex flex-wrap items-center gap-1.5">
            {INFERENCE_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                onClick={() => setSelectedScenario(sc)}
                className={`px-2.5 py-1 rounded text-[11px] border transition-all ${
                  selectedScenario.id === sc.id
                    ? isDark ? 'bg-white text-black font-bold border-white' : 'bg-black text-white font-bold border-black'
                    : isDark ? 'border-neutral-800 text-neutral-400 hover:text-white' : 'border-neutral-200 text-neutral-600 hover:text-black'
                }`}
              >
                {sc.name}
              </button>
            ))}
          </div>

          {/* Input Preview Box */}
          <div className={`p-3 rounded-lg border text-[11px] ${
            isDark ? 'bg-black/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 mb-2 text-[10px] text-neutral-500 uppercase">
              <span>Model: {selectedScenario.model}</span>
              <span className="text-white font-bold">READY</span>
            </div>
            <div className="text-neutral-300 overflow-x-auto mb-3">
              <span className="text-neutral-500">&gt; Input: </span>
              <code>{selectedScenario.input}</code>
            </div>

            <button
              onClick={runSampleInference}
              disabled={isRunningInference}
              className={`w-full py-2 px-3 rounded font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                isRunningInference
                  ? 'bg-neutral-800 text-neutral-400 cursor-wait'
                  : inferenceSuccess
                    ? 'bg-white text-black font-bold'
                    : isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              {isRunningInference ? (
                <>
                  <Activity className="w-3.5 h-3.5 animate-spin" />
                  <span>Computing Forward Pass...</span>
                </>
              ) : inferenceSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Forward Pass Complete (200 OK)</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Execute Forward Pass</span>
                </>
              )}
            </button>
          </div>

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-3 gap-2">
            <div className={`p-2.5 rounded-lg border ${
              isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <span className="text-[10px] text-neutral-500 block uppercase">Latency</span>
              <span className="text-sm font-bold text-white">{selectedScenario.latencyMs} ms</span>
            </div>

            <div className={`p-2.5 rounded-lg border ${
              isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <span className="text-[10px] text-neutral-500 block uppercase">Confidence</span>
              <span className="text-sm font-bold text-white">{selectedScenario.confidence}%</span>
            </div>

            <div className={`p-2.5 rounded-lg border ${
              isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <span className="text-[10px] text-neutral-500 block uppercase">Dimensions</span>
              <span className="text-[11px] text-white truncate block">{selectedScenario.tensorShape}</span>
            </div>
          </div>

          {/* Classification Confidence Bar */}
          <div className={`p-2.5 rounded-lg border ${
            isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-white font-semibold">{selectedScenario.primaryClass}</span>
              <span className="text-white font-bold">{selectedScenario.confidence}%</span>
            </div>
            <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${selectedScenario.confidence}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Applied Pipeline Workflow */}
      {activeTab === 'pipeline' && (
        <div className="p-4 sm:p-5 flex flex-col gap-2.5">
          <div className="text-[11px] text-neutral-500 mb-1">
            End-to-End Applied ML Workflow:
          </div>

          {[
            {
              stage: '01. Ingestion & Preprocessing',
              tools: 'Pandas • NumPy • Automated EDA',
              desc: 'Structured cleaning, missing value imputation, statistical profiling',
            },
            {
              stage: '02. Feature Engineering & Vectorization',
              tools: 'Scikit-Learn • Word Embeddings',
              desc: 'Dimensionality reduction, PCA, categorical encoding, train/test split',
            },
            {
              stage: '03. Model Training & Validation',
              tools: 'PyTorch • XGBoost • Hyperopt',
              desc: 'Loss optimization, cross-validation sweeps, checkpointing',
            },
            {
              stage: '04. Deployment & API Serving',
              tools: 'FastAPI • Docker • Monitoring',
              desc: 'Low-latency REST endpoints with telemetry and health checks',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className={`p-2.5 rounded-lg border transition-all ${
                isDark ? 'bg-black/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-bold">{step.stage}</span>
                <span className="text-[10px] text-neutral-400">
                  {step.tools}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

