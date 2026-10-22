import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Layer boundaries: app -> features -> shared (components, lib, hooks, ...).
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: ["@/features/*/*"],
          message: "Import a feature through its public API (@/features/<name>). Inside a feature use relative imports.",
        }],
      }],
    },
  },
  {
    files: [
      "src/components/**", "src/lib/**", "src/hooks/**", "src/stores/**",
      "src/types/**", "src/config/**", "src/i18n/**", "src/providers/**",
    ],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: ["@/features", "@/features/*", "@/app/*"],
          message: "Shared code must not depend on features or routes.",
        }],
      }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
