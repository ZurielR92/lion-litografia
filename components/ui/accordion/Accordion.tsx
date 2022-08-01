import { FC } from 'react'
import { questionInterface } from '../../../interfaces'

import styles from './Accordion.module.css'

interface Props {
    title?: string
    questions: questionInterface[]
    noTitle?: boolean
}

export const Accordion:FC<Props> = ( {title='', questions, noTitle } ) => {
  return (
    
    <nav className={`${styles.accordion} ${styles.arrows}`}>
        {
            noTitle ?
            null :
            <header className={styles.box}>
                <label htmlFor="acc-close" className={styles['box-title']}>{title}</label>
            </header>
        }

        {
            questions.map((element,i) => {
                return (
                    <div key={i}>
                        <input type="radio" name="accordion" id={`cb${i}`} />
                        <section className={styles.box}>
                            <label className={styles['box-title']} htmlFor={`cb${i}`}>{element.ask}</label>
                            <label className={styles['box-close']} htmlFor="acc-close"></label>
                            <div className={styles['box-content']}>
                                {element.response}
                            </div>
                        </section>
                    </div>
                )
            })
        }





    </nav>
  )
}
