// Get data from https://json-mock.org/api/posts
// Paginate
import React, { useEffect, useState } from "react";
// import { paginationData } from "../assets/pagination-data";
const Pagination = () => {
  const [postData, setPostData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    (async () => {
      //   setTimeout(() => {
      //     setPostData(paginationData.json);
      //   }, 1000);
      const res = await fetch("https://json-mock.org/api/posts");
      const data = await res.json();
      setPostData(data);
      //   paginateData();
    })();
  }, []);
  useEffect(() => {
    paginateData();
  }, [entriesPerPage]);

  const paginateData = () => {
    let pageDataArr = [];
    let iterationLength = Math.ceil(postData.length / entriesPerPage);
    const currentPageData = postData.slice(
      (currentPage - 1) * entriesPerPage,
      currentPage * entriesPerPage
    );
    console.log(iterationLength);
    // console.log(entriesPerPage);

    // for (let i = 0; i <= postData.length; i += 10) {
    //   //   let pageData = postData.slice(i, entriesPerPage);
    //   console.log("Hi");
    //   //   pageDataArr.push(pageData);
    // }
  };

  const totalPages = Math.ceil(postData.length / entriesPerPage);
  const currentPageData = postData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  const handleEntries = (e) => {
    {
      const value = e.target.value;
      setEntriesPerPage(value);
    }
  };
  return (
    <>
      <input
        type="number"
        value={entriesPerPage}
        onChange={handleEntries}
        min={1}
      />
      <ul>
        {currentPageData.map((post) => {
          <>
            <li key={post.postId}>
              {post.postTitle} -- {post.postContent}
            </li>
          </>;
        })}
      </ul>
      <div style={{ marginTop: "1rem" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 4px",
              background: currentPage === i + 1 ? "#333" : "#eee",
              color: currentPage === i + 1 ? "#fff" : "#000",
              padding: "4px 10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};
export default Pagination;
