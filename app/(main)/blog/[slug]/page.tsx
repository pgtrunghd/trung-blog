import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { SideNav } from "./side-nav";



const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="bg-hero -mx-8">
        <div className="h-32"></div>
        <div className="pt-12 pb-9 container max-w-screen-xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>How To Center a Div</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-semibold mt-6 mb-4">
            How To Center a Div
          </h1>
          <h2 className="text-xl mb-6">
            The Ultimate Guide to Centering in CSS
          </h2>
        </div>
      </div>

      <div className="container max-w-screen-xl py-[70px] flex items-start gap-20">
        <article className="basis-3/4">
          <p className="lg:text-lg">
            For a long time, centering an element within its parent was a
            surprisingly tricky thing to do. As CSS has evolved, we've been
            granted more and more tools we can use to solve this problem. These
            days, we're spoiled for choice! I decided to create this tutorial to
            help you understand the trade-offs between different approaches, and
            to give you an arsenal of strategies you can use, to handle
            centering in all sorts of scenarios. Honestly, this turned out to be
            way more interesting than I initially thought 😅. Even if you've
            been using CSS for a while, I bet you'll learn at least 1 new
            strategy!
          </p>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
          <h2
            className="text-2xl font-semibold mt-6 mb-4"
            id="centering-with-auto-margins-1"
          >
            Centering with auto margins
          </h2>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
          <p className="lg:text-lg">
            First, we need to constrain the element's width; by default,
            elements in Flow layout will expand horizontally to fill the
            available space, and we can't really center something that is
            full-width. I could constrain the width with a fixed value (eg.
            200px), but really what I want in this case is for the element to
            shrinkwrap around its content. fit-content is a magical value that
            does exactly this. Essentially, it makes “width” behave like
            “height”, so that the element’s size is determined by its contents.
            Why am I setting max-width instead of width? Well, my goal is to
            stop the element from expanding horizontally. I want to clamp its
            maximum size. If I used width instead, it would lock it to that
            size, and the element would overflow when the container is really
            narrow. If you drag that “Container Width” slider all the way to the
            left, you can see that the element shrinks with its container.
          </p>
        </article>

        <SideNav />
      </div>
    </>
  );
};

export default BlogDetailPage;
