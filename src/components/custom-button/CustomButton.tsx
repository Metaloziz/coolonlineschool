import styles from './CustomButton.module.scss'
import Image from 'next/image'
import arrow from '@public/svgs/arrow-footer 1.svg'

type CustomButtonType = {
  title: string
}

export default function CustomButton({title}: CustomButtonType) {
  return (
    <div className={styles.button}>
      <div>{title}</div>
      <Image className={styles.image} src={arrow}/>
    </div>
  )
}
