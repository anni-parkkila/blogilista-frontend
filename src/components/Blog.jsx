import { useState } from 'react'

const Blog = ({ blog, updateLikes, removeBlog }) => {
  const [blogVisible, setBlogVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 5,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    maxWidth: 500
  }

  const toggleVisibility = () => {
    setBlogVisible(!blogVisible)
  }

  return (
    <div style={blogStyle}>
      {!blogVisible && (
        <div>
          <strong>{blog.title}</strong> by {blog.author} <button onClick={toggleVisibility}>view</button>
        </div>
      )}
      {blogVisible && (
        <div>
          <strong>{blog.title}</strong> by {blog.author} <button onClick={toggleVisibility}>hide</button><br />
          Url: {blog.url}<br />
          Likes: {blog.likes} <button className='likeButton' onClick={updateLikes}>like</button><br />
          Added by: {blog.user.name}<br />
          <button className='removeButton' onClick={removeBlog}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Blog