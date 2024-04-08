import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen container max-w-screen-xl">{children}</main>
  );
};

export default BlogLayout;
