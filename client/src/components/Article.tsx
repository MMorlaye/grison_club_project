import { FC } from 'react';
import { Link } from 'wouter';

interface ArticleProps {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  slug: string;
}

export const Article: FC<ArticleProps> = ({ id, title, date, image, description, slug }) => {
  return (
    <Link href={`/news/${slug}`}>
      <a className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="text-sm text-emerald-800 font-semibold mb-2">{date}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="text-emerald-800 font-medium hover:text-emerald-600">
            Lire la suite →
          </div>
        </div>
      </a>
    </Link>
  );
};
