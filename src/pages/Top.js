import { makeStyles, Grid, Container, IconButton, Paper, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';

import { Loading } from '../components/Loading';
import Layout from '../components/layout/Layout';
import List from '../components/list/List';
import { queryDiscovery } from '../utils/index';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '60px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    width: '100%',
    margin: 4
  },
  grid: {
    marginTop: '48px',
    width: '100'
  }
}));

const Top = () => {
  const [sendText, setSendText] = useState('');
  const [recvText, setRecvText] = useState({ loading: false });
  const classes = useStyles();

  const onPressQuery = async (event) => {
    event.preventDefault();
    if (!sendText) return;
    setRecvText({});
    const res = await queryDiscovery(sendText);

    setRecvText(res);
    // setSendText('');
  };

  return (
    <Layout>
      <form
        onSubmit={(e) => {
          onPressQuery(e);
        }}
      >
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Watson Discovery で検索"
            inputProps={{ 'aria-label': 'search watson discovery' }}
            onChange={(e) => {
              setSendText(e.target.value);
            }}
          />
          <IconButton
            type="button"
            className={classes.iconButton}
            aria-label="search"
            onClick={(e) => onPressQuery(e)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
      {recvText.loading ? (
        <Loading />
      ) : (
        <Grid className={classes.grid}>
          <Container>
            <Grid>
              {/* {recvText.map(rt => <div>{rt.title} {rt.content}</div>)} */}
              {recvText.value ? <List rectText={recvText.value.data.results} /> : <></>}
            </Grid>
          </Container>
        </Grid>
      )}
    </Layout>
  );
};

export default Top;
