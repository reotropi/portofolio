import "@mantine/core/styles.css";
import "./globals.css";

import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const theme = createTheme({
  fontFamily: "var(--font-jakarta), ui-sans-serif, system-ui, sans-serif",
  primaryColor: "pink",
  defaultRadius: 0,
  cursorType: "pointer",
});

export const metadata = {
  title: "Aida Fitryani — Frontend Engineer",
  description:
    "Hey, I'm Aida — a frontend engineer who turns ideas into clean, working interfaces with React and Next.js, and digs into workarounds before giving up.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      className={`${jakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
