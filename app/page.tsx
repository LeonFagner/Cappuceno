import Header from "./components/Header/Header"
import { FilterBar } from "./components/Filter-bar"
import Styles from './page.module.css'


export default function Home() {
  return (
    <main className={Styles.main}>

      <FilterBar/>
    </main>
    
  )
}