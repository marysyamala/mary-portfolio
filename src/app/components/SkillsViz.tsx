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
    label: "PROGRAMMING",
    title: "Programming & Data",
    tags: ["Python", "SQL", "PySpark", "Java"],
  },
  {
    num: "02",
    label: "DATA ENGINEERING",
    title: "Pipelines & Integration",
    tags: [
      "ETL / ELT",
      "dbt",
      "API Integration",
      "Data Transformation",
      "Data Validation",
      "Apache Airflow",
    ],
  },
  {
    num: "03",
    label: "CLOUD",
    title: "Cloud & Warehousing",
    tags: ["GCP", "BigQuery", "AWS", "S3", "Athena", "Azure", "Snowflake", "Databricks"],
  },
  {
    num: "04",
    label: "ANALYTICS",
    title: "Analytics & BI",
    tags: ["Power BI", "Tableau", "Excel", "KPI Dashboards", "Google Analytics"],
  },
  {
    num: "05",
    label: "DATABASES",
    title: "Data Platforms",
    tags: ["SQL Server", "PostgreSQL", "MongoDB", "Oracle"],
  },
  {
    num: "06",
    label: "DEVOPS",
    title: "Infrastructure & Workflow",
    tags: ["Terraform", "CI/CD", "Git", "JIRA", "Postman", "ServiceNow"],
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
