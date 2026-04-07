import type { StepsColors } from "./types";

// ============================================================================
// Default Colors (simple hex values, no CSS variables)
// ============================================================================

export const defaultColors: Required<StepsColors> = {
  completed: "#3b82f6",
  completedBorder: "#3b82f6",
  completedText: "#ffffff",
  currentBorder: "#3b82f6",
  currentBackground: "#ffffff",
  currentText: "#3b82f6",
  currentRing: "rgba(59, 130, 246, 0.2)",
  inactiveBorder: "#d1d5db",
  inactiveBackground: "#ffffff",
  inactiveText: "#9ca3af",
  connectorCompleted: "#3b82f6",
  connectorIncomplete: "#e5e7eb",
  titleCompleted: "#1f2937",
  titleCurrent: "#1f2937",
  titleInactive: "#9ca3af",
  valueCompleted: "#3b82f6",
  valueCurrent: "#6b7280",
  valueInactive: "#9ca3af",
};

// ============================================================================
// Preset Color Themes
// ============================================================================

export const stepsColorPresets = {
  default: defaultColors,

  emerald: {
    completed: "#10b981",
    completedBorder: "#10b981",
    completedText: "#ffffff",
    currentBorder: "#10b981",
    currentBackground: "#ecfdf5",
    currentText: "#059669",
    currentRing: "rgba(16, 185, 129, 0.2)",
    inactiveBorder: "#d1d5db",
    inactiveBackground: "#ffffff",
    inactiveText: "#9ca3af",
    connectorCompleted: "#10b981",
    connectorIncomplete: "#e5e7eb",
    titleCompleted: "#065f46",
    titleCurrent: "#065f46",
    titleInactive: "#6b7280",
    valueCompleted: "#10b981",
    valueCurrent: "#6b7280",
    valueInactive: "#9ca3af",
  } satisfies StepsColors,

  blue: {
    completed: "#3b82f6",
    completedBorder: "#3b82f6",
    completedText: "#ffffff",
    currentBorder: "#3b82f6",
    currentBackground: "#eff6ff",
    currentText: "#2563eb",
    currentRing: "rgba(59, 130, 246, 0.2)",
    inactiveBorder: "#d1d5db",
    inactiveBackground: "#ffffff",
    inactiveText: "#9ca3af",
    connectorCompleted: "#3b82f6",
    connectorIncomplete: "#e5e7eb",
    titleCompleted: "#1e40af",
    titleCurrent: "#1e40af",
    titleInactive: "#6b7280",
    valueCompleted: "#3b82f6",
    valueCurrent: "#6b7280",
    valueInactive: "#9ca3af",
  } satisfies StepsColors,

  amber: {
    completed: "#f59e0b",
    completedBorder: "#f59e0b",
    completedText: "#ffffff",
    currentBorder: "#f59e0b",
    currentBackground: "#fffbeb",
    currentText: "#d97706",
    currentRing: "rgba(245, 158, 11, 0.2)",
    inactiveBorder: "#d1d5db",
    inactiveBackground: "#ffffff",
    inactiveText: "#9ca3af",
    connectorCompleted: "#f59e0b",
    connectorIncomplete: "#e5e7eb",
    titleCompleted: "#92400e",
    titleCurrent: "#92400e",
    titleInactive: "#6b7280",
    valueCompleted: "#f59e0b",
    valueCurrent: "#6b7280",
    valueInactive: "#9ca3af",
  } satisfies StepsColors,

  rose: {
    completed: "#f43f5e",
    completedBorder: "#f43f5e",
    completedText: "#ffffff",
    currentBorder: "#f43f5e",
    currentBackground: "#fff1f2",
    currentText: "#e11d48",
    currentRing: "rgba(244, 63, 94, 0.2)",
    inactiveBorder: "#d1d5db",
    inactiveBackground: "#ffffff",
    inactiveText: "#9ca3af",
    connectorCompleted: "#f43f5e",
    connectorIncomplete: "#e5e7eb",
    titleCompleted: "#9f1239",
    titleCurrent: "#9f1239",
    titleInactive: "#6b7280",
    valueCompleted: "#f43f5e",
    valueCurrent: "#6b7280",
    valueInactive: "#9ca3af",
  } satisfies StepsColors,

  slate: {
    completed: "#475569",
    completedBorder: "#475569",
    completedText: "#ffffff",
    currentBorder: "#475569",
    currentBackground: "#f8fafc",
    currentText: "#334155",
    currentRing: "rgba(71, 85, 105, 0.2)",
    inactiveBorder: "#cbd5e1",
    inactiveBackground: "#ffffff",
    inactiveText: "#94a3b8",
    connectorCompleted: "#475569",
    connectorIncomplete: "#e2e8f0",
    titleCompleted: "#1e293b",
    titleCurrent: "#1e293b",
    titleInactive: "#64748b",
    valueCompleted: "#475569",
    valueCurrent: "#64748b",
    valueInactive: "#94a3b8",
  } satisfies StepsColors,
} as const;

// ============================================================================
// Helper Function for Creating Custom Colors
// ============================================================================

/**
 * Helper function to create a StepsColors object with proper typing
 * Merges your custom colors with the defaults
 */
export function createStepsColors(colors: StepsColors): StepsColors {
  return { ...defaultColors, ...colors };
}
