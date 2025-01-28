import './global.css';
import styles from "./App.module.css" ;
import { Login } from './components/Login';

export const App = () => { 
  return (
      <div className={styles.App}>
        <Login/>
      </div>
  )
}


