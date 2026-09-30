import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'SAQ STUDIO',
  description: 'Clean, minimal black and white website for SAQ STUDIO.',
  openGraph: {
    title: 'SAQ STUDIO',
    description: 'Clean, minimal black and white website for SAQ STUDIO.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAQ STUDIO',
    description: 'Clean, minimal black and white website for SAQ STUDIO.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-white text-black">
      <body className="bg-white text-black antialiased selection:bg-black selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
