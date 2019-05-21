import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

import InfoOutlined from "@material-ui/icons/InfoOutlined";

const styles = theme => ({
  card: {
    backgroundColor: "#e8e8e8",
    margin: 2,
    width: "90vw"
  },
  avatar: {
    backgroundColor: red[500]
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class RepresentativeDetail extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { handleClose } = this.props;

    handleClose();
  }

  render() {
    const { open, data, classes } = this.props;

    const toRet = open ? (
      <Card className={classes.card}>
        <CardHeader
          action={<InfoOutlined />}
          avatar={
            <Button
              href={data.link}
              target="_blank"
              size="small"
              style={{ margin: "0px 5px" }}
              variant="outlined"
              color="secondary"
              fullWidth
            >
              {data.link}
            </Button>
          }
          title={""}
          subheader={""}
        />
        <CardContent>
          {data.district ? (
            <TextField
              label="District"
              InputProps={{
                readOnly: true
              }}
              className={classes.textField}
              value={data.district}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          ) : null}

          <TextField
            label="Phone"
            InputProps={{
              readOnly: true
            }}
            className={classes.textField}
            value={data.phone}
            margin="normal"
            variant="outlined"
            fullWidth
          />

          <Button
            href={
              "https://www.google.com/maps/search/?api=1&query=" + data.office
            }
            target="_blank"
            size="small"
            style={{ margin: "0px 5px" }}
            variant="outlined"
            color="secondary"
            fullWidth
          >
            {data.office}
          </Button>
        </CardContent>
      </Card>
    ) : null;
    return toRet;
  }
}

RepresentativeDetail.propTypes = {
  data: PropTypes.object,
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  onClose: PropTypes.func
};

RepresentativeDetail.defaultProps = {
  data: null,
  handleClose: null,
  open: false,
  onClose: null
};

export default withStyles(styles)(RepresentativeDetail);
