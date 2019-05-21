import React, { Component } from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";

import CustomItemList from './CustomItemList'

class Representatives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      repData: {}
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen(item) {
    this.setState({
      open: true,
      repData: item
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  renderData() {
    const { data } = this.props;

    return data.map(item => {
      /*
        district: "0"
        link: "http://donyoung.house.gov"
        name: "Don Young"
        office: "2314 Rayburn HOB; Washington DC 20515-0200"
        party: "Republican"
        phone: "202-225-5765"
        state: "AK"
      */
      return (
        <CustomItemList data={item} />
      )
    })
  }

  render() {
    const { repData, open } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          height: "100%"
        }}
      >
        <List>
          {this.renderData()}
        </List>
      </div>
    );
  }
}

Representatives.propTypes = {
  data: PropTypes.array
};

Representatives.defaultProps = {
  data: []
};

export default Representatives;
