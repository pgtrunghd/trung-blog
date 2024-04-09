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
          
        </article>

        <SideNav />
      </div>
    </>
  );
};

export default BlogDetailPage;
