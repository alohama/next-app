import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('common');

  return (
    <>
      <main>
        <h1>{t('title')}</h1>
        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'th' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/about'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Homepage
