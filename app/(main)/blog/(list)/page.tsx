import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

const getPosts = async () => {
  const data: (Post & SanityDocument)[] = await client.fetch(
    `*[_type == "post"]`
  );
  return data;
};

const BlogPage = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className="py-10">
      <p className="text-base">
        The post to share my experiences and knowledge in Frontend
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">CSS</h2>
        <div className="mt-4 grid grid-cols-2 gap-7">
          {/* {Array(5)
            .fill("x")
            .map((item, index) => (
              <Link key={index} href={`/blog/${index + 1}`}>
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>How To Center a Div</CardTitle>
                    <CardDescription>
                      The Ultimate Guide to Centering in CSS
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      When we truly learn the secrets of the Flexbox layout
                      mode, we can build absolutely incredible things. Fluid
                      layouts that stretch and shrink without arbitrary
                      breakpoints. In this action-packed interactive tutorial,
                      we'll pop the hood on the Flexbox algorithm and learn how
                      to do remarkable things with it. ✨
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-semibold">Read more</p>
                  </CardFooter>
                </Card>
              </Link>
            ))} */}
          {posts.map((post, index) => (
            <Link key={post._id} href={`/blog/${index + 1}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post?.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.body[0].children[0].text}</p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold">Read more</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
