"use client";

import * as React from "react";
import "./steps.css";
import type { StepsProps, StepsColors } from "./types";
import { defaultColors } from "./constants";
import {
  formatNumber,
  isStepClickable,
  getFirstIncompleteIndex,
} from "./utils";

export * from "./types";
export * from "./constants";

// Simple checkmark SVG icon
const CheckIcon: React.FC<{ className?: string; color: string }> = ({
  className = "",
  color,
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function Steps({
  steps,
  currentStep = 0,
  linear = false,
  readOnly = false,
  onStepClick,
  colors,
  size = "md",
  className = "",
  style,
}: StepsProps) {
  const mergedColors = React.useMemo(
    () => ({ ...defaultColors, ...colors }),
    [colors],
  );

  const handleStepClick = (index: number) => {
    if (readOnly) return;

    if (linear) {
      const firstIncompleteIndex = getFirstIncompleteIndex(steps);
      if (index > firstIncompleteIndex && firstIncompleteIndex !== -1) {
        return;
      }
    }

    onStepClick?.(index);
  };

  const containerClasses =
    `steps-container steps-size-${size} ${className}`.trim();

  return (
    <div className={containerClasses} style={style}>
      <div className="steps-flex-container">
        {steps.map((step, index) => {
          const isCompleted = step.completed;
          const isCurrent = index === currentStep;
          const clickable = isStepClickable(index, steps, readOnly, linear);
          const isLast = index === steps.length - 1;

          // Determine colors based on state
          const circleStyle: React.CSSProperties = {
            backgroundColor: isCompleted
              ? mergedColors.completed
              : isCurrent
                ? mergedColors.currentBackground
                : mergedColors.inactiveBackground,
            borderColor: isCompleted
              ? mergedColors.completedBorder
              : isCurrent
                ? mergedColors.currentBorder
                : mergedColors.inactiveBorder,
            color: isCompleted
              ? mergedColors.completedText
              : isCurrent
                ? mergedColors.currentText
                : mergedColors.inactiveText,
            boxShadow: isCurrent
              ? `0 0 0 4px ${mergedColors.currentRing}`
              : "none",
          };

          const titleColor = isCompleted
            ? mergedColors.titleCompleted
            : isCurrent
              ? mergedColors.titleCurrent
              : mergedColors.titleInactive;

          const valueColor = isCompleted
            ? mergedColors.valueCompleted
            : isCurrent
              ? mergedColors.valueCurrent
              : mergedColors.valueInactive;

          const connectorColor = steps[index - 1]?.completed
            ? mergedColors.connectorCompleted
            : mergedColors.connectorIncomplete;

          const rightConnectorColor = isCompleted
            ? mergedColors.connectorCompleted
            : mergedColors.connectorIncomplete;

          // Determine circle classes
          const circleClasses = [
            "step-circle",
            clickable && !readOnly ? "step-circle-clickable" : "",
            !clickable && !readOnly ? "step-circle-not-clickable" : "",
            readOnly ? "step-circle-readonly" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={step.id} className="step-item">
              {/* Step indicator row */}
              <div className="step-indicator-row">
                {/* Left connector */}
                {index > 0 && (
                  <div
                    className="step-connector"
                    style={{ backgroundColor: connectorColor }}
                  />
                )}

                {/* Circle */}
                <button
                  type="button"
                  onClick={() => handleStepClick(index)}
                  disabled={!clickable}
                  aria-disabled={!clickable}
                  style={circleStyle}
                  className={circleClasses}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  {isCompleted ? (
                    <CheckIcon
                      className="step-checkmark"
                      color={mergedColors.completedText}
                    />
                  ) : (
                    <span className="step-number">{index + 1}</span>
                  )}
                </button>

                {/* Right connector */}
                {!isLast && (
                  <div
                    className="step-connector"
                    style={{ backgroundColor: rightConnectorColor }}
                  />
                )}
              </div>

              {/* Title */}
              <div className="step-title-container">
                <p className="step-title" style={{ color: titleColor }}>
                  {step.title}
                </p>

                {/* From/To values */}
                <p className="step-value" style={{ color: valueColor }}>
                  {formatNumber(step.from)}/{formatNumber(step.to)}
                  {step.symbol && ` ${step.symbol}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// Convenience export for creating custom colors
// ============================================================================

export function createStepsColors(colors: StepsColors): StepsColors {
  return colors;
}
