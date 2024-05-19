import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map(
        (newsItem: { id: Key; slug: any; image: any; title: string }) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                width={300}
                height={300}
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
