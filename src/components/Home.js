import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Grid, Select, MenuItem, Typography } from '@mui/material';
import NewsCard from './NewsCard';

const Home = () => {
  const [newsType, setNewsType] = useState('general');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${newsType}&apiKey=41a9d464d9654bcd94dd887000a41e8e`);
      setArticles(response.data.articles);
    };

    fetchData();
  }, [newsType]);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        News App
      </Typography>
      <Select
        value={newsType}
        onChange={(e) => setNewsType(e.target.value)}
        displayEmpty
        variant="outlined"
        fullWidth
        margin="normal"
      >
        <MenuItem value="general">General</MenuItem>
        <MenuItem value="business">Business</MenuItem>
        <MenuItem value="technology">Technology</MenuItem>
        <MenuItem value="sports">Sports</MenuItem>
      </Select>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={`/news/${index}`} state={{ article }} style={{ textDecoration: 'none' }}>
              <NewsCard article={article} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
