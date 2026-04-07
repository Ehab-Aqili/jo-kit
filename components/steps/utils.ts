import type { Step } from "./types";

/**
 * Format numbers with K/M suffixes
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
  }
  return num.toString();
}

/**
 * Check if a step is clickable based on linear mode and completion status
 */
export function isStepClickable(
  index: number,
  steps: Step[],
  readOnly: boolean,
  linear: boolean,
): boolean {
  if (readOnly) return false;

  if (linear) {
    const firstIncompleteIndex = steps.findIndex((step) => !step.completed);
    return index <= firstIncompleteIndex || firstIncompleteIndex === -1;
  }

  return true;
}

/**
 * Get the first incomplete step index
 */
export function getFirstIncompleteIndex(steps: Step[]): number {
  return steps.findIndex((step) => !step.completed);
}
