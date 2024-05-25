

import React from 'react';
import Header from './Home/header';
import Main from './Home/main';
import Img from './Home/Img';

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

export default function IndexPage({ data }) {
  return (
    <>
       

       <section id="hero">
        <div className="hero-container">
       
       
     
        <a class="imges" href=' ' >
        <Img data={data} />
     
        </a>
    

        </div>
       

       
      </section>

      <Header />
      <Main />
     
    </>
  );
}
