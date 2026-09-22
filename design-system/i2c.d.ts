/**
 * i2c - komponenty to klasy CSS (bundle.css) + helpery logo (bundle.js, window.I2C).
 * Motyw: <html data-theme="light|dark" data-app="checker|know-how|i2c">.
 */

/** Nazwy aplikacji z przypisanym akcentem. Brak data-app = aplikacja mono (akcent = inverse). */
export type I2CApp = "checker" | "know-how" | "i2c";

export interface I2CNamespace {
  /** Sam znak i2c jako znacznik SVG (fill = currentColor, klasa i2c-mark). */
  mark(label?: string): string;
  /** Logo główne: znak + "Mikołaj Szymański" (oryginalne krzywe). */
  lockup(): string;
  /** Lockup aplikacji: znak + nazwa aplikacji w Mulish 700. h = wysokość znaku w px (domyślnie 32). */
  app(name: string, h?: number): string;
  /** Mapa aplikacja -> token akcentu. */
  apps: Record<string, string>;
  version: string;
}

declare global { interface Window { I2C: I2CNamespace } }

/** Button: <button class="i2c-btn i2c-btn--{variant} [i2c-btn--sm|--lg]"> */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "brand";
/** IconButton: <button class="i2c-icon-btn [i2c-icon-btn--accent]" aria-label aria-pressed> */
export interface IconButtonProps { "aria-label": string; "aria-pressed"?: boolean; accent?: boolean }
/** NavPills: <nav class="i2c-pills"><button class="i2c-pill" aria-current="page"> w <header class="i2c-topbar"> */
export interface NavItem { label: string; icon: string; current?: boolean }
/** Tabs: <div class="i2c-tabs" role="tablist"><button class="i2c-tab" role="tab" aria-selected> */
export type Period = "Tydzień" | "Miesiąc" | "Kwartał" | "Rok";
/** DeltaChip: <span class="i2c-delta i2c-delta--up|--down|--neutral">+24%</span> - wartość zawsze ze znakiem. */
export type DeltaDirection = "up" | "down" | "neutral";
/** StatCard: <article class="i2c-card"> z .i2c-eyebrow, .i2c-metric, .i2c-delta, .i2c-tabs, .i2c-bars (i.is-on / i.is-hl), .i2c-legend */
export interface StatCardData { label: string; value: string; delta?: string; bars: number[]; highlight?: number }
/** AskBar: <div class="i2c-ask"> .i2c-suggest + form.i2c-ask__bar (button.i2c-ask__go, input.i2c-ask__input) */
export interface AskBarProps { placeholder: string; suggestions: string[] }
/** Input: <div class="i2c-field"><label><input class="i2c-input" aria-invalid><span class="i2c-field__err"> */
export interface InputProps { label: string; placeholder?: string; error?: string }
/** BrandHero: <section class="i2c-brand"> svg.i2c-brand__motif, h2.i2c-display, hr.i2c-rule, .i2c-contact */
export interface BrandHeroProps { heading: string }
