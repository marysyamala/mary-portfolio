import Link from "next/link";
import StockAIArchitecture from "../../components/StockAIArchitecture";

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
            forecasting prices, StockAI pivoted toward real-time news
            intelligence — surfacing and contextualizing market-moving news
            and sentiment so people can understand what is happening and
            why, without a false promise of prediction.
          </p>

        </div>

      </section>

      {/* DATA */}
      <section className="caseSection">

        <div className="caseSectionNumber">06 / DATA & FEATURES</div>

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