export interface ChildProps {
  children: React.ReactNode;
}

export interface IBlog {
  title: string;
  description: string;
  author: IAuthor;
  category: ITypeCategoryAndTags;
  tag: ITypeCategoryAndTags;
  image: { url: string };
  createdAt: string;
  content: { html: string };
  slug: string;
}

export interface IAuthor {
  name: string;
  image: { url: string };
  bio: string;
  slug: string;
}

export interface ITypeCategoryAndTags {
  name: string;
  slug: string;
}
