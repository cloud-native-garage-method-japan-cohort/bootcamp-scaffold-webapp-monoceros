import { Paper, Divider, ListItem, ListItemText } from '@material-ui/core';
import * as muList from '@material-ui/core';
import React from 'react';

const List = (props) => {
  return props.rectText
    ? props.rectText.map((rt, index) => (
        <muList component="nav" key={index}>
          <ListItem>
            <p>{rt.title}</p>
            <ListItemText>{rt.content}</ListItemText>
          </ListItem>
          {/* <Paper elevation={3}>{rt.content}</Paper> */}
          <Divider />
        </muList>
      ))
    : '';
};

export default List;
