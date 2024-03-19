import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";

import ContentBody from "@/components/ContentBody";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return <ContentBody page={page} />;
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("project");

  const paths = pages.map((page) => ({
    params: { uid: page.uid },
  }));

  return { paths, fallback: "blocking" };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.title,
    description: page.data.meta_description,
  };
}
