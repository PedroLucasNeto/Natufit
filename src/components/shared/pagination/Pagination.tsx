import "./Pagination.scss";

interface ProductSectionProps {
  pages: number;
  setCurrentPage: (index: number) => void;
  currentPage: number;
}

const Pagination = ({ pages, setCurrentPage, currentPage }: ProductSectionProps) => {
  return (
    <div className="pagination-container">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            className={
              currentPage === index
                ? "pagination-button  current-page"
                : "pagination-button  "
            }
            key={index}
            onClick={() => setCurrentPage(index)}>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
