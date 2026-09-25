import type { ReactNode } from "react";

type NodeProps = {
  kind: string;
  name: string;
  meta: string;
  tone?: "default" | "eval" | "output";
};

function ArchNode({ kind, name, meta, tone = "default" }: NodeProps) {
  return (
    <div className={`archNode archNode--${tone}`}>
      <span className="archNodeKind">{kind}</span>
      <span className="archNodeName">{name}</span>
      <span className="archNodeMeta">{meta}</span>
    </div>
  );
}

function FlowLine({ children }: { children?: ReactNode }) {
  return (
    <div className="archFlow" aria-hidden="true">
      <span className="archFlowPulse" />
      {children}
    </div>
  );
}

/**
 * StockAI system architecture — a data pipeline shown as two research lanes
 * (market data + financial news) converging at evaluation, then a serving
 * chain. Data "flow" is a pure-CSS animation (disabled for reduced motion).
 * Presented honestly: the research lane's evaluation informs the pivot, and
 * the shipped product surfaces real-time market intelligence.
 */
export default function StockAIArchitecture() {
  return (
    <div className="arch" role="img" aria-label="StockAI architecture: market data through feature engineering and ML research, and financial news through FinBERT to sentiment features, both feeding evaluation, then FastAPI and Next.js serving market intelligence.">
      <div className="archPhase">
        <span className="archPhaseLabel">01 — RESEARCH PIPELINE</span>

        <div className="archLanes">
          <div className="archLane">
            <ArchNode kind="INPUT" name="Market Data" meta="OHLCV · history" />
            <FlowLine />
            <ArchNode
              kind="TRANSFORM"
              name="Feature Engineering"
              meta="Indicators · returns · volatility"
            />
            <FlowLine />
            <ArchNode
              kind="MODEL"
              name="ML Research"
              meta="Price-movement experiments"
            />
          </div>

          <div className="archLane">
            <ArchNode kind="INPUT" name="Financial News" meta="Headlines · events" />
            <FlowLine />
            <ArchNode kind="NLP" name="FinBERT" meta="Financial sentiment model" />
            <FlowLine />
            <ArchNode
              kind="FEATURES"
              name="Sentiment Features"
              meta="Signal extraction"
            />
          </div>
        </div>

        <FlowLine />
        <ArchNode
          kind="VALIDATION"
          name="Evaluation"
          meta="Backtesting · honest measurement"
          tone="eval"
        />
      </div>

      <div className="archPivot" aria-hidden="true">
        <span>NULL RESULT</span>
        <span className="archPivotArrow">↓</span>
        <span>PRODUCT PIVOT</span>
      </div>

      <div className="archPhase">
        <span className="archPhaseLabel">02 — PRODUCT · SERVING</span>

        <ArchNode kind="API" name="FastAPI" meta="Service layer" />
        <FlowLine />
        <ArchNode kind="FRONTEND" name="Next.js" meta="Interface" />
        <FlowLine />
        <ArchNode
          kind="OUTPUT"
          name="Market Intelligence"
          meta="Real-time news intelligence"
          tone="output"
        />
      </div>
    </div>
  );
}
