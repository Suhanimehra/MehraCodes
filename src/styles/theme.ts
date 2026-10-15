/**
 * MehraCodes Design Tokens
 * Centralized theme configuration with matte, architectural color palettes.
 */

export const fonts = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const colors = {
  dark: {
    background: "240 5% 7%", // #111113 matte charcoal
    foreground: "0 0% 95%", // #f2f2f2 crisp matte white
    card: "240 4% 11%", // #1a1a1d matte dark card
    cardForeground: "0 0% 95%",
    popover: "240 4% 11%",
    popoverForeground: "0 0% 95%",
    primary: "0 0% 98%", // #fafafa solid matte chalk
    primaryForeground: "240 5% 7%", // dark text on white
    secondary: "240 4% 15%", // #252528 matte dark secondary
    secondaryForeground: "0 0% 90%",
    muted: "240 4% 16%", // #28282b
    mutedForeground: "240 4% 58%", // #919198 matte muted text
    accent: "38 92% 50%", // #f59e0b subtle warm matte amber (or titanium)
    accentForeground: "0 0% 100%",
    destructive: "0 62% 45%",
    destructiveForeground: "0 0% 100%",
    border: "240 4% 18%", // #2c2c31 crisp hairline border
    input: "240 4% 14%",
    ring: "0 0% 80%",
  },
  light: {
    background: "0 0% 98%",
    foreground: "240 6% 10%",
    card: "0 0% 100%",
    cardForeground: "240 6% 10%",
    popover: "0 0% 100%",
    popoverForeground: "240 6% 10%",
    primary: "240 6% 10%",
    primaryForeground: "0 0% 98%",
    secondary: "240 5% 94%",
    secondaryForeground: "240 6% 10%",
    muted: "240 5% 92%",
    mutedForeground: "240 4% 45%",
    accent: "38 92% 50%",
    accentForeground: "0 0% 100%",
    destructive: "0 62% 45%",
    destructiveForeground: "0 0% 100%",
    border: "240 5% 88%",
    input: "240 5% 88%",
    ring: "240 6% 20%",
  },
} as const;

export const spacing = {
  sectionY: "clamp(5rem, 10vh, 7rem)",
  containerMaxWidth: "1200px",
  containerPadding: "clamp(1rem, 4vw, 2rem)",
} as const;

export const timing = {
  fast: "150ms",
  normal: "250ms",
  slow: "400ms",
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export const radius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;
