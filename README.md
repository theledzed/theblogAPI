## Getting Started

First run the server and after run de client:

```bash
npm install

npm run dev
# or
yarn install

yarn dev

```

Open [http://localhost:3000/api](http://localhost:3000/api) with your browser to see the result.

Find all post http://localhost:3000/api/theblog/post

Find one post http://localhost:3000/api/theblog/post/:id

Create a post http://localhost:3000/api/theblog/post

```bash

const body =
{
    "title": "Post title",
    "author": "Name of author",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}

```
