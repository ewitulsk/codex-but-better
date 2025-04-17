export enum AutoApprovalMode {
  SUGGEST = "suggest",
  AUTO_EDIT = "auto-edit",
  FULL_AUTO = "full-auto",
  /**
   * Auto‑approve everything (edits and commands) without sandboxing or prompts.
   */
  GOD_MODE = "god-mode",
}

export enum FullAutoErrorMode {
  ASK_USER = "ask-user",
  IGNORE_AND_CONTINUE = "ignore-and-continue",
}
