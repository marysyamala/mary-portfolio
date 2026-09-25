import Link from "next/link";
import HeroCanvas from "./components/HeroCanvas";
import Navbar from "./components/Navbar";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TiltCard from "./components/TiltCard";
import SkillsViz from "./components/SkillsViz";
import { Reveal, RevealStagger, RevealItem } from "./components/Reveal";

export default function Home() {
  return (
    <main id="main">
      <HeroCanvas />
      <Navbar />

      <section className="hero"  id="home">
        <Reveal as="div" className="heroLabel" mode="mount" delay={0.05} y={16}>
          <span className="greenDot"></span>
          DATA · ANALYTICS · AI
        </Reveal>

        <Reveal as="h1" mode="mount" delay={0.15}>
          I turn data into
          <br />
          <span>useful products.</span>
        </Reveal>

        <Reveal
          as="p"
          className="heroDescription"
          mode="mount"
          delay={0.3}
        >
          Hi, I&apos;m <strong>Mary Syamala</strong> — a Data Engineer,
          Business Analyst, and AI Product Builder focused on transforming
          complex data into reliable systems, actionable insights, and
          intelligent products.
        </Reveal>

        <Reveal as="div" className="heroButtons" mode="mount" delay={0.42}>
          <a href="#projects" className="primaryButton">
            Explore My Work
            <span>→</span>
          </a>

          <a href="#about" className="secondaryButton">
            About Me
          </a>
        </Reveal>

        <Reveal as="div" className="heroBottom" mode="mount" delay={0.54}>
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
        </Reveal>
      </section>
      {/* ABOUT */}
      <section className="section" id="about">
        <Reveal as="div" className="sectionLabel" y={14}>01 / ABOUT</Reveal>

        <div className="aboutGrid">
          <Reveal as="div">
            <h2>
              Data tells a story.
              <br />
              <span>I make it useful.</span>
            </h2>
          </Reveal>

          <Reveal as="div" className="aboutContent" delay={0.1}>
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
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <Reveal as="div" className="sectionLabel" y={14}>02 / EXPERIENCE</Reveal>

        <Reveal as="div" className="experienceHeading">
          <h2>
            Experience that
            <br />
            <span>connects the dots.</span>
          </h2>

          <p>
            From business requirements to data pipelines and analytics,
            I&apos;ve worked across the data lifecycle.
          </p>
        </Reveal>

        <ExperienceTimeline />
      </section>
            {/* PROJECTS */}
      <section className="section" id="projects">
        <Reveal as="div" className="sectionLabel" y={14}>03 / SELECTED WORK</Reveal>

        <Reveal as="div" className="projectsHeading">
          <h2>
            Products & projects
            <br />
            <span>I&apos;ve built.</span>
          </h2>

          <p>
            Projects combining data engineering, analytics, machine learning,
            artificial intelligence, and product development.
          </p>
        </Reveal>

        <RevealStagger as="div" className="projectsGrid" stagger={0.1}>
          {/* STOCKAI */}
          <TiltCard className="projectCard featuredProject" max={4}>
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
          </TiltCard>

          {/* MEALPILOT */}
          <TiltCard className="projectCard">
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
          </TiltCard>

          {/* DATA PIPELINE */}
          <TiltCard className="projectCard">
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
          </TiltCard>

          {/* CAMPUS AI */}
          <TiltCard className="projectCard">
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
          </TiltCard>

          {/* ANALYTICS */}
          <TiltCard className="projectCard">
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
          </TiltCard>
        </RevealStagger>
      </section>
            {/* SKILLS */}
      <section className="section" id="skills">
        <Reveal as="div" className="sectionLabel" y={14}>04 / TOOLKIT</Reveal>

        <Reveal as="div" className="skillsHeading">
          <h2>
            Tools I use to turn
            <br />
            <span>data into impact.</span>
          </h2>

          <p>
            My toolkit spans analytics, data engineering, cloud platforms,
            databases, automation, and business intelligence.
          </p>
        </Reveal>

        <SkillsViz />
      </section>

      {/* EDUCATION */}
      <section className="section educationSection">
        <Reveal as="div" className="sectionLabel" y={14}>05 / EDUCATION</Reveal>

        <Reveal as="div" className="educationHeading">
          <h2>
            Where I built my
            <br />
            <span>foundation.</span>
          </h2>
        </Reveal>

        <RevealStagger as="div" className="educationList">

          <RevealItem as="div" className="educationItem">
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
          </RevealItem>

          <RevealItem as="div" className="educationItem">
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
          </RevealItem>

        </RevealStagger>

        <Reveal as="div" className="certifications" delay={0.1}>
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
        </Reveal>
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

        <Reveal as="div" className="contactContent">
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
        </Reveal>

        <Reveal as="div" className="contactLinks" delay={0.1}>
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
        </Reveal>
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