import React, { useState } from "react";

// Sample data (replace with API data)
const posts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  image:
    i % 2 === 0
      ? "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
      : "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=400",
  category: "Category name",
  title:
    i % 2 === 0
      ? "How Mutual Fund SIPs have created wealth over the last 15 years"
      : "Which is a better mutual fund option: Lumpsum or SIP?",
  excerpt:
    "Systematic Investment Plans (SIPs) were introduced in India almost 15 years ago...",
  author: "Eddie Lobanovskiy",
  date: "09 Nov 2023",
  readTime: "5 min read",
  views: "12,32,431",
  likes: "778",
}));

const ITEMS_PER_PAGE = 9;

const BlogLayout = () => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="px-4 md:px-10">
      {/* Blog grid */}
      <div className="grid gap-6">
        {currentPosts.map((_, groupIndex) => {
          if (groupIndex % 3 !== 0) return null; // Only process in groups of 3

          const group = currentPosts.slice(groupIndex, groupIndex + 3);
          const isEvenGroup = (groupIndex / 3) % 2 === 0; // alternate layout

          return (
            <div
              key={groupIndex}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6`}
            >
              {/* Layout: Big left, 2 small right */}
              {isEvenGroup ? (
                <>
                  {/* Big Card */}
                  <div className="md:col-span-2 bg-white shadow rounded-lg overflow-hidden">
                    <img
                      src={group[0]?.image}
                      alt={group[0]?.title}
                      className="w-full h-56 md:h-72 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-xs text-gray-500">
                        {group[0]?.category}
                      </span>
                      <h2 className="text-lg font-semibold mt-2">
                        {group[0]?.title}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {group[0]?.excerpt}
                      </p>
                      <div className="text-xs text-gray-500 mt-2">
                        by <span className="font-medium">{group[0]?.author}</span>{" "}
                        • {group[0]?.date}
                      </div>
                    </div>
                  </div>

                  {/* 2 Small Cards */}
                  <div className="flex flex-col gap-6">
                    {group.slice(1).map((post) => (
                      <div
                        key={post.id}
                        className="bg-white shadow rounded-lg overflow-hidden flex"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-28 h-28 object-cover"
                        />
                        <div className="p-3 flex flex-col justify-between">
                          <h3 className="text-sm font-semibold line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <span className="text-[11px] text-gray-500">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                /* Layout: 2 small left, Big right */
                <>
                  {/* 2 Small Cards */}
                  <div className="flex flex-col gap-6">
                    {group.slice(0, 2).map((post) => (
                      <div
                        key={post.id}
                        className="bg-white shadow rounded-lg overflow-hidden flex"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-28 h-28 object-cover"
                        />
                        <div className="p-3 flex flex-col justify-between">
                          <h3 className="text-sm font-semibold line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <span className="text-[11px] text-gray-500">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Big Card */}
                  <div className="md:col-span-2 bg-white shadow rounded-lg overflow-hidden">
                    <img
                      src={group[2]?.image}
                      alt={group[2]?.title}
                      className="w-full h-56 md:h-72 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-xs text-gray-500">
                        {group[2]?.category}
                      </span>
                      <h2 className="text-lg font-semibold mt-2">
                        {group[2]?.title}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {group[2]?.excerpt}
                      </p>
                      <div className="text-xs text-gray-500 mt-2">
                        by <span className="font-medium">{group[2]?.author}</span>{" "}
                        • {group[2]?.date}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(posts.length / ITEMS_PER_PAGE) }).map(
          (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default BlogLayout;
