import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About The Place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((features, index) => {
          return (
            <div
              key={`features-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                src={features.imageUrl}
                alt={features.name}
                className="d-block mb-2"
                width="38"
              />
              {''}
              <span>{features.qty}</span>{' '}
              <span className="text-gray-500 font-weight-light">
                {features.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
