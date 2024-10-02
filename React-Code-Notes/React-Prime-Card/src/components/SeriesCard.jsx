import React from 'react';


/* 

In SeriesCard, destructured series directly in the function parameters so that
now, instead of using props.series.seriesName, etc. , we can directly use seriesName, 
seriesRatings, etc.
*/
export const SeriesCard = ({ series: 
         { seriesImage, seriesName, seriesRatings, seriesAbout, seriesGenre }, 
         canWatch }) => {
    return (  
        <li>
           <div>
              <img 
                 src={seriesImage} 
                 alt={seriesName} 
                 width="40%" 
                 height="40%" 
              />
           </div>
           <h1>{seriesName}</h1>
           <h3>Ratings: {seriesRatings}</h3>
           <p>{seriesAbout}</p>
           <p>Genre: {seriesGenre}</p>
           <button>{canWatch(seriesRatings)}</button>
        </li>
    ); 
};
