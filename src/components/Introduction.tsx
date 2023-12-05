import React from 'react';

const TITLE_CLASS = 'text-xl font-bold mt-4';

function Introduction() {
  return (
    <div className='bg-gray-200 p-4 pb-8 rounded-lg m-8 mb-12 w-4/5 flex flex-col items-center text-sm text-center'>
      <h3 className={TITLE_CLASS}> Who am I?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h3 className={TITLE_CLASS}> Career</h3>
      <p>Successmode (2021.11~)</p>
      <h3 className={TITLE_CLASS}> Skills</h3>
      <p>
        React, React-Native,TypeScript, Nextjs
        <br />
        Node, Express, MongoDB, Jest, Redux, React-Query
        <br /> PostCSS, Styled Components, Tailwind CSS
        <br /> Git, Github, Figma, Slack, Notion, Teams
      </p>
    </div>
  );
}

export default Introduction;
