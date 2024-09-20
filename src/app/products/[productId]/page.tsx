import { Metadata } from "next";

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProductDetailsProps): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => resolve(`iPhone ${params.productId}`), 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <h1>Details about product {params.productId}</h1>;
}
