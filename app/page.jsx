import getPostData from '../utils/getPostData';
import PostCard from '../components/PostCard';
const Home = () => {
  const postData = getPostData('recipes')


  return (
    <main>
      <div className='postsContainer'>
        { postData.map((post, index) => (
          <PostCard key={index} post={post} /> 
        ))}
      </div>
    </main>
  )
}

export default Home