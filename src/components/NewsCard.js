import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const NewsCard = ({ article }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={article.title}
          height="140"
          image={article.urlToImage || 'https://via.placeholder.com/150'}
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
