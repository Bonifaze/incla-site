const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center mt-4">
        <nav className="flex space-x-2 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-aut">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <div className="flex">≺<div className="hidden md:block ml-1">Previous</div></div>
          </button>
  
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 border border-gray-300 rounded-md ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}
  
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <div className="flex"><div className="hidden md:block mr-1">Next</div>≻</div>
          </button>
        </nav>
      </div>
    );
  };
  
  export default Pagination;
  