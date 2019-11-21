import React, {Component} from 'react';
import List from '../List/List'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
// eslint-disable-next-line
import styles from './styles.css'

class ListItem extends Component {

    constructor (){
        super(...arguments)
        this.state = { showChild:false}
    }
  
    handleCollapse(){
        this.setState({showChild:!this.state.showChild})
        return false
    }
  
    render(){
        let subfeatures;
        if(this.state.showChild) {
            subfeatures = (<List list={this.props.item.subfeatures} />)
        }
        return (
            <div>
                <a href = "#/" rel="{this.props.item.id}" style={{textDecorationLine: this.props.item.presence ? 'none' : 'line-through' , textDecorationStyle: 'solid'}} onClick={this.handleCollapse.bind(this)  }>
                    {(this.props.item.presence) ? <FontAwesomeIcon icon="check-circle" pull="left" color="green" />:<FontAwesomeIcon icon="times-circle"  pull="left"color="red"/>}
                    {this.props.item.title}
                    {(this.props.item.subfeatures.length > 0) ?(this.state.showChild ? <FontAwesomeIcon icon="chevron-up" size ="xs" border pull="right" color="blue" />:<FontAwesomeIcon icon="chevron-down" border size="xs" pull="right" color ="blue"/>):<div></div> }
                </a>
                {subfeatures}
            </div>
        )
    };
  }
  export default ListItem