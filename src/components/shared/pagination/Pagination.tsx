import "./Pagination.scss";

interface ProductSectionProps {
  pages: number;
  setCurrentPage: (index: number) => void;
}

const Pagination = ({ pages, setCurrentPage }: ProductSectionProps) => {
  return (
    <div className="pagination-container">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            className="pagination-button"
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
