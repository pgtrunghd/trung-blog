type Post = {
  publishedAt: string;
  _id: string;
  _updatedAt: string;
  slug: Slug;
  body: Body[];
  title: string;
  mainImage: MainImage;
  _createdAt: string;
  _rev: string;
  _type: string;
  description: string;
};

interface Slug {
  _type: string;
  current: string;
}

interface Body {
  children: Children[];
  _type: string;
  style: string;
  _key: string;
  markDefs: any[];
}

interface Children {
  _type: string;
  marks: string[];
  text: string;
  _key: string;
}

interface MainImage {
  _type: string;
  alt: string;
}
