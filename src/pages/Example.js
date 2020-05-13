import React, { Component } from 'react';
// import InputNumber from 'elements/Form/InputNumber';
// import { InputDate } from 'elements/Form';
import Breadcrumb from 'elements/Breadcrumb';

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   },
  // };

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // state diatas adalah props milih input date dan number

  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Detail', pageHref: '' },
    ];

    return (
      <div className="container-example">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: '100hv' }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumb} />
            {/* <InputDate
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
