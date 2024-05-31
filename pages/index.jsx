import React from 'react';
import Header from './Home/header';
import Main from './Home/main';
import Head from 'next/head';

export async function getStaticProps() {
  try {
    const res = await fetch('https://bot.adsdep.com/api/get');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [] } }; // Return empty array on error
  }
}

export default function IndexPage({ data }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>PG Games ความแตกต่างที่เป็นตัวตัดสิน pg slot game</title>
        <meta name="description" content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย" />
        <meta property="og:title" content="PG Games ความแตกต่างที่เป็นตัวตัดสิน pg slot game" />
        <meta property="og:description" content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย" />
        <meta property="og:url" content="https://www.chaiyoloan.com/" />
        <meta property="og:image" content="https://www.chaiyoloan.com/img/logo.jpg" />
      </Head>

      <section id="hero">
        <div className="hero-container">
          <div className="imges">
            <div className="images">
              {data && data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id}>
                    <a href="https://lin.ee/g1H4k9G">  
                    <img src={`https://bot.adsdep.com/${item.url}`} alt={item.filename} style={{ width: '100%', height: '100%', padding: '10px' }} />

                    </a>
                  </div>
                ))
              ) : (
                <p> </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Header />
      <Main />
    </>
  );
}
