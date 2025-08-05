import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';
import { Loader2 } from 'lucide-react';

const News = ({ country, category, articles, setArticles }) => {

    const [loading, setLoading] = useState(false)

    const fetchAllNews = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`)

            setArticles(res.data.articles);
            console.log(res.data.articles);


        } catch (error) {
            console.log(error);

        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAllNews()
    }, [category])
    return (
        <>
            {
                loading ? <div className='bg-gray-200 dark:bg-gray-800 h-screen flex flex-col gap-3 items-center justify-center'>
                    <Loader2 className='h-12 w-12 animate-spin dark:text-gray-200' />
                    <h1 className='text-gray-800 text-xl font-semibold dark:text-gray-200'>Loading...</h1>
                </div> :
                    <div className='bg-gray-200 dark:bg-gray-800 py-24 px-4 md:px-0'>
                        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7'>
                            {
                                articles.map((article, index) => {
                                    return <NewsCard key={index} article={article} />
                                })
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default News
