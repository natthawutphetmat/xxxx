"use client";
import React, { useState, useEffect } from 'react';
import Img from '../Home/Img';
import Header from '../Home/header';
import Main from '../Home/main';

const Page = ({ data }) => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bot.adsdep.com/url');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setUrls(data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div className="images">
            <Img data={data} />
            <a href="/" className="btn btn-success">ติดต่อเลย</a>
          </div>
        </div>
      </section>

      <Header />
      <Main />

      {urls.map((url, index) => (
        <div key={index} onClick={() => window.location.href = url.urlss}>
         <div className="images">
            <Img data={data} />
            <a href="/" className="btn btn-success">ติดต่อเลย</a>
          </div>
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch('https://bot.adsdep.com/api/get');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const repo = await res.json();
    console.log('Fetched data:', JSON.stringify(repo, null, 2)); // Detailed log of the fetched data
    return { props: { data: repo } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [] } }; // Return an empty array if there's an error
  }
}

export default Page;
