import React, {Component} from 'react';
import {RaisedButton, DatePicker, TextField, TimePicker} from 'material-ui';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import _ from 'lodash';
import avatar from '../../images/react-logo.png';
import '../../styles/core.scss';

class MyAwesomeReactComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      textInput1: '',
      textInput2: '',
      pickupDate: new Date(),
      maxDate: new Date()
    };

    this.handleChangeTime.bind(this);
    this.handleChangeDate.bind(this);
  }

  componentWillMount () {
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
    console.log('Pickup date from state before setting', this.state.pickupDate);
    this.setState({pickupDate: pickupDate});
    console.log('Pickup date from state after setting', this.state.pickupDate);
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
    const styles = {
      card: {
        width: 310,
        margin: 10,
        padding: 10
      }
    };
    const textColor = this.props.muiTheme.palette.textColor;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Example form'
          subtitle='With date picker'
          avatar={avatar}>
          <CardText>
            <span style={{color: textColor}}>
                Welcome
            </span>
          </CardText>
          <TextField floatingLabelText='Enter some text'
            value={this.state.textInput1}
            onChange={(event) => {
              this.setState({textInput1: event.target.value});
            }}
          /><br />
          <TextField
            floatingLabelText='Enter some more text'
            value={this.state.textInput2}
            onChange={(event) => {
              this.setState({textInput2: event.target.value});
            }}
          />
          <DatePicker
            firstDayOfWeek={0}
            formatDate={(date) => {
              return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
            }}
            minDate={new Date()}
            maxDate={this.state.maxDate}
            floatingLabelText='Pickup Date'
            value={this.state.pickupDate}
            onChange={this.handleChangeDate}
            autoOk
          />

          <TimePicker
            floatingLabelText='Pickup Time'
            value={this.state.pickupDate}
            onChange={this.handleChangeTime}
            pedantic
          />
        </CardHeader>
        <CardActions>
          <RaisedButton label='Confirm action' primary fullWidth />
        </CardActions>
      </Card>
    );
  }
}
export default muiThemeable()(MyAwesomeReactComponent);
