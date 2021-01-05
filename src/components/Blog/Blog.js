import React from 'react';

class Blog extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
              ptitle: "",
              name: "",
              avtar: "",
              profileurl: "",
            },
            item: [],
            isloading: true,
            error: null
          };
        }

 mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@katrina.mdelosreyes";

componentDidMount() {
  Axios.get(this.mediumURL)

    .then((data) => {
      // console.log(data.data)
      const avatar = data.data.feed.image;
      const profileLink = data.data.feed.link;
      const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter(item => item.categories.length > 0);

      const title = data.data.feed.title;

      this.setState(
        (pre) => ({
          profile: {
            ...pre.profile,
            ptitle: title,
            profileurl: profileLink,
            avtar: avatar,

          },
          item: posts,
          isloading: false
        }),
        () => {
          console.log(this.state);
        }
      );
      console.log(data, res);
    })
    .catch((e) => {
      this.setState({ error: e.toJSON() })
      console.log(e);
    });
}

render() {
  console.log(this.state.error)
  let post

  if (this.state.item) {
    post = this.state.item.map((post, index) => (
      <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
    ))
  }
}
}

export default Blog;