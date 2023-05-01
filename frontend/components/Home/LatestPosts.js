import React from "react";
import { useQuery, gql } from "@apollo/client";
import { POSTS } from "../../utils/queries";
import Link from "next/link";
import { initializeApollo } from "../../lib/apollo";
import auth from "../../utils/auth";
import Image from "next/image";

const LatestPosts = () => {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts;

  console.log("posts", posts);

  return (
    <section className="flex flex-col items-center justify-start  lg:py-8">
      <h3 className=" md:font-normal text-2 mb-12 ">Latest Posts</h3>

      <div className=" flex flex-col items-start justify-start px-6 md:grid lg:justify-center lg:justify-items-center	 md:justify-center w-full md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2	lg:grid-flow-row md:gap-x-8	lg:gap-y-8  mb-12 lg:mb-0">
        {posts.map((post) => (
          <article
            key={post.title}
            className="relative bg-white shadow-md  rounded-2xl min-h-28 w-full md:w-96 px-8 py-8 flex flex-col items-center justify-start mb-8 lg:mb-0"
          >
            <div
              className="rounded-lg relative h-56 w-full bg-cover bg-center mb-2"
              style={{
                backgroundImage: `url(${post.image.url})`,
              }}
            ></div>{" "}
            <p className="bg-primary py-2 px-4 rounded-full text-0.75 text-yellowdark font-semibold mb-4">
              📍 {post.location}
            </p>
            <div className="w-full flex flex-col items-start justify-start ">
              <h3 className="font-semibold text-1.25 mb-2">{post.title}</h3>
              <p className=" text-0.875 mb-4">{post.description}</p>
              <p className="font-semibold text-0.75 mb-2">
                Posted on {post.createdAt}
              </p>
            </div>
            <Link
              href={`${auth.loggedIn() ? `/post/${post._id}` : "/login"}`}
              className="flex justify-center items-center absolute bottom-4 right-4 rounded h-10 bg-yellowdark text-white  font-semibold text-0.875 w-28"
            >
              Full Post{" "}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: POSTS,
  });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
};

export default LatestPosts;
