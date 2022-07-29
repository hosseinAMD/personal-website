import ArticleCard from 'components/ArticleCard/ArticleCard';
import Section from 'components/Layout/Section';
import { articles } from 'data/articles';

const Articles = () => {
  return (
    <Section title="Articles">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </Section>
  );
};

export default Articles;
