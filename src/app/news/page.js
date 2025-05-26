'use client'
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination/paginate";
import { latestUpdate } from "@/data/nav";
import UpdateItem from "@/components/home/UpdateItem";

const ITEMS_PER_PAGE = 3;  // Limit to 6 items per page

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);  // State to store the paginated items

  const fetchData = (page) => {
    // Paginate the data based on the current page
    const paginatedData = latestUpdate.slice(
      (page - 1) * ITEMS_PER_PAGE, 
      page * ITEMS_PER_PAGE
    );
    setData(paginatedData);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(latestUpdate.length / ITEMS_PER_PAGE);

  return (
    <div className="pb-10 lg:pb-20">
        <div className="bg-contact-image h-[170px] md:h-[300px] lg:h-[400px] max-h-[800px] bg-[#66165a]/55 bg-blend-overlay w-full bg-center bg-no-repeat bg-cover text-lg md:text-2xl lg:text-4xl font-bold text-white 2xl:text-6xl flex flex-col items-center justify-center gap-0">
          <h1>News and Events</h1><br />  
        </div> 
        <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
            <div className="md:grid md:grid-cols-3 mt-10 !text-black">
                {data.map((value, index) => (
                    <UpdateItem 
                        className={'!text-black'}
                        key={index}
                        {...value}
                    />
                ))}
            </div>
        </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default News;