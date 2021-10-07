import React from 'react';
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <div style={{textAlign:'center', margin:'50px auto'}}>
          <h2>Hello, Generate PDF and print</h2>
          <table style={{textAlign:'center', margin:'50px auto'}}>
            <thead>
              <th>column 1</th>
              <th>column 2</th>
              <th>column 3</th>
            </thead>
            <tbody>
              <tr>
                <td>data 1</td>
                <td>data 2</td>
                <td>data 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      );
    }
  }