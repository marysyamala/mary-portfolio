import Link from "next/link";
import HeroBackground from "./HeroBackground";
import ScrollReveal from "./ScrollReveal";

export default function Home() {
  return (
    <main>
      <HeroBackground />
      <ScrollReveal />
      <nav className="navbar">
        <a href="#" className="logo">
          MS<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="navButton">
          Let&apos;s Talk
        </a>
      </nav>

      <section className="hero"  id="home">
        <div className="heroLabel">
          <span className="greenDot"></span>
          DATA · ANALYTICS · AI
        </div>

        <h1>
          I turn data into
          <br />
          <span>useful products.</span>
        </h1>

        <p className="heroDescription">
          Hi, I&apos;m <strong>Mary Syamala</strong> — a Data Engineer,
          Business Analyst, and AI Product Builder focused on transforming
          complex data into reliable systems, actionable insights, and
          intelligent products.
        </p>

        <div className="heroButtons">
          <a href="#projects" className="primaryButton">
            Explore My Work
            <span>→</span>
          </a>

          <a href="#about" className="secondaryButton">
            About Me
          </a>
        </div>

        <div className="heroBottom">
          <div>
            <span className="number">4+</span>
            <span className="statLabel">Years Experience</span>
          </div>

          <div>
            <span className="number">5+</span>
            <span className="statLabel">Projects</span>
          </div>

          <div>
            <span className="number">3</span>
            <span className="statLabel">Core Disciplines</span>
          </div>

          <div className="scrollText">
            SCROLL TO EXPLORE
            <span>↓</span>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section className="section" id="about">
        <div className="sectionLabel">01 / ABOUT</div>

        <div className="aboutGrid">
          <div>
            <h2>
              Data tells a story.
              <br />
              <span>I make it useful.</span>
            </h2>
          </div>

          <div className="aboutContent">
            <p className="aboutLead">
              I&apos;m a data professional who enjoys working at the
              intersection of <strong>data, business, and technology.</strong>
            </p>

            <p>
              With experience across data engineering and business analytics,
              I&apos;ve worked on transforming raw information into reliable
              datasets, automated pipelines, dashboards, and actionable
              business insights.
            </p>

            <p>
              I hold a Master&apos;s in Business Analytics &amp; Artificial
              Intelligence from The University of Texas at Dallas. Today,
              I&apos;m expanding that foundation by building AI-powered
              products that solve practical problems.
            </p>

            <div className="aboutDetails">
              <div>
                <span>FOCUS</span>
                <p>Data · Analytics · AI</p>
              </div>

              <div>
                <span>EDUCATION</span>
                <p>MS Business Analytics &amp; AI</p>
              </div>

              <div>
                <span>BASED IN</span>
                <p>United States</p>
              </div>

              <div>
                <span>OPEN TO</span>
                <p>Data &amp; Analytics Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="sectionLabel">02 / EXPERIENCE</div>

        <div className="experienceHeading">
          <h2>
            Experience that
            <br />
            <span>connects the dots.</span>
          </h2>

          <p>
            From business requirements to data pipelines and analytics,
            I&apos;ve worked across the data lifecycle.
          </p>
        </div>

        <div className="experienceList">
          <div className="experienceItem">
            <div className="experienceYear">2026 — PRESENT</div>

            <div className="experienceRole">
              <h3>Data Engineer</h3>
              <p>Symplore</p>
            </div>

            <p className="experienceText">
              Building ETL/ELT pipelines, API integrations, SQL and Python
              transformations, data-quality processes, and analytics-ready
              datasets across cloud data environments.
            </p>

            <span className="experienceNumber">01</span>
          </div>

          <div className="experienceItem">
            <div className="experienceYear">2025 — 2026</div>

            <div className="experienceRole">
              <h3>Data Engineer</h3>
              <p>Tech Intuition</p>
            </div>

            <p className="experienceText">
              Developed automated data pipelines, optimized cloud datasets,
              improved data reliability, and delivered clean datasets for
              analytics and business reporting.
            </p>

            <span className="experienceNumber">02</span>
          </div>

          <div className="experienceItem">
            <div className="experienceYear">2023 — 2025</div>

            <div className="experienceRole">
              <h3>Business Analyst</h3>
              <p>Advanced Knowledge Tech</p>
            </div>

            <p className="experienceText">
              Translated stakeholder requirements into analytics solutions,
              automated reporting workflows, and developed KPI dashboards to
              support business decisions.
            </p>

            <span className="experienceNumber">03</span>
          </div>
        </div>
      </section>
            {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="sectionLabel">03 / SELECTED WORK</div>

        <div className="projectsHeading">
          <h2>
            Products & projects
            <br />
            <span>I&apos;ve built.</span>
          </h2>

          <p>
            Projects combining data engineering, analytics, machine learning,
            artificial intelligence, and product development.
          </p>
        </div>

        <div className="projectsGrid">
          {/* STOCKAI */}
          <article className="projectCard featuredProject">
            <div className="projectTop">
              <span className="projectIndex">01</span>

              <span className="featuredBadge">
                FEATURED PROJECT
              </span>
            </div>

            <div className="stockVisual">
              <div className="stockVisualHeader">
                <div>
                  <span>STOCKAI / INTELLIGENCE</span>
                  <strong>Market Signal Engine</strong>
                </div>

                <span className="liveStatus">
                  <i></i>
                  MODEL
                </span>
              </div>

              <div className="chartArea">
                <div className="chartLine">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="chartStats">
                  <div>
                    <span>MARKET DATA</span>
                    <strong>OHLCV</strong>
                  </div>

                  <div>
                    <span>SIGNALS</span>
                    <strong>ML + NLP</strong>
                  </div>

                  <div>
                    <span>NEWS</span>
                    <strong>SENTIMENT</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="projectContent">
              <p className="projectType">
                AI · FINANCE · MACHINE LEARNING
              </p>

              <h3>StockAI</h3>

              <p className="projectDescription">
                An AI-powered stock intelligence platform combining historical
                market data, technical indicators, news sentiment, earnings
                events, and machine learning to identify market patterns and
                generate explainable stock insights.
              </p>

              <div className="projectTags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>Next.js</span>
                <span>Machine Learning</span>
                <span>NLP</span>
                <span>OHLCV</span>
              </div>

              <Link className="projectLink" href="/projects/stockai">
                View Case Study <span>↗</span>
              </Link>
            </div>
          </article>

          {/* MEALPILOT */}
          <article className="projectCard">
            <div className="projectTop">
              <span className="projectIndex">02</span>
              <span className="projectStatus">AI PRODUCT</span>
            </div>

            <div className="projectContent">
              <p className="projectType">AI · PRODUCT DEVELOPMENT</p>

              <h3>MealPilot AI</h3>

              <p className="projectDescription">
                An intelligent meal-planning platform designed to generate
                personalized weekly meal plans and simplify everyday food
                planning.
              </p>

              <div className="projectTags">
                <span>AI</span>
                <span>Python</span>
                <span>FastAPI</span>
                <span>Next.js</span>
              </div>

              <Link className="projectLink" href="/projects/mealpilot">
                Explore Project <span>↗</span>
              </Link>
            </div>
          </article>

          {/* DATA PIPELINE */}
          <article className="projectCard">
            <div className="projectTop">
              <span className="projectIndex">03</span>
              <span className="projectStatus">DATA ENGINEERING</span>
            </div>

            <div className="projectContent">
              <p className="projectType">CLOUD · ETL · BIG DATA</p>

              <h3>Large-Scale Data Pipeline</h3>

              <p className="projectDescription">
                A scalable cloud data pipeline for processing large
                semi-structured datasets into optimized,
                analytics-ready data.
              </p>

              <div className="projectTags">
                <span>AWS</span>
                <span>S3</span>
                <span>Spark</span>
                <span>Redshift</span>
                <span>Python</span>
              </div>

              <Link className="projectLink" href="/projects/data-pipeline">
                Explore Project <span>↗</span>
              </Link>
            </div>
          </article>

          {/* CAMPUS AI */}
          <article className="projectCard">
            <div className="projectTop">
              <span className="projectIndex">04</span>
              <span className="projectStatus">GENERATIVE AI</span>
            </div>

            <div className="projectContent">
              <p className="projectType">LLM · RAG · NLP</p>

              <h3>Campus AI Assistant</h3>

              <p className="projectDescription">
                A conversational AI assistant designed to help users discover
                university information through natural-language interactions
                and intelligent retrieval.
              </p>

              <div className="projectTags">
                <span>LLaMA</span>
                <span>LLMs</span>
                <span>RAG</span>
                <span>Python</span>
              </div>

              <Link className="projectLink" href="/projects/campus-ai">
                Explore Project <span>↗</span>
              </Link>
            </div>
          </article>

          {/* ANALYTICS */}
          <article className="projectCard">
            <div className="projectTop">
              <span className="projectIndex">05</span>
              <span className="projectStatus">ANALYTICS</span>
            </div>

            <div className="projectContent">
              <p className="projectType">
                BUSINESS INTELLIGENCE · ANALYTICS
              </p>

              <h3>Business Intelligence Analytics</h3>

              <p className="projectDescription">
                KPI-driven analytics and reporting solutions that transform
                operational data into clear business insights for
                decision-makers.
              </p>

              <div className="projectTags">
                <span>Power BI</span>
                <span>SQL</span>
                <span>DAX</span>
                <span>Excel</span>
              </div>

              <Link className="projectLink" href="/projects/bi-analytics">
                Explore Project <span>↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
            {/* SKILLS */}
      <section className="section" id="skills">
        <div className="sectionLabel">04 / TOOLKIT</div>

        <div className="skillsHeading">
          <h2>
            Tools I use to turn
            <br />
            <span>data into impact.</span>
          </h2>

          <p>
            My toolkit spans analytics, data engineering, cloud platforms,
            databases, automation, and business intelligence.
          </p>
        </div>

        <div className="skillsContainer">

          <div className="skillCategory">
            <div className="skillCategoryNumber">01</div>

            <div>
              <p className="skillCategoryLabel">PROGRAMMING</p>
              <h3>Programming & Data</h3>
            </div>

            <div className="skillTags">
              <span>Python</span>
              <span>SQL</span>
              <span>PySpark</span>
              <span>Java</span>
            </div>
          </div>

          <div className="skillCategory">
            <div className="skillCategoryNumber">02</div>

            <div>
              <p className="skillCategoryLabel">DATA ENGINEERING</p>
              <h3>Pipelines & Integration</h3>
            </div>

            <div className="skillTags">
              <span>ETL / ELT</span>
              <span>dbt</span>
              <span>API Integration</span>
              <span>Data Transformation</span>
              <span>Data Validation</span>
              <span>Apache Airflow</span>
            </div>
          </div>

          <div className="skillCategory">
            <div className="skillCategoryNumber">03</div>

            <div>
              <p className="skillCategoryLabel">CLOUD</p>
              <h3>Cloud & Warehousing</h3>
            </div>

            <div className="skillTags">
              <span>GCP</span>
              <span>BigQuery</span>
              <span>AWS</span>
              <span>S3</span>
              <span>Athena</span>
              <span>Azure</span>
              <span>Snowflake</span>
              <span>Databricks</span>
            </div>
          </div>

          <div className="skillCategory">
            <div className="skillCategoryNumber">04</div>

            <div>
              <p className="skillCategoryLabel">ANALYTICS</p>
              <h3>Analytics & BI</h3>
            </div>

            <div className="skillTags">
              <span>Power BI</span>
              <span>Tableau</span>
              <span>Excel</span>
              <span>KPI Dashboards</span>
              <span>Google Analytics</span>
            </div>
          </div>

          <div className="skillCategory">
            <div className="skillCategoryNumber">05</div>

            <div>
              <p className="skillCategoryLabel">DATABASES</p>
              <h3>Data Platforms</h3>
            </div>

            <div className="skillTags">
              <span>SQL Server</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Oracle</span>
            </div>
          </div>

          <div className="skillCategory">
            <div className="skillCategoryNumber">06</div>

            <div>
              <p className="skillCategoryLabel">DEVOPS</p>
              <h3>Infrastructure & Workflow</h3>
            </div>

            <div className="skillTags">
              <span>Terraform</span>
              <span>CI/CD</span>
              <span>Git</span>
              <span>JIRA</span>
              <span>Postman</span>
              <span>ServiceNow</span>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="section educationSection">
        <div className="sectionLabel">05 / EDUCATION</div>

        <div className="educationHeading">
          <h2>
            Where I built my
            <br />
            <span>foundation.</span>
          </h2>
        </div>

        <div className="educationList">

          <div className="educationItem">
            <div className="educationNumber">01</div>

            <div>
              <p className="educationType">MASTER&apos;S DEGREE</p>

              <h3>
                M.S. Business Analytics &amp;
                <br />
                Artificial Intelligence
              </h3>
            </div>

            <div className="educationSchool">
              <strong>The University of Texas at Dallas</strong>
              <p>United States</p>
            </div>
          </div>

          <div className="educationItem">
            <div className="educationNumber">02</div>

            <div>
              <p className="educationType">BACHELOR&apos;S DEGREE</p>

              <h3>
                B.Tech Computer Science &amp;
                <br />
                Engineering
              </h3>
            </div>

            <div className="educationSchool">
              <strong>
                Jawaharlal Nehru Technological University
              </strong>

              <p>Hyderabad, India</p>
            </div>
          </div>

        </div>

        <div className="certifications">
          <p className="certTitle">CERTIFICATIONS</p>

          <div className="certGrid">
            <div>
              <span>01</span>
              <strong>Google Project Management</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Google Data Analytics</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Azure Data Fundamentals</strong>
            </div>
          </div>
        </div>
      </section>
            {/* CONTACT */}
      <section className="contactSection" id="contact">
        <div className="contactTop">
          <div className="sectionLabel">06 / CONTACT</div>

          <span className="availability">
            <i></i>
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div className="contactContent">
          <h2>
            Have a problem
            <br />
            worth <span>solving?</span>
          </h2>

          <p>
            I&apos;m interested in opportunities across data engineering,
            analytics, business intelligence, and AI-powered products.
            Let&apos;s connect.
          </p>

          <a
            href="mailto:marysyamala0707@gmail.com"
            className="contactButton"
          >
            Start a conversation
            <span>↗</span>
          </a>
        </div>

        <div className="contactLinks">
          <a
            href="mailto:marysyamala0707@gmail.com"
            className="contactLink"
          >
            <span>EMAIL</span>

            <div>
              marysyamala0707@gmail.com
              <b>↗</b>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/mary-syamala"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            <span>LINKEDIN</span>

            <div>
              Connect with me
              <b>↗</b>
            </div>
          </a>

          <a
            href="/mary-portfolio/Mary_Syamala_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            <span>RESUME</span>

            <div>
              View Resume
              <b>↗</b>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <a href="#home" className="footerLogo">
            MS<span>.</span>
          </a>

          <p>Data · Analytics · AI</p>
        </div>

        <p className="footerText">
          Designed &amp; built by Mary Syamala
        </p>

        <a href="#home" className="backToTop">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}