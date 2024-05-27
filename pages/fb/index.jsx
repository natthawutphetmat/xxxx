import Head from 'next/head';
import React, { useState, useEffect } from 'react';

const PixelFB = () => {
  const [pixelID, setPixelID] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://apipixcel.adsdep.com/get");
      if (!response.ok) {
        throw new Error('ไม่สามารถดึงข้อมูลได้');
      }
      const data = await response.json();
      if (data.length > 0 && data[0].item) {
        setPixelID(data[0].item);
      } else {
        throw new Error('ค่า Pixel ID ไม่ถูกต้อง');
      }
    } catch (error) {
      console.error(error);
      setError('เกิดข้อผิดพลาดในการดึงข้อมูล');
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      {pixelID && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelID}&ev=PageView&noscript=1`}
            />
          </noscript>


        
        </Head>
      )}
    </>
  );
};

export default PixelFB;
