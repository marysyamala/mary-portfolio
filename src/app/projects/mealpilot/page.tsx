import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MealPilot AI | Mary Syamala",
  description:
    "MealPilot AI — an intelligent meal-planning platform that generates personalized weekly meal plans and simplifies everyday food planning.",
};

export default function MealPilotPage() {
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
          AI PRODUCT / AI · PRODUCT DEVELOPMENT
        </div>

        <h1>
          Meal<span>Pilot</span>
        </h1>

        <p className="caseTagline">
          An intelligent meal-planning platform designed to generate
          personalized weekly meal plans and take the daily friction out
          of deciding what to eat.
        </p>

        <div className="caseMeta">

          <div>
            <span>PROJECT TYPE</span>
            <strong>AI Product</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>Food &amp; Lifestyle</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Product · AI · Full-Stack</strong>
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
            Planning meals
            <br />
            <span>is a daily chore.</span>
          </h2>

          <div className="caseText">

            <p className="caseLead">
              MealPilot AI is a meal-planning product designed to turn
              vague preferences into a concrete, personalized weekly plan.
            </p>

            <p>
              Deciding what to eat, balancing preferences, and keeping
              variety across a week takes real time and mental energy —
              and most people fall back on the same few meals.
            </p>

            <p>
              MealPilot is being designed to take a person&apos;s tastes,
              goals, and constraints and generate a structured plan they
              can actually follow.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM */}
      <section className="caseSection">

        <div className="caseSectionNumber">02 / THE PROBLEM</div>

        <div className="problemHeader">

          <h2>
            Everyday food planning
            <br />
            <span>is repetitive.</span>
          </h2>

          <p>
            Building a good weekly plan means juggling preferences,
            variety, nutrition, and time — usually with no help at all.
          </p>

        </div>

        <div className="problemGrid">

          <div className="problemCard">
            <span>01</span>
            <h3>Decision Fatigue</h3>
            <p>
              Choosing meals every day adds up to dozens of small
              decisions that most people would rather not make.
            </p>
          </div>

          <div className="problemCard">
            <span>02</span>
            <h3>Repetition</h3>
            <p>
              Without a system, people cycle through the same handful of
              meals and lose variety over time.
            </p>
          </div>

          <div className="problemCard">
            <span>03</span>
            <h3>Personalization</h3>
            <p>
              Generic meal plans ignore individual tastes, dietary needs,
              and time constraints.
            </p>
          </div>

          <div className="problemCard">
            <span>04</span>
            <h3>Follow-Through</h3>
            <p>
              A plan only helps if it is realistic enough to actually
              stick to during a busy week.
            </p>
          </div>

        </div>

      </section>

      {/* SOLUTION */}
      <section className="caseSection">

        <div className="caseSectionNumber">03 / THE SOLUTION</div>

        <div className="solutionIntro">

          <h2>
            Preferences in,
            <br />
            <span>a plan out.</span>
          </h2>

          <p>
            MealPilot captures preferences and constraints, then uses an
            AI generation layer to produce a personalized weekly plan
            served through a simple product interface.
          </p>

        </div>

        <div className="pipeline">

          <div className="pipelineNode">
            <span>01</span>
            <strong>Preferences</strong>
            <p>Tastes + Goals</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>02</span>
            <strong>Constraints</strong>
            <p>Diet + Time</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>03</span>
            <strong>AI Generation</strong>
            <p>Plan Builder</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>04</span>
            <strong>Weekly Plan</strong>
            <p>Personalized</p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="caseSection">

        <div className="caseSectionNumber">04 / CORE FEATURES</div>

        <div className="caseTwoColumn">

          <h2>
            What MealPilot
            <br />
            is <span>designed to do.</span>
          </h2>

          <div className="featureList">

            <div>
              <span>01</span>
              <p>Personalized Weekly Meal Plans</p>
            </div>

            <div>
              <span>02</span>
              <p>Taste &amp; Preference Profiles</p>
            </div>

            <div>
              <span>03</span>
              <p>Dietary &amp; Nutrition Constraints</p>
            </div>

            <div>
              <span>04</span>
              <p>Variety Across the Week</p>
            </div>

            <div>
              <span>05</span>
              <p>Simple, Follow-able Output</p>
            </div>

            <div>
              <span>06</span>
              <p>AI-Assisted Suggestions</p>
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
          <span>AI product stack.</span>
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
            <span>FRONTEND</span>
            <strong>Next.js</strong>
          </div>

          <div>
            <span>INTELLIGENCE</span>
            <strong>AI</strong>
          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="caseNext">

        <span>PROJECT 02</span>

        <h2>
          MealPilot is still
          <br />
          <em>evolving.</em>
        </h2>

        <p>
          The product is being developed iteratively as personalization,
          nutrition, and planning capabilities are introduced.
        </p>

        <Link href="/#projects">
          ← Return to portfolio
        </Link>

      </section>

    </main>
  );
}
