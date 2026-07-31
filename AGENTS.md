<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project direction

- Strictly enforce a mobile-first implementation approach: write base Tailwind utility classes for mobile touch screens first, and layer desktop enhancements using min-width breakpoints (e.g., `md:`, `lg:`). Prioritize touch targets (minimum 44x44px), mobile gestures, bottom-sheet components for overlays, and proper spacing for iOS/Android viewport safety zones (`env(safe-area-inset-bottom)`).
- Strictly follow this `AGENTS.md` before making any code changes.
- This repository is the client storefront only. Product, customer, authentication, inventory, and order capabilities are provided by an existing backend API. Do not create backend business systems unless explicitly requested.
- Build mobile-first. Mobile traffic and touch interactions take priority, then enhance the experience for tablet and desktop.
- Use Tailwind CSS utilities as the default styling approach. Do not replace Tailwind with CSS Modules or large custom stylesheets. Keep global CSS limited to theme tokens and truly global base styles unless explicitly requested otherwise.
- Preserve and support both light and dark themes. Never remove existing dark-mode tokens, styles, or behavior unless explicitly requested.
- Use `lucide-react` for interface icons. Do not hand-write SVG markup for interface icons. Do not substitute unrelated icons for third-party brand logos.
- Do not introduce shadcn/ui, Magic UI, another component library, or registry components unless explicitly requested. Prefer purpose-built project components for basic controls such as buttons and inputs.
- Do not add, replace, or choose brand fonts unless explicitly requested. The user will select and configure Google Fonts.

# Working boundaries

- By default, only implement the requested code changes.
- Do not run lint commands unless explicitly requested.
- Do not run builds, unit tests, integration tests, end-to-end tests, browser automation, screenshots, or visual regression checks unless explicitly requested.
- Do not start development servers or open browsers unless explicitly requested.
- Do not perform unrelated cleanup or refactoring.
