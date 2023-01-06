import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const Project: React.FC = () => {

    return (
    <Card sx={{ maxWidth: 900, display: 'flex'}}>
    <   CardMedia
          sx={{ height: 'auto', width: '300%'}}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
                      Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </div>
    </Card>
    );
}


export default Project;
