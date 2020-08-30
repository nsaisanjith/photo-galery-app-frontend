import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    maxWidth: 345,
    width: 300,
  },
  media: {
    height: 140,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  Div: {
    margin: 20,
    padding: 8,
    display: "inline-block",
  },
};

export default function ImgMediaCard(props) {
  return (
    <div style={styles.Div}>
      <Card style={styles.root}>
        <CardActionArea onClick={props.popup}>
          <CardMedia
            image={props.src}
            title="Contemplative Reptile"
            style={styles.media}
          />{" "}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {" "}
              {props.location}{" "}
            </Typography>{" "}
            <Typography variant="body2" color="textSecondary" component="p">
              {" "}
              {props.message}{" "}
            </Typography>{" "}
          </CardContent>{" "}
        </CardActionArea>{" "}
        <CardActions>
          <Button size="small" color="primary" onClick={props.showEditPopUp}>
            Edit{" "}
          </Button>{" "}
          <Button size="small" color="primary" onClick={props.requestOnDelete}>
            Delete{" "}
          </Button>{" "}
        </CardActions>{" "}
      </Card>
    </div>
  );
}
