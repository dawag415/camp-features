import React, {Component} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import FEATURES from './assets/data/camp_features'
import { faChevronDown, faChevronUp, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import List from './components/List/List'
// eslint-disable-next-line
import styles from './App.css'

library.add(faChevronDown, faChevronUp, faCheckCircle, faTimesCircle)

class App extends Component{
    constructor(){
        super()
        this.state={
            active: null
        }
    }
    render(){
        return (
          <div id ="container">
            <h1> Camp Site Features </h1>
            <List list={FEATURES} />
          </div>
      
        )
    }
}

export default App;