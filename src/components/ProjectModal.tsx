import React, { useState } from 'react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  X, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  BarChart3, 
  Terminal, 
  Play, 
  Sliders, 
  Database
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'playground'>('overview');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Playground state for Sentiment analysis (SentiForge)
  const [sentimentInput, setSentimentInput] = useState<string>(
    'The automated model evaluation pipeline generated exceptional accuracy and reduced latency significantly.'
  );
  const [sentimentResult, setSentimentResult] = useState<{
    score: number;
    label: string;
    confidence: number;
    tokens: number;
  } | null>(null);

  // Playground state for House Price Prediction
  const [houseArea, setHouseArea] = useState<number>(1850);
  const [houseBedrooms, setHouseBedrooms] = useState<number>(3);
  const [selectedModel, setSelectedModel] = useState<'ridge' | 'rf' | 'cart'>('rf');

  if (!project) return null;

  // Simulate local sentiment inference
  const runSentimentTest = () => {
    const text = sentimentInput.toLowerCase();
    let score = 0.5;
    const positiveWords = ['exceptional', 'great', 'reduced', 'accuracy', 'improved', 'fast', 'intelligent', 'clean', 'excellent', 'superior'];
    const negativeWords = ['slow', 'error', 'defect', 'failed', 'poor', 'bad', 'high latency', 'loss', 'bug'];

    let posMatches = 0;
    let negMatches = 0;

    positiveWords.forEach((w) => {
      if (text.includes(w)) posMatches++;
    });
    negativeWords.forEach((w) => {
      if (text.includes(w)) negMatches++;
    });

    if (posMatches > negMatches) {
      score = Math.min(0.96, 0.7 + posMatches * 0.08);
    } else if (negMatches > posMatches) {
      score = Math.max(0.12, 0.4 - negMatches * 0.1);
    } else {
      score = 0.52;
    }

    setSentimentResult({
      score,
      label: score > 0.6 ? 'Positive' : score < 0.4 ? 'Negative' : 'Neutral',
      confidence: Math.round((Math.abs(score - 0.5) * 2 + 0.6) * 100) / 100,
      tokens: sentimentInput.split(/\s+/).filter(Boolean).length,
    });
  };

  // Simulate House price calculation
  const calculateHousePrice = () => {
    const basePrice = 85000;
    const sqftFactor = 140;
    const bedFactor = 18000;
    const rawVal = basePrice + houseArea * sqftFactor + houseBedrooms * bedFactor;
    
    if (selectedModel === 'rf') {
      return {
        predicted: Math.round(rawVal * 1.03),
        r2: '0.892',
        mae: '$12,400',
        rmse: '$16,800',
        speed: '18ms',
      };
    } else if (selectedModel === 'ridge') {
      return {
        predicted: Math.round(rawVal * 0.98),
        r2: '0.841',
        mae: '$15,200',
        rmse: '$19,400',
        speed: '4ms',
      };
    } else {
      return {
        predicted: Math.round(rawVal * 0.95),
        r2: '0.810',
        mae: '$17,100',
        rmse: '$22,500',
        speed: '8ms',
      };
    }
  };

  const housePrediction = calculateHousePrice();

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-container"
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl my-8 overflow-hidden flex flex-col max-h-[90vh] transition-all ${
          isDark 
            ? 'bg-[#0e0e0e] border-neutral-800 text-white shadow-black/80' 
            : 'bg-white border-neutral-200 text-neutral-950 shadow-2xl shadow-neutral-500/20'
        }`}
      >
        {/* Modal Header */}
        <div className={`p-5 sm:p-6 border-b flex items-start justify-between gap-4 shrink-0 ${
          isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-neutral-200 bg-neutral-50/80'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border font-bold ${
                isDark ? 'bg-neutral-900 border-neutral-700 text-neutral-200' : 'bg-neutral-100 border-neutral-300 text-neutral-800'
              }`}>
                PROJECT {project.number}
              </span>
              <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {project.categories.join(' • ')}
              </span>
            </div>
            <h2 className={`font-display text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              {project.title}
            </h2>
            <p className={`text-xs sm:text-sm font-mono mt-1 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {project.tagline}
            </p>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded-lg border transition-colors ${
              isDark 
                ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border-neutral-800' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-black border-neutral-300'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className={`flex border-b px-6 gap-2 shrink-0 ${
          isDark ? 'border-neutral-800 bg-black/60' : 'border-neutral-200 bg-neutral-100/60'
        }`}>
          <button
            id="modal-tab-overview"
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 text-xs font-mono font-medium border-b-2 transition-all ${
              activeTab === 'overview'
                ? isDark 
                  ? 'border-white text-white font-bold' 
                  : 'border-black text-black font-bold'
                : isDark 
                  ? 'border-transparent text-neutral-400 hover:text-white' 
                  : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            Overview &amp; Problem
          </button>
          <button
            id="modal-tab-architecture"
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 text-xs font-mono font-medium border-b-2 transition-all ${
              activeTab === 'architecture'
                ? isDark 
                  ? 'border-white text-white font-bold' 
                  : 'border-black text-black font-bold'
                : isDark 
                  ? 'border-transparent text-neutral-400 hover:text-white' 
                  : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            Architecture &amp; Features
          </button>
          {project.playgroundType && (
            <button
              id="modal-tab-playground"
              onClick={() => setActiveTab('playground')}
              className={`py-3 px-3 text-xs font-mono font-medium border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'playground'
                  ? isDark 
                    ? 'border-white text-white font-bold' 
                    : 'border-black text-black font-bold'
                  : isDark 
                    ? 'border-transparent text-neutral-400 hover:text-white' 
                    : 'border-transparent text-neutral-600 hover:text-black'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Playground</span>
            </button>
          )}
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className={`p-5 sm:p-6 overflow-y-auto space-y-6 text-sm ${
          isDark ? 'text-neutral-300' : 'text-neutral-700'
        }`}>
          
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-neutral-900/70 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-1.5 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-800'
                  }`}>
                    Problem Statement
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-neutral-900/70 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-1.5 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-800'
                  }`}>
                    Technical Solution
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Approach Steps */}
              <div>
                <h4 className={`font-mono text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <Cpu className="w-4 h-4" />
                  <span>Engineering Approach &amp; Implementation</span>
                </h4>
                <div className="space-y-2.5">
                  {(project.approach || []).map((step, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-lg border ${
                        isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full border text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold ${
                        isDark 
                          ? 'bg-neutral-800 border-neutral-700 text-white' 
                          : 'bg-neutral-200 border-neutral-300 text-black'
                      }`}>
                        {idx + 1}
                      </span>
                      <p className="text-xs leading-normal">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics / Benchmark */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className={`font-mono text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    <BarChart3 className="w-4 h-4" />
                    <span>Project Technical Indicators</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(project.metrics || []).map((m, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border text-center ${
                          isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                        }`}
                      >
                        <span className={`block text-[10px] font-mono uppercase ${
                          isDark ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                          {m.label}
                        </span>
                        <span className={`block text-sm font-bold font-mono mt-0.5 ${
                          isDark ? 'text-white' : 'text-black'
                        }`}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & FEATURES */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Breakdown */}
              <div>
                <h4 className={`font-mono text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <Layers className="w-4 h-4" />
                  <span>System Architecture Breakdown</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(project.architecture || []).map((arch, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border font-mono text-xs flex items-start gap-2 ${
                        isDark ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                      }`}
                    >
                      <span className="font-bold shrink-0">▸</span>
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies List */}
              <div>
                <h4 className={`font-mono text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <Terminal className="w-4 h-4" />
                  <span>Technologies &amp; Libraries Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(project.tech || []).map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                        isDark 
                          ? 'bg-neutral-900 border-neutral-700 text-neutral-200' 
                          : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className={`font-mono text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Platform Capabilities</span>
                </h4>
                <div className="space-y-2">
                  {(project.features || []).map((feat, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs ${
                        isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE PLAYGROUND */}
          {activeTab === 'playground' && (
            <div className="space-y-5">
              {/* Sentiment Analyzer Playground (SentiForge) */}
              {project.id === 'sentiforge' && (
                <div className={`p-4 rounded-xl border space-y-4 ${
                  isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>SentiForge Text Sentiment Inference Simulator</span>
                    </span>
                    <span className={`text-[10px] font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      NLP Scoring Module
                    </span>
                  </div>

                  <div>
                    <label className={`block text-[11px] font-mono mb-1.5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Input text sample for polarity analysis:
                    </label>
                    <textarea
                      rows={3}
                      value={sentimentInput}
                      onChange={(e) => setSentimentInput(e.target.value)}
                      className={`w-full p-3 rounded-lg border text-xs font-mono focus:outline-none ${
                        isDark 
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-white' 
                          : 'bg-white border-neutral-300 text-black focus:border-black'
                      }`}
                      placeholder="Type any sentence to evaluate polarity..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={runSentimentTest}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold border transition-all active:scale-95 ${
                        isDark 
                          ? 'bg-white text-black border-white hover:bg-neutral-200' 
                          : 'bg-black text-white border-black hover:bg-neutral-800'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Run Sentiment Inference</span>
                    </button>

                    <div className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      Tokens: {sentimentInput.split(/\s+/).filter(Boolean).length}
                    </div>
                  </div>

                  {sentimentResult && (
                    <div className={`p-3.5 rounded-lg border space-y-2 mt-3 ${
                      isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
                    }`}>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Classification Result:</span>
                        <span
                          className={`font-bold px-2 py-0.5 rounded text-[11px] border ${
                            isDark 
                              ? 'bg-neutral-900 text-white border-neutral-700' 
                              : 'bg-neutral-100 text-black border-neutral-300'
                          }`}
                        >
                          {sentimentResult.label} (Score: {sentimentResult.score.toFixed(2)})
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className={`flex justify-between text-[10px] font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          <span>Confidence Level</span>
                          <span>{(sentimentResult.confidence * 100).toFixed(0)}%</span>
                        </div>
                        <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
                          <div
                            className={`h-full transition-all duration-500 ${isDark ? 'bg-white' : 'bg-black'}`}
                            style={{ width: `${sentimentResult.confidence * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* House Price Prediction Playground */}
              {project.id === 'house-price-prediction' && (
                <div className={`p-4 rounded-xl border space-y-4 ${
                  isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Interactive ML Valuation Model Evaluator</span>
                    </span>
                    <span className={`text-[10px] font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      Scikit-learn Multi-Model
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[11px] font-mono mb-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Property Area: <span className="font-bold">{houseArea} sq ft</span>
                      </label>
                      <input
                        type="range"
                        min="700"
                        max="4500"
                        step="50"
                        value={houseArea}
                        onChange={(e) => setHouseArea(Number(e.target.value))}
                        className={`w-full ${isDark ? 'accent-white' : 'accent-black'}`}
                      />
                    </div>

                    <div>
                      <label className={`block text-[11px] font-mono mb-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Bedrooms / Rooms: <span className="font-bold">{houseBedrooms}</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="6"
                        step="1"
                        value={houseBedrooms}
                        onChange={(e) => setHouseBedrooms(Number(e.target.value))}
                        className={`w-full ${isDark ? 'accent-white' : 'accent-black'}`}
                      />
                    </div>
                  </div>

                  {/* Model Selector */}
                  <div>
                    <label className={`block text-[11px] font-mono mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Select Regressor Algorithm:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['rf', 'ridge', 'cart'] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setSelectedModel(m)}
                          className={`p-2 rounded-lg text-xs font-mono border transition-all ${
                            selectedModel === m
                              ? isDark 
                                ? 'bg-white text-black font-bold border-white' 
                                : 'bg-black text-white font-bold border-black'
                              : isDark 
                                ? 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white' 
                                : 'bg-white border-neutral-300 text-neutral-600 hover:text-black'
                          }`}
                        >
                          {m === 'rf' ? 'Random Forest' : m === 'ridge' ? 'Ridge Regressor' : 'CART Tree'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Prediction Results Box */}
                  <div className={`p-3.5 rounded-lg border space-y-3 ${
                    isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Estimated Valuation:
                      </span>
                      <span className={`text-base font-bold font-mono ${isDark ? 'text-white' : 'text-black'}`}>
                        ${housePrediction.predicted.toLocaleString()}
                      </span>
                    </div>

                    <div className={`grid grid-cols-3 gap-2 pt-2 border-t text-center text-[10px] font-mono ${
                      isDark ? 'border-neutral-800' : 'border-neutral-200'
                    }`}>
                      <div className={`p-1.5 rounded ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
                        <span className={`block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>R² Score</span>
                        <span className="font-bold">{housePrediction.r2}</span>
                      </div>
                      <div className={`p-1.5 rounded ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
                        <span className={`block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>MAE Benchmark</span>
                        <span className="font-bold">{housePrediction.mae}</span>
                      </div>
                      <div className={`p-1.5 rounded ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
                        <span className={`block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Inference Speed</span>
                        <span className="font-bold">{housePrediction.speed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Predictra AI Data Profiling Preview */}
              {project.id === 'predictra-ai' && (
                <div className={`p-4 rounded-xl border space-y-3 ${
                  isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <span className="text-xs font-mono font-bold flex items-center gap-2">
                    <Database className="w-3.5 h-3.5" />
                    <span>Predictra AI Automated Profiling Inspector</span>
                  </span>
                  <p className={`text-xs leading-normal ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Automated dataset health check sample generated by Predictra engine:
                  </p>
                  <div className="overflow-x-auto">
                    <table className={`w-full text-left font-mono text-xs border ${
                      isDark ? 'border-neutral-800' : 'border-neutral-200'
                    }`}>
                      <thead className={isDark ? 'bg-neutral-950 text-neutral-400 border-b border-neutral-800' : 'bg-neutral-100 text-neutral-700 border-b border-neutral-200'}>
                        <tr>
                          <th className="p-2">Feature</th>
                          <th className="p-2">Data Type</th>
                          <th className="p-2">Missing %</th>
                          <th className="p-2">Variance</th>
                          <th className="p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${isDark ? 'divide-neutral-800 text-neutral-300' : 'divide-neutral-200 text-neutral-800'}`}>
                        <tr>
                          <td className="p-2 font-bold">feature_x1 (numerical)</td>
                          <td className="p-2">float64</td>
                          <td className="p-2">0.0%</td>
                          <td className="p-2">Normal</td>
                          <td className="p-2 font-bold">Ready</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold">category_type (str)</td>
                          <td className="p-2">object</td>
                          <td className="p-2">0.2%</td>
                          <td className="p-2">One-Hot Encoded</td>
                          <td className="p-2 font-bold">Cleaned</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold">target_metric (int)</td>
                          <td className="p-2">int64</td>
                          <td className="p-2">0.0%</td>
                          <td className="p-2">Balanced</td>
                          <td className="p-2 font-bold">Target Label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* EcoTwin Intelligence Sensor Telemetry */}
              {project.id === 'ecotwin-intelligence' && (
                <div className={`p-4 rounded-xl border space-y-3 ${
                  isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <span className="text-xs font-mono font-bold flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>EcoTwin Sensor Telemetry &amp; Anomaly Detector</span>
                  </span>
                  <p className={`text-xs leading-normal ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Environmental streams are parsed into time-series buckets to calculate variance from ecological baselines:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-xs">
                    <div className={`p-2 rounded border ${isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}>
                      <span className={`text-[10px] block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Carbon Intensity</span>
                      <span className="font-bold mt-1 block">-18.4% (Optimal)</span>
                    </div>
                    <div className={`p-2 rounded border ${isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}>
                      <span className={`text-[10px] block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Energy Deviation</span>
                      <span className="font-bold mt-1 block">±1.2% Baseline</span>
                    </div>
                    <div className={`p-2 rounded border ${isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}>
                      <span className={`text-[10px] block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Sensor Nodes</span>
                      <span className="font-bold mt-1 block">12 Active Feeds</span>
                    </div>
                    <div className={`p-2 rounded border ${isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}>
                      <span className={`text-[10px] block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Anomaly Alarm</span>
                      <span className="font-bold mt-1 block">Nominal (0)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer: Action Links */}
        <div className={`p-4 sm:p-5 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${
          isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-neutral-200 bg-neutral-50/80'
        }`}>
          <div className="flex items-center gap-2">
            <a
              id={`modal-github-${project.id}`}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-xs font-mono font-semibold transition-colors ${
                isDark 
                  ? 'bg-neutral-900 hover:bg-neutral-800 border-neutral-700 text-white' 
                  : 'bg-white hover:bg-neutral-100 border-neutral-300 text-black shadow-sm'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source on GitHub</span>
            </a>

            <a
              id={`modal-live-demo-${project.id}`}
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-xs font-mono font-bold transition-colors ${
                isDark 
                  ? 'bg-white text-black border-white hover:bg-neutral-200' 
                  : 'bg-black text-white border-black hover:bg-neutral-800'
              }`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            id="modal-close-bottom-btn"
            onClick={onClose}
            className={`text-xs font-mono px-3 py-1.5 transition-colors ${
              isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
