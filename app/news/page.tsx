import Image from "next/image";
import Link from "next/link";
import { DUMMY_NEWS } from "../../dummy-news";
export default function News() {
  return (
    <>
      <h1>This is news</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
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
        ))}
      </ul>
    </>
  );
}
