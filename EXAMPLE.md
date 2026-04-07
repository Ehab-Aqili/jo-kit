# Steps Package - Example Usage

## Installation

```bash
npm install steps-package
```

## Usage Example

```tsx
import React, { useState } from "react";
import { Steps, stepsColorPresets } from "steps-package";
import type { Step } from "steps-package";
import "steps-package/steps.css";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      id: "1",
      title: "Order Created",
      from: 0,
      to: 100,
      completed: true,
    },
    {
      id: "2",
      title: "Processing",
      from: 50,
      to: 100,
      completed: false,
    },
    {
      id: "3",
      title: "Shipped",
      from: 0,
      to: 100,
      completed: false,
    },
    {
      id: "4",
      title: "Delivered",
      from: 0,
      to: 100,
      completed: false,
    },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Order Tracking</h1>

      {/* Default Colors */}
      <h2>Default Colors</h2>
      <Steps
        steps={steps}
        currentStep={currentStep}
        onStepClick={(index) => setCurrentStep(index)}
        size="md"
      />

      {/* Emerald Theme */}
      <h2 style={{ marginTop: "40px" }}>Emerald Theme</h2>
      <Steps
        steps={steps}
        currentStep={currentStep}
        onStepClick={(index) => setCurrentStep(index)}
        colors={stepsColorPresets.emerald}
        size="md"
      />

      {/* Blue Theme */}
      <h2 style={{ marginTop: "40px" }}>Blue Theme</h2>
      <Steps
        steps={steps}
        currentStep={currentStep}
        onStepClick={(index) => setCurrentStep(index)}
        colors={stepsColorPresets.blue}
        size="lg"
      />

      {/* Custom Colors */}
      <h2 style={{ marginTop: "40px" }}>Custom Colors</h2>
      <Steps
        steps={steps}
        currentStep={currentStep}
        onStepClick={(index) => setCurrentStep(index)}
        colors={{
          completed: "#10b981",
          completedBorder: "#10b981",
          completedText: "#ffffff",
          currentBorder: "#3b82f6",
          currentBackground: "#eff6ff",
          currentText: "#2563eb",
        }}
        size="sm"
      />

      {/* Controls */}
      <div style={{ marginTop: "40px", display: "flex", gap: "10px" }}>
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
          }
          disabled={currentStep === steps.length - 1}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
```

## Features Demonstrated

1. **Default colors** - Use the component out of the box
2. **Color presets** - Choose from built-in themes (emerald, blue, amber, rose, slate)
3. **Custom colors** - Provide your own color scheme
4. **Size variants** - sm, md, lg
5. **Interactive controls** - Click on steps or use buttons to navigate
6. **TypeScript support** - Full type safety with exported types

## All Exports

```tsx
// Component
import { Steps } from "steps-package";

// Types
import type {
  Step,
  StepsProps,
  StepsColors,
  StepSize,
  StepsColorPreset,
} from "steps-package";

// Constants & Utilities
import {
  stepsColorPresets,
  defaultColors,
  createStepsColors,
} from "steps-package";

// CSS (required)
import "steps-package/steps.css";
```

## Package Info

- ✅ **Zero dependencies** - Only React as peer dependency
- ✅ **CSS-based styling** - No inline styles
- ✅ **Fully typed** - Complete TypeScript support
- ✅ **3 size variants** - Small (32px), Medium (48px), Large (64px)
- ✅ **5 color presets** - Plus custom color support
- ✅ **Framework agnostic** - Works with React, Next.js, Remix, etc.
