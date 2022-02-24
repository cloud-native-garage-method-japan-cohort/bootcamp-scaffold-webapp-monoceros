import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea } from '@material-ui/core';
import * as React from 'react';

import Style from './List.module.css';

const List = (props) => {
  return props.rectText ? (
    <div>
      <Typography align="left" gutterBottom variant="h5" component="div">
        おすすめ情報一覧
      </Typography>
      <div className={Style.listBox}>
        <Container maxWidth="md">
          <Box>
            <Grid container columns={12} spacing={3}>
              {props.rectText.map((rt, index) => (
                <Grid item xs={12} key={index}>
                  <Card className={Style.card}>
                    <CardActionArea>
                      <CardContent>
                        <Typography align="left" gutterBottom variant="h6" component="div">
                          {rt.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {rt.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  ) : (
    ''
  );
};

export default List;
