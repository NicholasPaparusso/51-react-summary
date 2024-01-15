import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

import { useState } from "react";
function Posts() {

  return (
      <>
        <Outlet/>
        <main>
            <PostsList />
        </main>
      </>
    );
}

export default Posts;
