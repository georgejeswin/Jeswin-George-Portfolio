import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./ProjectCard.css";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    outlineWidth: 0,
    marginBottom: 20,
    paddingBottom: 10,
  },
});

export default function ProjectCard({
  image,
  name,
  description,
  label1,
  label2,
  label3,
  github,
  demo,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className="project__main">
        <CardMedia
          component="img"
          alt={name}
          height="170"
          image={image}
          title={name}
        />

        <CardContent className="projectCard__content">
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Chip className="projectCard__chip" label={label1} />
          <Chip className="projectCard__chip" label={label2} />
          <Chip className="projectCard__chip" label={label3} />

          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="projectCard__buttons">
          <Button href={github} target="_blank" size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary" href={demo} target="_blank">
            Live Demo
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
