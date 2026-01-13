import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">WriteWorks AI</h1>
      <p className="text-lg text-gray-600 mb-8">
        AI-Powered Writing for Product Marketing
      </p>
      <Link
        href="/solutions/product-marketing"
        className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
      >
        View Product Marketing Solutions
      </Link>
    </main>
  );
}
