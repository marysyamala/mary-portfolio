import Link from "next/link";

export default function StockAIPage() {
  return (
    <main className="caseStudy">

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
          FEATURED PROJECT / AI · FINANCE · DATA
        </div>

        <h1>
          Stock<span>AI</span>
        </h1>

        <p className="caseTagline">
          Building an intelligent system that connects market data,
          technical patterns, financial events, and news to better
          understand stock-price movement.
        </p>

        <div className="caseMeta">

          <div>
            <span>PROJECT TYPE</span>
            <strong>AI Product</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>Financial Markets</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Product · Data · ML</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="activeStatus">
              <i></i>
              In Development
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
              StockAI is an AI-powered stock intelligence platform designed
              to bring multiple market signals into one analytical system.
            </p>

            <p>
              Financial markets generate enormous amounts of information:
              historical prices, trading volume, technical indicators,
              company events, quarterly results, and news.
            </p>

            <p>
              Looking at these signals independently makes it difficult to
              understand why a stock moved or whether similar patterns have
              occurred before.
            </p>

            <p>
              StockAI is being designed to connect these signals into a
              structured data and machine-learning pipeline.
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

      {/* SOLUTION */}
      <section className="caseSection">

        <div className="caseSectionNumber">03 / THE SOLUTION</div>

        <div className="solutionIntro">

          <h2>
            One intelligence
            <br />
            <span>pipeline.</span>
          </h2>

          <p>
            StockAI combines multiple data sources, transforms them into
            machine-learning features, and produces structured insights that
            can later be surfaced through a simple product interface.
          </p>

        </div>

        <div className="pipeline">

          <div className="pipelineNode">
            <span>01</span>
            <strong>Market Data</strong>
            <p>OHLCV</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>02</span>
            <strong>Features</strong>
            <p>Technical + Event</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>03</span>
            <strong>ML Models</strong>
            <p>Pattern Learning</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>04</span>
            <strong>Intelligence</strong>
            <p>Signals + Context</p>
          </div>

        </div>

      </section>

      {/* DATA */}
      <section className="caseSection">

        <div className="caseSectionNumber">04 / DATA & FEATURES</div>

        <div className="caseTwoColumn">

          <h2>
            Turning raw markets
            <br />
            into <span>features.</span>
          </h2>

          <div className="featureList">

            <div>
              <span>01</span>
              <p>Open, High, Low, Close &amp; Volume</p>
            </div>

            <div>
              <span>02</span>
              <p>Historical Returns</p>
            </div>

            <div>
              <span>03</span>
              <p>Price Momentum</p>
            </div>

            <div>
              <span>04</span>
              <p>Volatility Signals</p>
            </div>

            <div>
              <span>05</span>
              <p>Technical Indicators</p>
            </div>

            <div>
              <span>06</span>
              <p>News &amp; Event Signals</p>
            </div>

            <div>
              <span>07</span>
              <p>Quarterly / Earnings Context</p>
            </div>

          </div>

        </div>

      </section>

      {/* TECH */}
      <section className="caseSection">

        <div className="caseSectionNumber">05 / TECHNOLOGY</div>

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
            <span>DATA</span>
            <strong>Pandas</strong>
          </div>

          <div>
            <span>API</span>
            <strong>FastAPI</strong>
          </div>

          <div>
            <span>FRONTEND</span>
            <strong>Next.js</strong>
          </div>

          <div>
            <span>ML</span>
            <strong>Machine Learning</strong>
          </div>

          <div>
            <span>INTELLIGENCE</span>
            <strong>NLP / Sentiment</strong>
          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="caseNext">

        <span>PROJECT 01</span>

        <h2>
          StockAI is still
          <br />
          <em>evolving.</em>
        </h2>

        <p>
          The platform is being developed iteratively as additional market,
          event, news, and modeling capabilities are introduced.
        </p>

        <Link href="/#projects">
          ← Return to portfolio
        </Link>

      </section>

    </main>
  );
}