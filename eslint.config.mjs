import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import maqe from "eslint-config-maqe";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    settings: {
      react: "detect"
    }
  }
});

const eslintConfig = [
  ...fixupConfigRules(
    ...compat.extends("next/core-web-vitals", "next/typescript"),
  ),
  {
    plugins: {
      maqe: fixupPluginRules(maqe)
    }
  }
];

export default eslintConfig;
