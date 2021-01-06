import React from 'react';
import { Grid } from '@material-ui/core';
// import axios from 'axios';
// import PostCard from './PostCard';

// wrapper for items
class Slider extends React.Component {
  mediumURL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@katrina.mdelosreyes';

  // constructor(props) {
  //   super(props);
  //   this.state = { itemRows: [], avatar: '', profileLink: '' };
  // }

  /* eslint-disable no-param-reassign */
  // async componentDidMount() {
  //   await axios
  //     .get(this.mediumURL)
  //     .then(async (res) => res.data)
  //     .then((data) => {
  //       // create two-dimensional array with 3 elements per inner array
  //       const avatar = data.feed.image;
  //       const profileLink = data.feed.link;
  //       // This is an array with the content. No feed, no info about author etc..
  //       const res = data.items;
  //       const posts = res.filter((item) => item.categories.length > 0);

  //       this.setState({ avatar, profileLink });
  //       const itemRows = [];
  //       posts.forEach((item, i) => {
  //         item.avatar = this.state.avatar; // push avatar inside the json
  //         item.profilelink = this.state.profileLink; // push profile link inside the JSON
  //         const row = Math.floor(i / 3);
  //         if (!itemRows[row]) itemRows[row] = [];
  //         itemRows[row].push(item);
  //       });

  //       this.setState({ itemRows });
  //     });
  // }

  render() {
    // const { itemRows } = this.state;

    return (
      <Grid container spacing={1}>
        {/* {itemRows.map((row) => row.map((item) => <PostCard {...item} key={item.id} />))} */}
        Hello!
      </Grid>
    );
  }
}
export default Slider;
