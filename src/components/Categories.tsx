import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='sm:py-8 pb-4 sm:basis-1/4'>
      <div className='sm:w-20 sm:pl-0 pl-4 mx-auto'>
        <h2 className='text-lg border-b-2 mb-3 border-blue-500 font-bold'>
          Category
        </h2>
        <ul className='cursor-pointer flex sm:block'>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => onClick(category)}
              className={`hover:text-blue-400 px-2 ph-1 ${
                category === selected && 'text-blue-600'
              } `}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Categories;
