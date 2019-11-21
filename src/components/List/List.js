import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.js'
  
class List extends Component {
    render(){
        let LI = this.props.list.map((item) => {
            return( <li>
                        <ListItem key={item.title.toString()} item={item} />
                    </li>
            );
        });
    return ( <ul>{LI}</ul>);
    }
};

export default List
