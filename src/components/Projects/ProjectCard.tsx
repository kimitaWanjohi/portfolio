import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import ProjectInterface from './model';


interface ProjectCardProps {
  project: ProjectInterface;
}

const CardLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

const CardTags = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

const CardTag = styled('span')(({ theme }) => ({
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.primary.contrastText,
}));


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={project.title}
        height="160"
        image={project.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <CardTags>
          {project.tags.map((tag) => (
            <CardTag key={tag}>{tag}</CardTag>
          ))}
        </CardTags>
      </CardContent>
      <CardActions>
        { project.source && <CardLink href={project.source} target="_blank" rel="noopener noreferrer">
          <Button size="small">Source</Button>
        </CardLink>
        }
        { project.visit && <CardLink href={project.visit} target="_blank" rel="noopener noreferrer">
          <Button size="small">Visit</Button>
        </CardLink>}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;