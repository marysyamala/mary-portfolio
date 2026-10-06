"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type Category = {
  num: string;
  label: string;
  title: string;
  tags: string[];
};

const CATEGORIES: Category[] = [
  {
    num: "01",
    label: "GENERATIVE AI",
    title: "GenAI, LLMs & NLP",
    tags: [
      "LangChain",
      "OpenAI API",
      "LLaMA-2",
      "FinBERT",
      "RAG",
      "Prompt Engineering",
      "Embeddings",
      "Vector Search",
      "Guardrails",
    ],
  },
  {
    num: "02",
    label: "MACHINE LEARNING",
    title: "ML & Model Evaluation",
    tags: [
      "Scikit-learn",
      "LightGBM",
      "Deep Learning",
      "Classification",
      "Time-Series",
      "Feature Engineering",
      "Walk-Forward Validation",
    ],
  },
  {
    num: "03",
    label: "PROGRAMMING & APIS",
    title: "Python & Data Engineering",
    tags: [
      "Python",
      "SQL",
      "PySpark",
      "FastAPI",
      "REST / WebSockets",
      "ETL / ELT",
      "dbt",
      "Parquet",
    ],
  },
  {
    num: "04",
    label: "PLATFORMS & DATA",
    title: "Vector Search & Databases",
    tags: [
      "PostgreSQL",
      "pgvector",
      "Snowflake",
      "Databricks",
      "BigQuery",
      "SQL Server",
      "MongoDB",
    ],
  },
  {
    num: "05",
    label: "CLOUD & MLOPS",
    title: "Cloud, MLOps & DevOps",
    tags: [
      "AWS (ECS, S3, RDS)",
      "Azure",
      "GCP",
      "Apache Airflow",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    num: "06",
    label: "ANALYTICS & QUALITY",
    title: "Analytics & Data Quality",
    tags: [
      "Power BI",
      "Tableau",
      "KPI Dashboards",
      "Data Profiling",
      "Reconciliation",
      "Anomaly Detection",
    ],
  },
];

const EASE = [0.2, 0.7, 0.2, 1] as const;

export default function SkillsViz() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };

  const category: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE, staggerChildren: 0.03 },
        },
      };

  const tag: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
      };

  return (
    <motion.div
      className="skillsContainer"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {CATEGORIES.map((cat) => (
        <motion.div className="skillCategory" variants={category} key={cat.num}>
          <div className="skillCategoryNumber">{cat.num}</div>

          <div>
            <p className="skillCategoryLabel">{cat.label}</p>
            <h3>{cat.title}</h3>
          </div>

          <div className="skillTags">
            {cat.tags.map((t) => (
              <motion.span
                key={t}
                variants={tag}
                whileHover={reduce ? undefined : { y: -3, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
