import { FunctionComponent } from 'react';
import { IArticle } from 'types/article';

const ArticleCard: FunctionComponent<IArticle> = ({ title, link, category, image }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col border-2 border-gray-200 rounded-lg mb-4 dark:border-gray-700">
      <img src={image} alt={title} className="rounded-t-lg h-44 object-cover" />
      <div className="flex flex-col flex-grow justify-between p-2">
        <h4 className="text-lg mb-2">{title}</h4>
        <div className="">
          {category.map((cat, index) => (
            <span
              key={index}
              className="inline-block mr-1 mb-2 bg-primary-100 p-1 rounded-lg text-primary-900 uppercase text-xs dark:bg-opacity-80">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
