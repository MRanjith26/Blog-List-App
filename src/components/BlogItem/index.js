// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="title-container">
        <h1 className="title-text">{title}</h1>
        <p className="date-text">{publishedDate}</p>
      </div>
      <p className="para-text">{description}</p>
    </li>
  )
}
export default BlogItem
