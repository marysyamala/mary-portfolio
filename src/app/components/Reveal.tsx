"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type {
  ComponentProps,
  ComponentType,
  ElementType,
  ReactNode,
} from "react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

// Resolve a motion component for an HTML tag (e.g. "div" -> motion.div).
// Typed as a props-permissive component so JSX accepts the animation props.
type MotionProps = Record<string, unknown>;
function motionTag(tag: ElementType): ComponentType<MotionProps> {
  return (motion as unknown as Record<string, ComponentType<MotionProps>>)[
    tag as string
  ];
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** "mount" animates on load (hero); "inView" animates on scroll (default). */
  mode?: "mount" | "inView";
  delay?: number;
  y?: number;
  duration?: number;
  id?: string;
};

/** Single fade-and-rise reveal. */
export function Reveal({
  children,
  as = "div",
  className,
  mode = "inView",
  delay = 0,
  y = 28,
  duration = 0.7,
  id,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motionTag(as);

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = { duration: reduce ? 0.3 : duration, delay, ease: EASE };

  const anim =
    mode === "mount"
      ? { initial: hidden, animate: shown, transition }
      : {
          initial: hidden,
          whileInView: shown,
          transition,
          viewport: { once: true, amount: 0.2 },
        };

  return (
    <Comp className={className} id={id} {...anim}>
      {children}
    </Comp>
  );
}

/** Container that staggers the reveal of its <RevealItem> children on scroll. */
export function RevealStagger({
  children,
  as = "div",
  className,
  stagger = 0.08,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: number;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const Comp = motionTag(as);

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger } },
  };

  return (
    <Comp
      className={className}
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}

/** Child of <RevealStagger>; inherits the staggered timing. */
export function RevealItem({
  children,
  as = "div",
  className,
  y = 24,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
} & Omit<ComponentProps<"div">, "ref">) {
  const reduce = useReducedMotion();
  const Comp = motionTag(as);

  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      };

  return (
    <Comp className={className} variants={variants} {...rest}>
      {children}
    </Comp>
  );
}
