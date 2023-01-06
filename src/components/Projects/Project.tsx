import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import ProjectInterface from './model';

interface ProjectProps {
    project: ProjectInterface;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    
    return (
    <Card sx={{ display: 'flex', flexDirection: {xs: 'column', md:'row'}}}>
    <   CardMedia
          sx={{ height: {xs: 140, md: 'auto'}, width: {xs: undefined, md: '50%'} }}
          image={project.image}
          title={project.title}
        />
        <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={project.visit}>Visit</Button>
          <Button size="small" href={project.source}>Learn More</Button>
        </CardActions>
        </div>
    </Card>
    );
}


export default Project;
