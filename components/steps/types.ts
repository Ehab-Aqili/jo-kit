import * as React from "react";

export interface Step {
  id: string;
  title: string;
  from: number;
  to: number;
  symbol?: string;
  completed?: boolean;
}

export interface StepsColors {
  /** Background color for completed step circles */
  completed?: string;
  /** Border color for completed step circles */
  completedBorder?: string;
  /** Text/icon color inside completed circles */
  completedText?: string;
  /** Border color for current step circle */
  currentBorder?: string;
  /** Background color for current step circle */
  currentBackground?: string;
  /** Text color inside current circle */
  currentText?: string;
  /** Ring/glow color around current step */
  currentRing?: string;
  /** Border color for inactive/pending step circles */
  inactiveBorder?: string;
  /** Background color for inactive step circles */
  inactiveBackground?: string;
  /** Text color inside inactive circles */
  inactiveText?: string;
  /** Color of connector line when completed */
  connectorCompleted?: string;
  /** Color of connector line when incomplete */
  connectorIncomplete?: string;
  /** Title text color for completed steps */
  titleCompleted?: string;
  /** Title text color for current step */
  titleCurrent?: string;
  /** Title text color for inactive steps */
  titleInactive?: string;
  /** Value text color for completed steps */
  valueCompleted?: string;
  /** Value text color for current step */
  valueCurrent?: string;
  /** Value text color for inactive steps */
  valueInactive?: string;
}

export interface StepsProps {
  /** Array of step objects */
  steps: Step[];
  /** Index of the currently active step */
  currentStep?: number;
  /** If true, steps must be completed in order */
  linear?: boolean;
  /** If true, all steps are non-interactive */
  readOnly?: boolean;
  /** Callback when a step is clicked */
  onStepClick?: (stepIndex: number) => void;
  /** Custom color configuration */
  colors?: StepsColors;
  /** Size variant */
  size?: StepSize;
  /** Additional class names */
  className?: string;
  /** Inline styles for container */
  style?: React.CSSProperties;
}

export type StepSize = "sm" | "md" | "lg";

export type StepsColorPreset =
  | "default"
  | "emerald"
  | "blue"
  | "amber"
  | "rose"
  | "slate";
