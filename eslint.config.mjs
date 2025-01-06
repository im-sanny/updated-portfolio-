import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    // Additional recommended configurations
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  // Add custom rules here
  {
    rules: {
      // Ensure consistent imports
      "import/prefer-default-export": "off",
      // Strict type checking
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      // React specific rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];

export default eslintConfig;
