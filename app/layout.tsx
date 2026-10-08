import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://xoraixtechnologies.com'),
  title: 'Xoraix Technologies - Core Engineering Team & Portfolios',
  description:
    'Meet the builders, senior full-stack architects, AI engineers, and game developers of Xoraix Technologies.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Xoraix Technologies - Core Engineering Team & Portfolios',
    description:
      'Meet the builders, senior full-stack architects, AI engineers, and game developers of Xoraix Technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <Script id="extension-attribute-cleanup" strategy="beforeInteractive">
          {`
            (() => {
              const clean = () => document.body?.removeAttribute('cz-shortcut-listen');
              clean();
              new MutationObserver(clean).observe(document.documentElement, {
                attributes: true,
                subtree: true,
                attributeFilter: ['cz-shortcut-listen']
              });
            })();
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
