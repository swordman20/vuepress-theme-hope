import { deprecatedLogger, droppedLogger } from "./utils";
import type { MarkdownEnhanceOptions } from "../../shared";

/** @deprecated */
export const convertOptions = (
  options: MarkdownEnhanceOptions & Record<string, unknown>
): void => {
  deprecatedLogger({
    options,
    deprecatedOption: "codegroup",
    newOption: "codetabs",
  });
  deprecatedLogger({
    options,
    deprecatedOption: "mdImport",
    newOption: "include",
  });
  deprecatedLogger({
    options,
    deprecatedOption: "tex",
    newOption: "katex",
  });

  droppedLogger(options, "lineNumbers");
  droppedLogger(options, "imageFix");
};
