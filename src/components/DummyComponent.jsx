import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DummyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://all-about-books.p.rapidapi.com/api/v1/publisher/Tor', {
          headers: {
            'X-RapidAPI-Key': '514aee25bfmsha978f84a507e1e0p158b10jsna4944599ce1c',
            'X-RapidAPI-Host': 'all-about-books.p.rapidapi.com'
          }
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Books by Publisher: Tor</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DummyComponent;
