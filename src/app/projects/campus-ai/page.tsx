import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus AI Assistant | Mary Syamala",
  description:
    "A conversational AI assistant that helps users discover university information through natural-language interactions and intelligent retrieval.",
};

export default function CampusAIPage() {
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
          GENERATIVE AI / LLM · RAG · NLP
        </div>

        <h1>
          Campus<span>AI</span>
        </h1>

        <p className="caseTagline">
          A conversational AI assistant that helps users find university
          information through natural-language questions and intelligent
          retrieval.
        </p>

        <div className="caseMeta">

          <div>
            <span>PROJECT TYPE</span>
            <strong>Generative AI</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>Education</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>AI · NLP · Full-Stack</strong>
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
            University info
            <br />
            <span>is scattered.</span>
          </h2>

          <div className="caseText">

            <p className="caseLead">
              Campus AI is a retrieval-augmented assistant designed to
              answer questions about a university in plain language.
            </p>

            <p>
              Details about programs, deadlines, services, and policies are
              usually spread across many pages and PDFs that are slow to
              search.
            </p>

            <p>
              Campus AI is being built to ground a language model in that
              information so answers are relevant, specific, and grounded
              in source content.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM */}
      <section className="caseSection">

        <div className="caseSectionNumber">02 / THE PROBLEM</div>

        <div className="problemHeader">

          <h2>
            Finding answers
            <br />
            <span>takes too long.</span>
          </h2>

          <p>
            Students and visitors often dig through scattered pages just to
            answer a single, simple question.
          </p>

        </div>

        <div className="problemGrid">

          <div className="problemCard">
            <span>01</span>
            <h3>Scattered Sources</h3>
            <p>
              Information lives across many pages, documents, and formats
              with no single place to ask.
            </p>
          </div>

          <div className="problemCard">
            <span>02</span>
            <h3>Keyword Search</h3>
            <p>
              Traditional search returns links, not answers, and misses
              questions phrased in natural language.
            </p>
          </div>

          <div className="problemCard">
            <span>03</span>
            <h3>Hallucination Risk</h3>
            <p>
              A raw language model can invent details, so responses must be
              grounded in real source content.
            </p>
          </div>

          <div className="problemCard">
            <span>04</span>
            <h3>Freshness</h3>
            <p>
              Information changes over time, so the knowledge base needs to
              stay current and easy to update.
            </p>
          </div>

        </div>

      </section>

      {/* SOLUTION */}
      <section className="caseSection">

        <div className="caseSectionNumber">03 / THE SOLUTION</div>

        <div className="solutionIntro">

          <h2>
            Retrieval-grounded
            <br />
            <span>answers.</span>
          </h2>

          <p>
            Campus AI retrieves the most relevant source passages for a
            question and uses them to ground the language model&apos;s
            response, so answers stay accurate and traceable.
          </p>

        </div>

        <div className="pipeline">

          <div className="pipelineNode">
            <span>01</span>
            <strong>Question</strong>
            <p>Natural Language</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>02</span>
            <strong>Retrieval</strong>
            <p>Relevant Docs</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>03</span>
            <strong>LLM</strong>
            <p>Grounded Answer</p>
          </div>

          <div className="pipelineArrow">→</div>

          <div className="pipelineNode">
            <span>04</span>
            <strong>Response</strong>
            <p>With Context</p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="caseSection">

        <div className="caseSectionNumber">04 / CORE FEATURES</div>

        <div className="caseTwoColumn">

          <h2>
            What Campus AI
            <br />
            is <span>designed to do.</span>
          </h2>

          <div className="featureList">

            <div>
              <span>01</span>
              <p>Natural-Language Q&amp;A</p>
            </div>

            <div>
              <span>02</span>
              <p>Retrieval-Augmented Generation (RAG)</p>
            </div>

            <div>
              <span>03</span>
              <p>Grounded, Source-Aware Answers</p>
            </div>

            <div>
              <span>04</span>
              <p>Conversational Interface</p>
            </div>

            <div>
              <span>05</span>
              <p>Updatable Knowledge Base</p>
            </div>

            <div>
              <span>06</span>
              <p>Fast, Relevant Retrieval</p>
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
          <span>LLM + RAG stack.</span>
        </h2>

        <div className="techGrid">

          <div>
            <span>MODEL</span>
            <strong>LLaMA</strong>
          </div>

          <div>
            <span>APPROACH</span>
            <strong>RAG</strong>
          </div>

          <div>
            <span>NLP</span>
            <strong>LLMs</strong>
          </div>

          <div>
            <span>LANGUAGE</span>
            <strong>Python</strong>
          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="caseNext">

        <span>PROJECT 04</span>

        <h2>
          Campus AI is still
          <br />
          <em>evolving.</em>
        </h2>

        <p>
          The assistant is being developed iteratively as retrieval,
          grounding, and conversation capabilities are refined.
        </p>

        <Link href="/#projects">
          ← Return to portfolio
        </Link>

      </section>

    </main>
  );
}
