import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';

const NewsDetail = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {article.title}
          </Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            <CardMedia
              component="img"
              alt={article.title}
              image={article.urlToImage || 'https://via.placeholder.com/150'}
              title={article.title}
              style={{ width: '50%', height: 'auto' }}
            />
          </Box>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {article.author ? `By ${article.author}` : ''} | {new Date(article.publishedAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            {article.content || article.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {article.source.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={article.url} target="_blank">
            Read More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NewsDetail;
