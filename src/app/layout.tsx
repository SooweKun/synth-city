import { cn } from '@/src/components/lib/utils';
import { Geist, Geist_Mono, Instrument_Sans, Source_Sans_3 } from 'next/font/google';
import { GlobalProvider } from '../components/providers/global-provider';
import { Toaster } from '../components/ui/toast';
import './globals.css';

const sourceSans3Heading = Source_Sans_3({ subsets: ['latin'], variable: '--font-heading' });

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        instrumentSans.variable,
        sourceSans3Heading.variable,
      )}>
      <GlobalProvider>
        <body className='min-h-full flex flex-col'>{children}</body>
        <Toaster />
      </GlobalProvider>
    </html>
  );
}
