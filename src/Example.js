import React from 'react';
import ReactToPrint from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

class Example extends React.PureComponent {
  render() {
    return (
      <div style={{textAlign:'left', margin:'50px auto', width:'40%'}}>
        <div style={{textAlign:'left', margin:'50px auto'}}>
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
        
        <div style={{textAlign:'left', margin:'50px auto'}}>
          <ReactToPrint
            trigger={() => {
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
        </div>
       
      </div>
    );
  }
}
export default Example;