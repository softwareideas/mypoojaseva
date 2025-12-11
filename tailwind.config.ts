
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Premium Pooja App Colors
				saffron: "#FF9933", // Primary
				maroon: "#8B1E3F", // Accent
				softSaffron: "#FFD8A8", // Background
				pureWhite: "#FFFFFF", // White
				blackText: "#212121", // Text
				// Mappings for backward compatibility/gradients
				gold: "#FF9933", // Mapping gold to Saffron for consistency
				brass: "#FF9933", // Mapping brass to Saffron
				templeGreen: "#8B1E3F", // Mapping templeGreen to Maroon
				sandalwood: "#FFD8A8", // Mapping sandalwood to Soft Saffron
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
			},
			backgroundImage: {
				'temple-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBoNHY0SDB6TTIwIDBoNHY0aC00ek00MCAwaDR2NEgzNnpNMCAyMGg0djRIMHpNMjAgMjBoNHY0aC00ek00MCAyMGg0djRIMzZ6TTAgNDBoNHY0SDB6TTIwIDQwaDR2NGgtNHpNNDAgNDBoNHY0SDM2eiIgZmlsbD0iI0Q0QUYzNyIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPgo=')",
				'om-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDEwQzE0LjQ3NzIgMTAgMTAgMTQuNDc3MiAxMCAyMEMxMCAyNS41MjI4IDE0LjQ3NzIgMzAgMjAgMzBDMjUuNTIyOCAzMCAzMCAyNS41MjI4IDMwIDIwQzMwIDE0LjQ3NzIgMjUuNTIyOCAxMCAyMCAxMFpNMjAgOEMxMy4zNzI2IDggOCAxMy4zNzI2IDggMjBDOCAyNi42Mjc0IDEzLjM3MjYgMzIgMjAgMzJDMjYuNjI3NCAzMiAzMiAyNi42Mjc0IDMyIDIwQzMyIDEzLjM3MjYgMjYuNjI3NCA4IDIwIDhaIiBmaWxsPSIjRDRBRjM3IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMjAgMTMuMzMzM0MxNi4zMTgxIDEzLjMzMzMgMTMuMzMzMyAxNi4zMTgxIDEzLjMzMzMgMjBDMTMuMzMzMyAyMy42ODE5IDE2LjMxODEgMjYuNjY2NyAyMCAyNi42NjY3QzIzLjY4MTkgMjYuNjY2NyAyNi42NjY3IDIzLjY4MTkgMjYuNjY2NyAyMEMyNi42NjY3IDE2LjMxODEgMjMuNjgxOSAxMy4zMzMzIDIwIDEzLjMzMzNaTTIwIDI0QzE3Ljc5MDkgMjQgMTYgMjIuMjA5MSAxNiAyMEMxNiAxNy43OTA5IDE3Ljc5MDkgMTYgMjAgMTZDMjIuMjA5MSAxNiAyNCAxNy43OTA5IDI0IDIwQzI0IDIyLjIwOTEgMjIuMjA5MSAyNCAyMCAyNFoiIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPgo=')",
			},
			fontFamily: {
				'sanskrit': ['Poppins', 'sans-serif'],
				'heading': ['Georgia', 'serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
