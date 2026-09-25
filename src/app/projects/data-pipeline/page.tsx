import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Large-Scale Data Pipeline | Mary Syamala",
  description:
    "A scalable cloud data pipeline for processing large semi-structured datasets into optimized, analytics-ready data.",
};

export default function DataPipelinePage() {
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
          DATA ENGINEERING / CLOUD · ETL · BIG DATA
        </div>

        <h1>
          Data<span>Pipeline</span>
        </h1>

        <p className="caseTagline">
          A scalable cloud data pipeline for turning large, messy,
          semi-structured datasets into optimized, analytics-ready data.
        </p>

        <div className="caseMeta">

          <div>
            <span>PROJECT TYPE</span>
            <strong>Data Engineering</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>Cloud &amp; Big Data</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Data Engineer</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="activeStatus">
              <i></i>
              Ongoing
            </strong>
          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="caseSection">

        <div className="caseSectionNumber">01 / OVERVIEW</div>

        <div className="caseTwoColumn">

          <h2>
            Raw data is rarely
            <br />
            <span>ready to use.</span>
          </h2>

          <div className="caseText">

            <p className="caseLead">
              This project is a cloud-based pipeline built to ingest large
              volumes of semi-structured data and deliver clean, reliable,
              analytics-ready datasets.
            </p>

            <p>
              Source data arrives in many shapes — logs, exports, and
              nested formats — that analysts and dashboards cannot query
              directly.
            </p>

            <p>
              The pipeline standardizes ingestion, transformation, and
              storage so downstream teams work from trusted, consistent
              data.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM */}
      <section className="caseSection">

        <div className="caseSectionNumber">02 / THE PROBLEM</div>

        <div className="problemHeader">

          <h2>
            Large data is
            <br />
            <span>hard to trust.</span>
          </h2>

          <p>
            Processing big, semi-structured data reliably means solving
            for scale, quality, and cost all at once.
          </p>

        </div>

        <div className="problemGrid">

          <div className="problemCard">
            <span>01</span>
            <h3>Volume</h3>
            <p>
              Large datasets can overwhelm manual processes and simple
              scripts that were never built to scale.
            </p>
          </div>

          <div className="problemCard">
            <span>02</span>
            <h3>Messy Formats</h3>
            <p>
              Semi-structured sources need consistent parsing before they
              become usable, queryable tables.
            </p>
          </div>

          <div className="problemCard">
            <span>03</span>
            <h3>Data Quality</h3>
            <p>
              Without validation, bad records silently flow downstream and
              break reports and models.
            </p>
          </div>

          <div className="problemCard">
            <span>04</span>
            <h3>Cost &amp; Speed</h3>
            <p>
              Pipelines must be optimized so processing stays fast and
              cloud costs stay predictable.
            </p>
          </div>

        </div>

      </section>

      {/* SOLUTION */}
      <section className="caseSection">

        <div className="caseSectionNumber">03 / THE SOLUTION</div>

        <div className="solutionIntro">

          <h2>
            A structured
            <br />
            <span>ingestion flow.</span>
          </h2>

          <p>
            Data moves through a clear set of stages — from raw ingestion
            to validated, optimized storage — so every dataset is
            analytics-ready by the time it lands.
          </p>

        </div>

        <div className="pipeline">

          <div className="pipelineNode">
            <span>01</span>
            <strong>Ingest</strong>
            <p>Raw → S3</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>02</span>
            <strong>Transform</strong>
            <p>Spark / Python</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>03</span>
            <strong>Validate</strong>
            <p>Quality Checks</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>04</span>
            <strong>Serve</strong>
            <p>Redshift</p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="caseSection">

        <div className="caseSectionNumber">04 / WHAT IT DOES</div>

        <div className="caseTwoColumn">

          <h2>
            From raw ingestion
            <br />
            to <span>trusted data.</span>
          </h2>

          <div className="featureList">

            <div>
              <span>01</span>
              <p>Scalable Ingestion of Large Datasets</p>
            </div>

            <div>
              <span>02</span>
              <p>Semi-Structured Data Parsing</p>
            </div>

            <div>
              <span>03</span>
              <p>Distributed Transformations</p>
            </div>

            <div>
              <span>04</span>
              <p>Data-Quality &amp; Validation Checks</p>
            </div>

            <div>
              <span>05</span>
              <p>Optimized, Analytics-Ready Storage</p>
            </div>

            <div>
              <span>06</span>
              <p>Cost- &amp; Performance-Aware Design</p>
            </div>

          </div>

        </div>

      </section>

      {/* TECH */}
      <section className="caseSection">

        <div className="caseSectionNumber">05 / TECHNOLOGY</div>

        <h2 className="techHeading">
          Built on a modern
          <br />
          <span>cloud data stack.</span>
        </h2>

        <div className="techGrid">

          <div>
            <span>CLOUD</span>
            <strong>AWS</strong>
          </div>

          <div>
            <span>STORAGE</span>
            <strong>S3</strong>
          </div>

          <div>
            <span>PROCESSING</span>
            <strong>Spark</strong>
          </div>

          <div>
            <span>WAREHOUSE</span>
            <strong>Redshift</strong>
          </div>

          <div>
            <span>LANGUAGE</span>
            <strong>Python</strong>
          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="caseNext">

        <span>PROJECT 03</span>

        <h2>
          Reliable data,
          <br />
          <em>at scale.</em>
        </h2>

        <p>
          The pipeline continues to evolve as new sources, checks, and
          optimizations are added to keep data trustworthy.
        </p>

        <Link href="/#projects">
          ← Return to portfolio
        </Link>

      </section>

    </main>
  );
}
