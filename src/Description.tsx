import React from 'react';

interface TProps {
  initData: {
    id: string
    link: string
  }
  name: string
}
export const Description1 = ({ initData, name }: TProps) => (
    <>
      <p>{`Hello ${name}`}</p>
      <a className="App-link" href={initData.link} target="_blank" rel="noopener noreferrer">
        {`Learn React ${initData.id}`}
      </a>
    </>
);
