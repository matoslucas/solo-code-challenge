import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import RepresentativeDetail from "./RepresentativeDetail";

import DemocratLogo from "../svg/DemocratLogo";
import RepublicanLogo from "../svg/RepublicanLogo";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

class CustomItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("click");
    this.setState({ open: !this.state.open });
  }

  render() {
    const { data } = this.props;
    const { open } = this.state;
    return (
      <ListItem
        style={{
          width: "90vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: 2,
          padding: 0
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#e8e8e8",
            margin: 0,
            padding: "5px 10px 5px 10px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {data.party == "Republican" ? (
            <RepublicanLogo size={48} />
          ) : (
            <DemocratLogo size={48} />
          )}

          <ListItemText primary={data.name} secondary={data.party} />
          {open ? (
            <ExpandLess
              onClick={this.handleClick}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <ExpandMore
              onClick={this.handleClick}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <RepresentativeDetail
            open={open}
            onClose={this.handleClose}
            handleClose={this.handleClose}
            data={data}
          />
        </Collapse>
      </ListItem>
    );
  }
}

export default CustomItemList;
