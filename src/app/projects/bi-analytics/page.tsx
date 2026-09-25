import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Intelligence Analytics | Mary Syamala",
  description:
    "KPI-driven analytics and reporting solutions that transform operational data into clear business insights for decision-makers.",
};

export default function BIAnalyticsPage() {
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
          ANALYTICS / BUSINESS INTELLIGENCE
        </div>

        <h1>
          BI<span>Analytics</span>
        </h1>

        <p className="caseTagline">
          KPI-driven analytics and reporting that turn operational data
          into clear, decision-ready insights for business stakeholders.
        </p>

        <div className="caseMeta">

          <div>
            <span>PROJECT TYPE</span>
            <strong>Analytics &amp; BI</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>Business Reporting</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Business Analyst</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="activeStatus">
              <i></i>
              Delivered
            </strong>
          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="caseSection">

        <div className="caseSectionNumber">01 / OVERVIEW</div>

        <div className="caseTwoColumn">

          <h2>
            Data means nothing
            <br />
            <span>without insight.</span>
          </h2>

          <div className="caseText">

            <p className="caseLead">
              This work covers KPI-driven analytics and reporting solutions
              that translate operational data into clear business insight.
            </p>

            <p>
              Stakeholders often have plenty of data but no shared view of
              what is actually happening or which numbers matter.
            </p>

            <p>
              The goal is to define the right KPIs, model the data behind
              them, and present them in dashboards decision-makers can act
              on.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM */}
      <section className="caseSection">

        <div className="caseSectionNumber">02 / THE PROBLEM</div>

        <div className="problemHeader">

          <h2>
            Reporting is often
            <br />
            <span>slow and unclear.</span>
          </h2>

          <p>
            Manual reporting hides trends, drifts out of date, and rarely
            answers the questions leaders are actually asking.
          </p>

        </div>

        <div className="problemGrid">

          <div className="problemCard">
            <span>01</span>
            <h3>Manual Reporting</h3>
            <p>
              Hand-built reports are time-consuming, error-prone, and hard
              to keep current.
            </p>
          </div>

          <div className="problemCard">
            <span>02</span>
            <h3>Unclear KPIs</h3>
            <p>
              Without agreed metrics, teams measure different things and
              draw different conclusions.
            </p>
          </div>

          <div className="problemCard">
            <span>03</span>
            <h3>Scattered Data</h3>
            <p>
              Operational data lives in multiple systems that rarely line
              up cleanly for analysis.
            </p>
          </div>

          <div className="problemCard">
            <span>04</span>
            <h3>Slow Decisions</h3>
            <p>
              When insight is hard to reach, decisions are delayed or made
              on gut feel instead of data.
            </p>
          </div>

        </div>

      </section>

      {/* SOLUTION */}
      <section className="caseSection">

        <div className="caseSectionNumber">03 / THE SOLUTION</div>

        <div className="solutionIntro">

          <h2>
            From raw data
            <br />
            <span>to dashboards.</span>
          </h2>

          <p>
            Operational data is cleaned and modeled, key metrics are
            defined with stakeholders, and the results are surfaced through
            interactive KPI dashboards.
          </p>

        </div>

        <div className="pipeline">

          <div className="pipelineNode">
            <span>01</span>
            <strong>Collect</strong>
            <p>Operational Data</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>02</span>
            <strong>Model</strong>
            <p>SQL + DAX</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>03</span>
            <strong>Define KPIs</strong>
            <p>With Stakeholders</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>04</span>
            <strong>Dashboards</strong>
            <p>Power BI</p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="caseSection">

        <div className="caseSectionNumber">04 / WHAT IT DELIVERS</div>

        <div className="caseTwoColumn">

          <h2>
            Insight that supports
            <br />
            real <span>decisions.</span>
          </h2>

          <div className="featureList">

            <div>
              <span>01</span>
              <p>KPI Definition &amp; Alignment</p>
            </div>

            <div>
              <span>02</span>
              <p>Data Modeling &amp; Transformation</p>
            </div>

            <div>
              <span>03</span>
              <p>Interactive Power BI Dashboards</p>
            </div>

            <div>
              <span>04</span>
              <p>Automated, Repeatable Reporting</p>
            </div>

            <div>
              <span>05</span>
              <p>Clear Visual Storytelling</p>
            </div>

            <div>
              <span>06</span>
              <p>Decision-Ready Insights</p>
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
          <span>analytics &amp; BI stack.</span>
        </h2>

        <div className="techGrid">

          <div>
            <span>BI</span>
            <strong>Power BI</strong>
          </div>

          <div>
            <span>DATA</span>
            <strong>SQL</strong>
          </div>

          <div>
            <span>MODELING</span>
            <strong>DAX</strong>
          </div>

          <div>
            <span>ANALYSIS</span>
            <strong>Excel</strong>
          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="caseNext">

        <span>PROJECT 05</span>

        <h2>
          Turning numbers
          <br />
          into <em>decisions.</em>
        </h2>

        <p>
          These analytics and reporting solutions continue to expand as new
          metrics and data sources are brought in.
        </p>

        <Link href="/#projects">
          ← Return to portfolio
        </Link>

      </section>

    </main>
  );
}
