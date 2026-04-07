# Steps Package

A **zero-dependency**, lightweight React Steps/Stepper component built with TypeScript and CSS. Clean, customizable, and framework-agnostic.

## Features

- 🚀 **Zero Dependencies** - Only React as peer dependency
- 🎨 **CSS-Based Styling** - No inline styles, easy to customize
- 💪 **Fully Typed** - Complete TypeScript support with exported types
- 📱 **Responsive** - Works on all screen sizes
- ♿ **Accessible** - Proper ARIA labels and semantic HTML
- 🎯 **Framework Agnostic** - Works with React, Next.js, Remix, etc.
- 📦 **Tiny Bundle** - Minimal footprint
- 🌈 **Custom Colors** - Easy color customization per instance

## Installation

```bash
npm install steps-package
# or
yarn add steps-package
# or
pnpm add steps-package
```

## Peer Dependencies

Only React is required:

```bash
npm install react
```

## Quick Start

### 1. Import the CSS

```tsx
import "steps-package/steps.css";
```

Or in your CSS file:

```css
@import "steps-package/steps.css";
```

### 2. Use the Component

```tsx
import { Steps } from "steps-package";
import type { Step } from "steps-package";
import { useState } from "react";

const mySteps: Step[] = [
  { id: "1", title: "Account", from: 0, to: 100, completed: true },
  { id: "2", title: "Profile", from: 50, to: 100, completed: false },
  { id: "3", title: "Complete", from: 0, to: 100, completed: false },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Steps
      steps={mySteps}
      currentStep={currentStep}
      onStepClick={(index) => setCurrentStep(index)}
    />
  );
}
```

## API Reference

### Exported Types

All types are exported for your convenience:

```tsx
import type {
  Step,
  StepsProps,
  StepsColors,
  StepSize,
  StepsColorPreset,
} from "steps-package";
```

### Step Interface

```tsx
interface Step {
  id: string; // Unique identifier
  title: string; // Step label/name
  from: number; // Progress start value
  to: number; // Progress target value
  symbol?: string; // Optional unit symbol (e.g., "$", "%", "pts")
  completed?: boolean; // Whether step is completed
}
```

### StepsProps Interface

```tsx
interface StepsProps {
  steps: Step[]; // Array of step configurations
  currentStep?: number; // Index of currently active step (default: 0)
  linear?: boolean; // Enforce sequential completion (default: false)
  readOnly?: boolean; // Disable all interactions (default: false)
  onStepClick?: (index: number) => void; // Callback when step is clicked
  colors?: StepsColors; // Custom color overrides
  size?: StepSize; // 'sm' | 'md' | 'lg' (default: 'md')
  className?: string; // Additional CSS classes
  style?: React.CSSProperties; // Inline styles for container
}
```

### StepsColors Interface

Full control over all colors:

```tsx
interface StepsColors {
  // Completed step
  completed?: string; // Circle background
  completedBorder?: string; // Circle border
  completedText?: string; // Text/icon inside circle

  // Current/active step
  currentBorder?: string; // Circle border
  currentBackground?: string; // Circle background
  currentText?: string; // Text inside circle
  currentRing?: string; // Glow/ring around circle

  // Inactive/pending steps
  inactiveBorder?: string; // Circle border
  inactiveBackground?: string; // Circle background
  inactiveText?: string; // Text inside circle

  // Connector lines
  connectorCompleted?: string; // Line color when completed
  connectorIncomplete?: string; // Line color when incomplete

  // Step titles
  titleCompleted?: string; // Title text color when completed
  titleCurrent?: string; // Title text color when current
  titleInactive?: string; // Title text color when inactive

  // Progress values (from/to numbers)
  valueCompleted?: string; // Value text color when completed
  valueCurrent?: string; // Value text color when current
  valueInactive?: string; // Value text color when inactive
}
```

## Customization

### Size Variants

Three predefined sizes:

```tsx
<Steps steps={mySteps} size="sm" />  // Small: 32px circles
<Steps steps={mySteps} size="md" />  // Medium: 48px circles (default)
<Steps steps={mySteps} size="lg" />  // Large: 64px circles
```

### Use Color Presets

```tsx
import { Steps, stepsColorPresets } from 'steps-package';

// Emerald theme
<Steps steps={mySteps} colors={stepsColorPresets.emerald} />

// Blue theme
<Steps steps={mySteps} colors={stepsColorPresets.blue} />

// Amber theme
<Steps steps={mySteps} colors={stepsColorPresets.amber} />

// Rose theme
<Steps steps={mySteps} colors={stepsColorPresets.rose} />

// Slate theme
<Steps steps={mySteps} colors={stepsColorPresets.slate} />
```

### Custom Colors

Create your own color scheme:

```tsx
import { Steps, createStepsColors } from "steps-package";
import type { StepsColors } from "steps-package";

const customColors: StepsColors = createStepsColors({
  completed: "#10b981",
  completedBorder: "#10b981",
  completedText: "#ffffff",
  currentBorder: "#3b82f6",
  currentBackground: "#eff6ff",
  currentText: "#2563eb",
  currentRing: "rgba(59, 130, 246, 0.2)",
  // ... other properties optional
});

<Steps steps={mySteps} colors={customColors} />;
```

