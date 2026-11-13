import React, { useState } from 'react'
import { Terminal, Layers, Activity, Play, RefreshCw } from 'lucide-react'
import { useToast } from '../context/ToastContext'

type TabType = 'terminal' | 'config' | 'metrics'

interface TerminalLog {
  text: string
  color?: string
}

export const InteractiveTerminal: React.FC = () => {
  const { addToast } = useToast()
  const [activeTab, setActiveTab] = useState<TabType>('terminal')
  const [userInput, setUserInput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [terminalHistory, setTerminalHistory] = useState<TerminalLog[]>([
    { text: "Aurora Cloud CLI v2.4.0 — Type 'help' or click presets below", color: "text-slate-400" },
    { text: "$ aurora deploy --env=production", color: "text-cyan-400" },
    { text: "✔ Bundled React 18 + Vite (Oxc compiler) in 0.48s", color: "text-emerald-400" },
    { text: "✔ Deployed to 320 edge locations across 6 continents", color: "text-emerald-400" },
    { text: "⚡ Live URL: https://aurora-app.dev (sub-22ms p95 latency)", color: "text-purple-300" }
  ])

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase()
    if (!cleanCmd) return

    setIsRunning(true)
    setTerminalHistory((prev) => [...prev, { text: `$ ${cmd}`, color: "text-cyan-300" }])

    setTimeout(() => {
      if (cleanCmd === 'clear' || cleanCmd === 'cls') {
        setTerminalHistory([])
      } else if (cleanCmd === 'help') {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "Available commands:", color: "text-amber-400" },
          { text: "  aurora deploy   - Build and sync application across 320 edge nodes", color: "text-slate-300" },
          { text: "  aurora test     - Execute full test suite with type-checking in 1.1s", color: "text-slate-300" },
          { text: "  aurora status   - Check health status, active regions, and SSL validity", color: "text-slate-300" },
          { text: "  aurora regions  - List high-speed Anycast Edge points of presence", color: "text-slate-300" },
          { text: "  clear           - Clear terminal history", color: "text-slate-300" }
        ])
      } else if (cleanCmd.includes('deploy')) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "✔ Running pre-flight AST static verification...", color: "text-slate-400" },
          { text: "✔ Compiling 42 TypeScript modules (zero emit errors)... [0.39s]", color: "text-emerald-400" },
          { text: "✔ Uploading artifacts to edge cache with content hashing... [0.55s]", color: "text-emerald-400" },
          { text: "⚡ Production deployment verified! 320/320 nodes healthy.", color: "text-purple-300" }
        ])
        addToast({ title: "Deployment simulated", message: "320 edge nodes synced in 0.94s", type: "success" })
      } else if (cleanCmd.includes('test')) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "PASS src/components/Navbar.test.tsx (8 tests, 12ms)", color: "text-emerald-400" },
          { text: "PASS src/features/EdgeRouting.test.ts (24 tests, 45ms)", color: "text-emerald-400" },
          { text: "PASS src/auth/ZeroTrustVault.test.ts (16 tests, 28ms)", color: "text-emerald-400" },
          { text: "All 48 tests passed in 1.12s. Type-safety 100%.", color: "text-amber-300" }
        ])
        addToast({ title: "Tests passed", message: "48/48 unit & integration tests succeeded", type: "success" })
      } else if (cleanCmd.includes('status')) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "● SYSTEM STATUS: 100% OPERATIONAL", color: "text-emerald-400 font-bold" },
          { text: "  Active Edge Nodes: 324 | Global Traffic: 4.8 GB/s", color: "text-slate-300" },
          { text: "  Avg Global Latency: 19.4ms | TLS 1.3: Active", color: "text-slate-300" },
          { text: "  Auto-Rollback Trigger: Arm & Ready (0 incidents in 30d)", color: "text-cyan-300" }
        ])
      } else if (cleanCmd.includes('regions')) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "Anycast Edge Points of Presence:", color: "text-amber-400" },
          { text: "  [us-east-1] N. Virginia (3.1ms)   [eu-west-1] Dublin (4.2ms)", color: "text-slate-300" },
          { text: "  [us-west-2] Oregon (2.8ms)        [ap-east-1] Tokyo (6.1ms)", color: "text-slate-300" },
          { text: "  [sa-east-1] São Paulo (8.4ms)     [ap-south-1] Mumbai (7.2ms)", color: "text-slate-300" }
        ])
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          { text: `aurora: command not found: '${cleanCmd}'. Type 'help' for available commands.`, color: "text-rose-400" }
        ])
      }
      setIsRunning(false)
    }, 450)
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInput.trim() && !isRunning) {
      executeCommand(userInput)
      setUserInput('')
    }
  }

  return (
    <div id="simulator" className="mockup-window">
      <div className="mockup-header">
        <div className="traffic-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="window-title">aurora-runtime // interactive-sandbox</div>
        <div className="header-tabs">
          <button
            className={`tab-btn ${activeTab === 'terminal' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <Terminal className="w-3.5 h-3.5 mr-1" />
            CLI Terminal
          </button>
          <button
            className={`tab-btn ${activeTab === 'config' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('config')}
          >
            <Layers className="w-3.5 h-3.5 mr-1" />
            aurora.config.ts
          </button>
          <button
            className={`tab-btn ${activeTab === 'metrics' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('metrics')}
          >
            <Activity className="w-3.5 h-3.5 mr-1" />
            Telemetry
          </button>
        </div>
      </div>

      <div className="mockup-body">
        {activeTab === 'terminal' && (
          <div className="terminal-wrapper">
            <div className="terminal-presets">
              <span className="text-xs text-slate-400 font-medium">Quick presets:</span>
              <button
                onClick={() => executeCommand('aurora deploy')}
                disabled={isRunning}
                className="preset-pill"
              >
                <Play className="w-3 h-3 text-emerald-400 mr-1" />
                aurora deploy
              </button>
              <button
                onClick={() => executeCommand('aurora test')}
                disabled={isRunning}
                className="preset-pill"
              >
                <Play className="w-3 h-3 text-cyan-400 mr-1" />
                aurora test
              </button>
              <button
                onClick={() => executeCommand('aurora status')}
                disabled={isRunning}
                className="preset-pill"
              >
                <Play className="w-3 h-3 text-purple-400 mr-1" />
                aurora status
              </button>
              <button
                onClick={() => executeCommand('aurora regions')}
                disabled={isRunning}
                className="preset-pill"
              >
                <Play className="w-3 h-3 text-amber-400 mr-1" />
                aurora regions
              </button>
              <button
                onClick={() => executeCommand('clear')}
                className="preset-pill preset-pill-clear"
                title="Clear screen"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                clear
              </button>
            </div>

            <div className="terminal-logs-screen">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className={`code-line ${item.color || 'text-slate-300'}`}>
                  {item.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleInputSubmit} className="terminal-input-bar">
              <span className="text-cyan-400 font-mono font-bold">$</span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type 'help', 'aurora deploy', or 'aurora test' and press Enter..."
                className="terminal-input font-mono"
                disabled={isRunning}
              />
              <button type="submit" className="terminal-run-btn" disabled={isRunning || !userInput.trim()}>
                Run
              </button>
            </form>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="code-block font-mono text-xs text-slate-300 leading-relaxed">
            <span className="text-purple-400">import</span> &#123; defineConfig &#125; <span className="text-purple-400">from</span> <span className="text-amber-300">'@aurora/core'</span><br />
            <br />
            <span className="text-purple-400">export default</span> defineConfig(&#123;<br />
            &nbsp;&nbsp;project: <span className="text-amber-300">'react-enterprise-app'</span>,<br />
            &nbsp;&nbsp;runtime: <span className="text-cyan-300">'edge-fastly'</span>,<br />
            &nbsp;&nbsp;build: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;framework: <span className="text-amber-300">'vite-react-ts'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;strictTypeCheck: <span className="text-purple-400">true</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;bundleOptimizer: <span className="text-amber-300">'oxc'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;treeShaking: <span className="text-purple-400">true</span><br />
            &nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;security: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;autoRotateSecrets: <span className="text-purple-400">true</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;soc2AuditLogs: <span className="text-purple-400">true</span><br />
            &nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;monitoring: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;aiDiagnostics: <span className="text-purple-400">true</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;alertSlackChannel: <span className="text-amber-300">'#deployments-prod'</span><br />
            &nbsp;&nbsp;&#125;<br />
            &#125;)
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Avg Global TTFB</div>
              <div className="metric-value text-emerald-400">19.4 ms</div>
              <div className="metric-sub">Across 320 Anycast PoPs</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Edge Cache Hit</div>
              <div className="metric-value text-cyan-400">99.88%</div>
              <div className="metric-sub">Brotli-compressed assets</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Active Isolates</div>
              <div className="metric-value text-purple-400">4,120</div>
              <div className="metric-sub">Auto-scaling micro-VMs</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Memory Overhead</div>
              <div className="metric-value text-amber-400">12.4 MB</div>
              <div className="metric-sub">Zero V8 heap leaks</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
