import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Henrique Andrade - Gestor de Trafego e IA',
  description: 'Ajudo negocios a atrair mais clientes com Meta Ads e automacao com IA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className + ' bg-white text-gray-900 antialiased'}>
        <nav className='border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur z-50'>
          <div className='max-w-5xl mx-auto px-4 h-14 flex items-center justify-between'>
            <Link href='/' className='font-bold text-gray-900 tracking-tight'>
              Henrique<span className='text-blue-600'>.</span>
            </Link>
            <div className='flex items-center gap-6 text-sm font-medium text-gray-500'>
              <Link href='/#servicos' className='hover:text-gray-900 transition-colors'>Servicos</Link>
              <Link href='/#cases' className='hover:text-gray-900 transition-colors'>Cases</Link>
              <Link href='/blog' className='hover:text-gray-900 transition-colors'>Blog</Link>
              <a href='https://wa.me/5533999999999' target='_blank' rel='noopener' className='bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors'>Contato</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className='border-t border-gray-100 py-8 mt-16'>
          <div className='max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400'>
            <span>2026 Henrique Andrade - Governador Valadares, MG</span>
            <div className='flex gap-4'>
              <Link href='/blog' className='hover:text-gray-600 transition-colors'>Blog</Link>
              <Link href='/bio' className='hover:text-gray-600 transition-colors'>Link na bio</Link>
              <a href='https://wa.me/5533999999999' target='_blank' rel='noopener' className='hover:text-gray-600 transition-colors'>WhatsApp</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}