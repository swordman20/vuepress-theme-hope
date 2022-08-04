import type { KatexOptions } from "katex";

export interface TexOptions {
  /**
   * LaTeX rendering engine
   *
   * LaTeX 渲染引擎
   *
   * @default "katex"
   */
  render?: "katex" | "mathJax";

  /**
   * plugin
   *
   * 加载插件
   *
   * @default []
   */
  plugins?: string[];

  /**
   * options of katex or mathjax
   *
   * 配置 katex 或 mathjax 的选项
   *
   */
  // eslint-disable-next-line
  options?: KatexOptions | any;
}
