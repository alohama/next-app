import Link from 'next/link'
import { useRouter } from 'next/router'
import Trans from 'next-translate/Trans'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Homepage = () => {
  const { t, lang } = useTranslation()
  const router = useRouter()
console.log(t('title'))
  return (
    <>
      <main>
      <Trans
          i18nKey="title"
          components={[
            <h1 className="title" />,
            <a href="https://nextjs.org">Next.js!</a>,
          ]}
        />
        <div><p>current Locale: {router.locale}</p></div>
        <Link href="/" locale="en">
            <div className="card">
              <h3>{t('common:title')}</h3>
            </div>
          </Link>
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
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
},
})

export default Homepage
