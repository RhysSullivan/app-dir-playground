import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}
export async function getStaticProps(
  context: GetStaticPropsContext<{ slug2: string }>
) {
  const data = await fetch(
    "http://localhost:3000/api/ping?slug=" + context.params?.slug2,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const json = await data.json();
  return {
    props: {
      time: json.time,
      slug: json.slug,
    },
    revalidate: 10, // every 10 seconds
  };
}

export default function MessageResult(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      <p>Time: {props.time}</p>
      <p>Slug: {props.slug}</p>
    </div>
  );
}
