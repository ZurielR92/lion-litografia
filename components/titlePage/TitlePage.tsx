import Link from 'next/link'
import { FC } from 'react'
import styles from './TitlePage.module.css'

interface Props {
    title: string
    breacumb: {
      title: string,
      url: string
    }[]
}

export const TitlePage:FC<Props> = ( { title, breacumb } ) => {
  return (
    <>
      <section className={styles.container}>
          <div>
              <h1>{title}</h1>
          </div>
      </section>
          <div className={styles['breacumb-wrapper']}>
              <div className={styles['thm-container']}>
                <ul className={styles.breacumb}>

                  {
                    breacumb.map(e => {
                      return (
                          <li key={e.title}>
                            <Link href={e.url}>
                              {e.title}
                            </Link>
                            <span className={styles.separator}>-</span>
                          </li>
                      )
                    })
                  }
                  <li>
                    {title}
                  </li>
                </ul>
              </div>
          </div>
    </>
  )
}