### Custom CSS

Override any styles using CSS:

```css
/* Custom styling */
.steps-container {
  padding: 20px;
  background: #f9fafb;
}

.step-circle {
  border-width: 3px;
}

.step-title {
  font-family: "Your Custom Font", sans-serif;
  font-weight: bold;
}

/* Size-specific overrides */
.steps-size-lg .step-circle {
  width: 80px;
  height: 80px;
}
```

## Advanced Usage

### Linear Mode

Enforce sequential completion:

```tsx
<Steps
  steps={mySteps}
  currentStep={currentStep}
  linear={true}
  onStepClick={(index) => {
    // Users can only click on current or previous steps
    setCurrentStep(index);
  }}
/>
```

### Read-Only Mode

Display-only, no interactions:

```tsx
<Steps steps={mySteps} currentStep={currentStep} readOnly={true} />
```

### Dynamic Progress Values

Show real progress with from/to values:

```tsx
const steps: Step[] = [
  {
    id: "1",
    title: "Order",
    from: 3,
    to: 10,
    symbol: "items",
    completed: false,
  },
  {
    id: "2",
    title: "Payment",
    from: 50,
    to: 100,
    symbol: "$",
    completed: false,
  },
];
```

### Using with TypeScript

Import all necessary types:

```tsx
import { Steps, stepsColorPresets, createStepsColors } from "steps-package";
import type { Step, StepsProps, StepsColors, StepSize } from "steps-package";

// Type-safe step configuration
const steps: Step[] = [
  { id: "1", title: "Start", from: 0, to: 100, completed: true },
];

// Type-safe color configuration
const colors: StepsColors = {
  completed: "#22c55e",
  currentBorder: "#3b82f6",
};

// Type-safe component props
const stepsProps: StepsProps = {
  steps,
  currentStep: 0,
  size: "md",
  colors,
};

<Steps {...stepsProps} />;
```

## CSS Class Reference

```css
.steps-container          /* Main container */
.steps-size-sm           /* Small size variant */
.steps-size-md           /* Medium size variant */
.steps-size-lg           /* Large size variant */
.steps-flex-container    /* Inner flex container */
.step-item               /* Individual step wrapper */
.step-indicator-row      /* Circle and connectors row */
.step-connector          /* Connector line */
.step-circle             /* Circle button */
.step-circle-clickable   /* Clickable state */
.step-circle-not-clickable /* Not clickable state */
.step-circle-readonly    /* Read-only state */
.step-checkmark          /* Checkmark icon */
.step-number             /* Step number */
.step-title-container    /* Title and value wrapper */
.step-title              /* Step title text */
.step-value              /* Progress value text */
```

## Package Structure

```
steps-package/
├── components/
│   └── steps/
│       ├── index.tsx       # Main component
│       ├── types.ts        # TypeScript interfaces (all exported)
│       ├── constants.ts    # Color presets & configs
│       ├── utils.ts        # Helper functions
│       └── steps.css       # Component styles
├── index.ts                # Package entry point
├── package.json
└── README.md
```

## Why This Package?

- ✅ **Zero dependencies** - No bloat, no conflicts
- ✅ **CSS-based** - Easy to customize and override
- ✅ **Fully typed** - Complete TypeScript support
- ✅ **Per-instance colors** - Different colors for each instance
- ✅ **Framework agnostic** - Works with any React setup
- ✅ **No build required** - Just import and use
- ✅ **Accessible** - ARIA labels and semantic HTML

## Examples

### E-commerce Checkout

```tsx
import "steps-package/components/steps/steps.css";
import { Steps, stepsColorPresets } from "steps-package";
import type { Step } from "steps-package";

const checkoutSteps: Step[] = [
  { id: "cart", title: "Cart", from: 0, to: 100, completed: true },
  { id: "shipping", title: "Shipping", from: 0, to: 100, completed: true },
  { id: "payment", title: "Payment", from: 0, to: 100, completed: false },
  { id: "confirm", title: "Confirm", from: 0, to: 100, completed: false },
];

<Steps
  steps={checkoutSteps}
  currentStep={2}
  colors={stepsColorPresets.emerald}
  size="lg"
/>;
```

### Multiple Instances with Different Colors

```tsx
<Steps steps={steps1} colors={stepsColorPresets.blue} />
<Steps steps={steps2} colors={stepsColorPresets.emerald} />
<Steps steps={steps3} colors={stepsColorPresets.rose} />
```

## Browser Support

Works in all modern browsers that support:

- ES6+
- React 16.8+ (Hooks)
- CSS Grid and Flexbox

## License

MIT

## Contributing

Contributions are welcome! This package is intentionally kept minimal and dependency-free.

## Support

For issues, feature requests, or questions, please open an issue on GitHub.
