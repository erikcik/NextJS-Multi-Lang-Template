'use client';

import { useTranslations } from 'next-intl';
import { Link } from '~/i18n/routing';
import { useRouter, usePathname } from 'next/navigation';

export default function HomePage() {
  const locales = ['en', 'tr'] as const;
  const t = useTranslations('HomePage');
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const currentPath = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${currentPath}`);
  };

  const getCurrentLocale = () => {
    return pathname.split('/')[1];
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <select
          onChange={handleLanguageChange}
          value={getCurrentLocale()}
          className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <p className="text-lg mb-4">{t('about')}</p>
      <div className="space-x-4">
        <Link href="/about" className="text-blue-500 hover:underline">
          {t('about')}
        </Link>
        <Link href="/bruh" className="text-red-500 hover:underline">
          {t('notFound')}
        </Link>
      </div>
    </div>
  );
}
