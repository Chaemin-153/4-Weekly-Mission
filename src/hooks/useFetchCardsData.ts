import { useState, useEffect } from 'react';
import formatDate from '../utils/formatDate';
import calculateTimePassed from '../utils/calculateTimePassed';

function useFetchCardsData() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/folder'
        );
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        const data = await response.json();
        const links = data.folder.links.map((link: any) => ({
          ...link,
          timePassed: calculateTimePassed(link.createdAt),
          formattedDate: formatDate(link.createdAt),
        }));
        setCardsData(links);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  return cardsData;
}

export default useFetchCardsData;