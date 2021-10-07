import React from 'react';
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <div style={{textAlign:'left', width:'60%', margin:'50px auto'}}>
          <h2>Hello, Generate PDF and print</h2>
          <table>
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