import styles from "./styles.module.css"
import igniteLogo from "../../assets/igniteLogo.svg"
export function Header(){
  return(
    <header className= {styles.header}>

      <img src={igniteLogo } alt= "Logo do Ignite"/>
      <span>Ignite Feed</span>
    </header>
  )
}