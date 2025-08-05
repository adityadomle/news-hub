import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import { ThemeContext } from './context/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [articles, setArticles] = useState([])
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <BrowserRouter>
      <Navbar setArticles={setArticles}/>
      <Routes>
        <Route path='/' element={<News country='us' category='general' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/business' element={<News country='us' category='business' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/entertainment' element={<News country='us' category='entertainment' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/general' element={<News country='us' category='general' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/health' element={<News country='us' category='health' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/science' element={<News country='us' category='science' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/sports' element={<News country='us' category='sports' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/technology' element={<News country='us' category='technology' articles={articles} setArticles={setArticles} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
