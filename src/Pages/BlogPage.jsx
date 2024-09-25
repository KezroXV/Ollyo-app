import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Title/Title'
import News from '../Components/News/News'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import news4 from '../assets/news4.png'
import news5 from '../assets/news5.png'
import Footer from '../Components/Footer/Footer'

const BlogPage = () => {
  const newsItems = [
    {
      title: 'Introducing OllyCon: Our First-Ever Conference',
      date: 'June 22, 2024',
      image: news1,
      C1: 'Conference',
      C2: 'AI/ML',
      C3: ''
    },
    {
      title: 'Utilizing TF-IDF Vectorization and Cosine Similarities',
      date: 'May 6, 2024',
      image: news2,
      C1: 'Cosine Similarity',
      C2: 'Machine Learning',
      C3: 'TF-IDF'
    },
    {
      title: 'Exploring Scalable Solutions: Building Tech That Grows With You',
      date: 'April 29, 2024',
      image: news3,
      C1: 'Cloud Services',
      C2: 'Scalability',
      C3: ''
    },
    {
      title: 'A Comprehensive Guide To Personal Safety In Cyberspace',
      date: 'April 29, 2024',
      image: news4,
      C1: 'Malware Prevention',
      C2: 'Password Security',
      C3: 'Phishing Attacks'
    },
    {
      title: 'Experimentation in Creative Design',
      date: 'April 18, 2024',
      image: news5,
      C1: 'Creative Tools',
      C2: 'Design',
      C3: 'Typography'
    }
  ];
  return (
    <div className='newscontainer'>
      <Navbar/>
      <Title subTitle={"Insights & Updates"} par={'Explore the latest insights and trends in technology and innovation on the Ollyo Blog. Stay informed and inspired.'}/>
    <div className='news'>
      {newsItems.map((news, index) => (
        <News 
          key={index}
          title={news.title}
          date={news.date}
          image={news.image}
          C1={news.C1}
          C2={news.C2}
          C3={news.C3}
        />
      ))}
    </div>
    <hr />
    <Footer/>
    </div>
  );
};

export default BlogPage