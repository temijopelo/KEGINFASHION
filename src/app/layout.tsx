"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/lib/theme";
import "./globals.css";
import SidebarLayout from "@/components/layout/sidebar";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = useMediaQuery();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {isMobile ? (
              <div className="px-5">{children}</div>
            ) : (
              <SidebarLayout>{children}</SidebarLayout>
            )}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
