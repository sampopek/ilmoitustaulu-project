import React from "react";
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

import useStyles from './styles'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log('posts', posts)

    function compare(a, b) {
      if (a.createdAt < b.createdAt) {
        return 1
      }
      if (a.createdAt > b.createdAt) {
        return -1
      }
    }

    const sortedPosts = posts.sort(compare)

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {sortedPosts.map((post) => (
                  <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                  </Grid>  
                ))}
            </Grid>
        )
    )
}

export default Posts