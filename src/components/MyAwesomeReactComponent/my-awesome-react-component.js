import React, { Component } from 'react';
import {RaisedButton, DatePicker, TextField, TimePicker} from 'material-ui';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import _ from 'lodash';

import avatar from '../../images/react-logo.png';
import '../../styles/core.scss';

class MyAwesomeReactComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textInput1: 'This is empty text',
      textInput2: '',
      pickupDate: new Date(),
      maxDate: new Date()
    };
  }

  componentWillMount() {
    var maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 2);
    this.setState({maxDate: maxDate});
    this.handleChangeTime(this, new Date());
  }

  handleChangeTime = (event, date) => {
    var pickupDate = this.state.pickupDate;
    var minutes = date.getMinutes();
    minutes = _.round(minutes / 5) * 5;
    pickupDate.setHours(date.getHours());
    pickupDate.setMinutes(minutes);
    console.log(pickupDate, minutes);
    this.setState({pickupDate: pickupDate});
  };

  handleChangeDate = (event, date) => {
    var pickupDate = this.state.pickupDate;
    pickupDate.setDate(date.getDate());
    pickupDate.setMonth(date.getMonth());
    pickupDate.setFullYear(date.getFullYear());
    this.setState({pickupDate: pickupDate});
  };

  static propTypes = {
    muiTheme: React.PropTypes.object.isRequired
  }

  render () {
    const textColor = this.props.muiTheme.palette.textColor;
    return (
      <div className="col-lg-4">
        <Card>
          <CardHeader
            title='Example form'
            subtitle='With date picker'
            avatar={avatar} >
            <CardText>
              <span style={{color: textColor}}>
                Hello World! {this.state.maxDate.getFullYear()}
              </span>
            </CardText>
            <div className='row justify-content-center'>
              <TextField floatingLabelText='Enter some text'
                value={this.state.textInput1}
                onChange={(event) => { this.setState({textInput1: event.target.value}); }}
              />
            </div>
            <div className='row justify-content-center'>
              <TextField
                floatingLabelText='Enter some more text'
                value={this.state.textInput2}
                onChange={(event) => { this.setState({textInput2: event.target.value}); }}
              />
            </div>
            <div className='row justify-content-center'>
              <DatePicker
                firstDayOfWeek={0}
                formatDate={(date) => { return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()); }}
                minDate={new Date()}
                maxDate={this.state.maxDate}
                floatingLabelText='Pickup Date'
                value={this.state.pickupDate}
                onChange={this.handleChangeDate}
                autoOk
              />
            </div>
            <div className='row justify-content-center'>
              <TimePicker
                floatingLabelText='Pickup Time'
                autoOk
                value={this.state.pickupDate}
                onChange={this.handleChangeTime}
                pedantic
              />
            </div>
          </CardHeader>
          <CardActions>
            <RaisedButton label="Action 1" />
            <RaisedButton label="Action 2" />
            <RaisedButton label="Action 3" />
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default muiThemeable()(MyAwesomeReactComponent);
