import React from "react";

const BlogDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="-mt-14 container max-w-full">{children}</main>;
};

export default BlogDetailLayout;
