import type { Metadata } from "next";
import Link from "next/link";
import StockAIArchitecture from "../../components/StockAIArchitecture";

export const metadata: Metadata = {
  title: "AKSYTAI — Real-time Market Intelligence | Mary Syamala",
  description:
    "AKSYTAI (Symplore) — a real-time market-intelligence platform: live news ingestion, FinBERT sentiment, and evidence-grounded RAG/GenAI via FastAPI on AWS.",
};

export default function StockAIPage() {
  return (
    <main id="main" className="caseStudy">

      {/* NAVIGATION */}
      <nav className="caseNav">
        <Link href="/" className="logo">
          MS<span>.</span>
        </Link>

        <Link href="/#projects" className="backLink">
          ← BACK TO PROJECTS
        </Link>
      </nav>

      {/* HERO */}
      <section className="caseHero">

        <div className="caseEyebrow">
          SYMPLORE INC. / GENAI · NLP · MARKET INTELLIGENCE
        </div>

        <h1>
          AKSYT<span>AI</span>
        </h1>

        <p className="caseTagline">
          A real-time U.S. market-intelligence platform that ingests live
          news, scores FinBERT sentiment, and serves evidence-grounded
          GenAI/RAG workflows via FastAPI — for equity research and
          monitoring.
        </p>

        <div className="caseMeta">

          <div>
            <span>PROJECT TYPE</span>
            <strong>GenAI Platform</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>Financial Markets</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>GenAI Engineer</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="activeStatus">
              <i></i>
              In Production
            </strong>
          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="caseSection">

        <div className="caseSectionNumber">01 / OVERVIEW</div>

        <div className="caseTwoColumn">

          <h2>
            Markets generate
            <br />
            <span>too much noise.</span>
          </h2>

          <div className="caseText">

            <p className="caseLead">
              AKSYTAI is a real-time market-intelligence platform (built at
              Symplore) that brings live news, sentiment, and market signals
              into one evidence-grounded system.
            </p>

            <p>
              Financial markets generate enormous amounts of information:
              historical prices, trading volume, technical indicators,
              company events, quarterly results, and a constant stream of
              news.
            </p>

            <p>
              Looking at these signals independently makes it difficult to
              understand why a stock moved — or to trust an automated answer
              about it.
            </p>

            <p>
              AKSYTAI connects these signals through structured, point-in-time
              data pipelines, FinBERT sentiment, and retrieval-augmented
              GenAI — surfacing what&apos;s happening and why, with citations.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM */}
      <section className="caseSection">

        <div className="caseSectionNumber">02 / THE PROBLEM</div>

        <div className="problemHeader">

          <h2>
            Market information is
            <br />
            <span>fragmented.</span>
          </h2>

          <p>
            Understanding market movement often requires switching between
            price charts, financial news, earnings reports, indicators, and
            different analytical tools.
          </p>

        </div>

        <div className="problemGrid">

          <div className="problemCard">
            <span>01</span>

            <h3>Market Data</h3>

            <p>
              Price and volume information contains useful patterns, but raw
              OHLCV data alone does not explain the context behind a move.
            </p>
          </div>

          <div className="problemCard">
            <span>02</span>

            <h3>News</h3>

            <p>
              News can move stocks quickly, but headlines and events are
              disconnected from historical price behavior.
            </p>
          </div>

          <div className="problemCard">
            <span>03</span>

            <h3>Financial Events</h3>

            <p>
              Earnings and company events can create major changes in
              volatility and investor expectations.
            </p>
          </div>

          <div className="problemCard">
            <span>04</span>

            <h3>Signal Overload</h3>

            <p>
              Investors can face dozens of indicators without a clear way to
              understand which signals matter in a particular context.
            </p>
          </div>

        </div>

      </section>

      {/* ARCHITECTURE */}
      <section className="caseSection">

        <div className="caseSectionNumber">03 / ARCHITECTURE</div>

        <div className="solutionIntro">

          <h2>
            How the system
            <br />
            <span>is wired.</span>
          </h2>

          <p>
            Two research lanes — market data and financial news — are
            transformed into features and evaluated together. What the
            evaluation showed then shaped what actually shipped.
          </p>

        </div>

        <StockAIArchitecture />

      </section>

      {/* RESULT */}
      <section className="caseSection">

        <div className="caseSectionNumber">04 / THE RESULT</div>

        <div className="caseTwoColumn">

          <h2>
            The models did not
            <br />
            <span>beat the market.</span>
          </h2>

          <div className="caseText">

            <p className="caseLead">
              Tested honestly, the price-movement models produced a null
              result — no reliable predictive edge.
            </p>

            <p>
              Across the engineered features, technical indicators, and
              news-sentiment signals, evaluation and backtesting did not
              show a dependable ability to predict future stock prices.
            </p>

            <p>
              Rather than overfit to noise or report a misleading accuracy
              number, the honest conclusion was that prediction wasn&apos;t
              where the value was — the signal and news work was.
            </p>

          </div>

        </div>

      </section>

      {/* PIVOT */}
      <section className="caseSection">

        <div className="caseSectionNumber">05 / THE PIVOT</div>

        <div className="solutionIntro">

          <h2>
            From prediction
            <br />
            to <span>intelligence.</span>
          </h2>

          <p>
            The evidence pointed to a more useful product. Instead of
            forecasting prices, AKSYTAI pivoted toward real-time news
            intelligence — a retrieval-augmented (RAG) GenAI layer that
            surfaces and contextualizes market-moving news and sentiment with
            citations, numeric validation, and guardrails against
            hallucination and prompt injection, rather than a false promise
            of prediction.
          </p>

        </div>

      </section>

      {/* DATA */}
      <section className="caseSection">

        <div className="caseSectionNumber">06 / DATA & PIPELINE</div>

        <div className="caseTwoColumn">

          <h2>
            Reliable data,
            <br />
            built <span>point-in-time.</span>
          </h2>

          <div className="featureList">

            <div>
              <span>01</span>
              <p>~95K news articles (2015–2026) ingested &amp; cleaned</p>
            </div>

            <div>
              <span>02</span>
              <p>FinBERT sentiment scored across 61K+ articles</p>
            </div>

            <div>
              <span>03</span>
              <p>Deduplication, relevance &amp; entity/ticker mapping</p>
            </div>

            <div>
              <span>04</span>
              <p>FastAPI REST &amp; WebSocket ingestion, Parquet processing</p>
            </div>

            <div>
              <span>05</span>
              <p>Point-in-time prices, calendars &amp; corporate events</p>
            </div>

            <div>
              <span>06</span>
              <p>Lineage, leakage controls, quarantine &amp; idempotent runs</p>
            </div>

            <div>
              <span>07</span>
              <p>PostgreSQL + pgvector serving for embeddings &amp; RAG</p>
            </div>

          </div>

        </div>

      </section>

      {/* TECH */}
      <section className="caseSection">

        <div className="caseSectionNumber">07 / TECHNOLOGY</div>

        <h2 className="techHeading">
          Built with a modern
          <br />
          <span>data + AI stack.</span>
        </h2>

        <div className="techGrid">

          <div>
            <span>LANGUAGE</span>
            <strong>Python</strong>
          </div>

          <div>
            <span>API</span>
            <strong>FastAPI</strong>
          </div>

          <div>
            <span>NLP</span>
            <strong>FinBERT</strong>
          </div>

          <div>
            <span>GENAI</span>
            <strong>LangChain / RAG</strong>
          </div>

          <div>
            <span>ML</span>
            <strong>LightGBM</strong>
          </div>

          <div>
            <span>DATA</span>
            <strong>PostgreSQL + pgvector</strong>
          </div>

          <div>
            <span>CLOUD</span>
            <strong>AWS ECS Fargate</strong>
          </div>

          <div>
            <span>CI/CD</span>
            <strong>GitHub Actions</strong>
          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="caseNext">

        <span>PROJECT 01</span>

        <h2>
          AKSYTAI keeps
          <br />
          <em>evolving.</em>
        </h2>

        <p>
          The platform ships iteratively on AWS — expanding news coverage,
          sentiment and event analytics, RAG workflows, and model evaluation
          with leakage-safe, point-in-time rigor.
        </p>

        <Link href="/#projects">
          ← Return to portfolio
        </Link>

      </section>

    </main>
  );
}