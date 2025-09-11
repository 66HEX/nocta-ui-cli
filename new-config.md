@import "tailwindcss";

:root {
	--color-background: oklch(0.97 0 0);
	--color-background-muted: oklch(0.922 0 0);
	--color-background-elevated: oklch(0.87 0 0);
	--color-foreground: oklch(0.205 0 0);
	--color-foreground-muted: oklch(0.371 0 0);
	--color-foreground-subtle: oklch(0.708 0 0);
	--color-border: oklch(0.205 0 0);
	--color-border-muted: oklch(0.922 0 0);
	--color-border-subtle: oklch(0.708 0 0);
	--color-ring: oklch(0.205 0 0);
	--color-ring-offset: oklch(0.97 0 0);
	--color-primary: oklch(0.205 0 0);
	--color-primary-foreground: oklch(0.97 0 0);
	--color-primary-muted: oklch(0.371 0 0);
	--color-overlay: oklch(0.145 0 0);
	--color-gradient-primary-start: oklch(0.205 0 0);
	--color-gradient-primary-end: oklch(0.371 0 0);
}

.dark {
	--color-background: oklch(0.205 0 0);
	--color-background-muted: oklch(0.269 0 0);
	--color-background-elevated: oklch(0.371 0 0);
	--color-foreground: oklch(0.97 0 0);
	--color-foreground-muted: oklch(0.87 0 0);
	--color-foreground-subtle: oklch(0.556 0 0);
	--color-border: oklch(0.97 0 0);
	--color-border-muted: oklch(0.269 0 0);
	--color-border-subtle: oklch(0.371 0 0);
	--color-ring: oklch(0.97 0 0);
	--color-ring-offset: oklch(0.205 0 0);
	--color-primary: oklch(0.97 0 0);
	--color-primary-foreground: oklch(0.205 0 0);
	--color-primary-muted: oklch(0.87 0 0);
	--color-overlay: oklch(0.145 0 0);
	--color-gradient-primary-start: oklch(0.371 0 0);
	--color-gradient-primary-end: oklch(0.371 0 0);
}
  
@theme  {
	--color-background: var(--background);
	--color-background-muted: var(--background-muted);
	--color-background-elevated: var(--background-elevated);
	--color-foreground: var(--foreground);
	--color-foreground-muted: var(--foreground-muted);
	--color-foreground-subtle: var(--foreground-subtle);
	--color-primary: var(--primary);
	--color-primary-muted: var(--primary-muted);
	--color-border: var(--border);
	--color-border-muted: var(--border-muted);
	--color-border-subtle: var(--border-subtle);
	--color-ring: var(--ring);
	--color-ring-offset: var(--ring-offset);
	--color-primary-foreground: var(--primary-foreground);
	--color-gradient-primary-start: var(--gradient-primary-start);
	--color-gradient-primary-end: var(--gradient-primary-end);
	--color-overlay: var(--overlay);
}