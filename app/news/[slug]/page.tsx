import Image from "next/image";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../dummy-news";

export default function firstNews({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();

    return (
      <article className="news-article">
        <header>
          <Image
            width={100}
            height={100}
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    );
  }
}
