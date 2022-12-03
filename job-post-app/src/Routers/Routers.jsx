import React from "react";
import { Route, Routes } from "react-router-dom";
import JobPosting from "../components/jobPosting/jobPosting";
import JobListing from "../components/jobListing/JobListing";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<JobPosting />} />
        <Route path="/jobLists" element={<JobListing />} />
      </Routes>
    </>
  );
};

export default Routers;
