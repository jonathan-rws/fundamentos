import styles from './styles.module.css'

export function Avatar({hasBorder = true, src}){

  return(
    <img src={src} alt=""  className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}/>
  )
}