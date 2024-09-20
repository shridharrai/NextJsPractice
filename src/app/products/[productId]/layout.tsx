"use client";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const randomId = getRandomInt(2);
  if (randomId === 1) {
    throw new Error("Error loading product");
  }

  return (
    <div>
      {children}
      <h2>Featured Products</h2>
    </div>
  );
}
