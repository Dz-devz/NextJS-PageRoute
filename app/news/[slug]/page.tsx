export default function firstNews({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div>
      <h1>News Details {slug}</h1>
    </div>
  );
}
