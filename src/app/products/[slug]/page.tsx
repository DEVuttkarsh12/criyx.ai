import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductExperience from "@/components/ProductExperience";
import { PRODUCT_PAGES, getProductBySlug } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return PRODUCT_PAGES.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Criyx",
    };
  }

  return {
    title: `${product.title} | Criyx`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductExperience product={product} />;
}
