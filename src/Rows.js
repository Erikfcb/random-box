import React, { Component } from 'react';
import './Rows.css';
import Box from './Box';

class Rows extends React.Component {
    render() {
        const arr = this.props.colors.map(val => {
            return <Box color={val}/>
        });

      return (<div className='row'>
                {arr}
              </div>);
    }
  }

  export default Rows;