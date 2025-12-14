import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import AnimatedBackground from "@/components/animated-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerGenie - AI-Powered Career Coach",
  description: "Transform your career with AI-driven insights. Build resumes, prepare for interviews, and get personalized career guidance.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AnimatedBackground />
            <div className="relative min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Toaster richColors />

              <footer className="relative border-t border-border/50 bg-muted/30 backdrop-blur-lg py-12 mt-20">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <p className="text-foreground font-semibold text-lg">CareerGenie</p>
                      <p className="text-muted-foreground text-xs">AI-Powered Career Coach</p>
                    </div>
                    <div className="flex gap-8 text-sm">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      © {new Date().getFullYear()} CareerGenie. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
