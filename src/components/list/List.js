import { Paper, Divider, ListItem, ListItemText, Box, Typography, List as muiList } from '@material-ui/core';
import * as React from 'react';

import Style from './List.module.css';

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
  borderColor: 'text.primary'
};

const List = (props) => {
  return props.rectText ? (
    <muiList sx={{ width: '100%' }}>
      <Box sx={commonStyles}>
        {props.rectText.map((rt, index) => (
          <div key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={rt.title}
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                      {rt.content}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </Box>
    </muiList>
  ) : (
    ''
  );
};

export default List;
