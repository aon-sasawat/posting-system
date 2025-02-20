import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Code Quality
      "no-console": "warn",
      "no-debugger": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-var": "error",
      "prefer-const": "error",

      // Best Practices
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/self-closing-comp": "error",

      // TypeScript Rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",

      // Code Style
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "comma-dangle": ["error", "always-multiline"],
      indent: ["error", 2],
      "func-style": ["error", "expression"],
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc", // จัดลำดับ import ตามตัวอักษร
            orderImportKind: "asc", // มีให้เลือก 3 แบบ ['ignore', 'asc', 'desc']
            caseInsensitive: true, // เรียงตามตัวอักษรแบบไม่สนใจตัวพิมพ์เล็กใหญ่ไหม มีให้เลือก true หรือ false ถ้าเลือก false ตัวพิมพ์ใหญ่จะมาก่อน
          },
          groups: [
            "index", // Index files
            "builtin", // Built-in modules (like 'fs', 'path')
            "external", // External modules (from node_modules or other sources)
            "internal", // Internal modules (within your project)
            "parent", // Parent directories
            "sibling", // Sibling files (same directory)
            "object", // Object imports
            "type", // Type imports (TypeScript types)
          ],
          pathGroups: [
            {
              pattern: "**/*.css",
              group: "index",
              position: "before",
            },
            {
              pattern: "**/*.scss",
              group: "index",
              position: "before",
            },
            {
              pattern: "{react,react-*,react-*/**}",
              group: "external",
              position: "before",
            },
            {
              pattern: "{next,next*,next*/**}",
              group: "external",
              position: "before",
            },
            {
              pattern: "@radix-ui/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@reduxjs/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/store/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "react-redux",
              group: "external",
              position: "before",
            },
            {
              pattern: "./**/components/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./**/hooks/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./**/utils/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./**/constants/**",
              group: "object",
              position: "before",
            },
            {
              pattern: "./**/types/**",
              group: "type",
              position: "before",
            },
          ],
          distinctGroup: true,
          pathGroupsExcludedImportTypes: ["{react,react-*,react-*/**}"],
        },
      ],
    },
  },
];

export default config;
