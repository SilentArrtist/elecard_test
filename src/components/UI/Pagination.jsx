import React, { memo } from 'react';
import { getPagesArray } from '../../utils/pages';
import '../../styles/Pages.css'
const Pagination = memo(({pages, currentPage, changePage}) => {
    let pagesArray = getPagesArray(pages);
    return (
        <div className="page_wrapper">
            {pagesArray.map(page =>
                <span
                onClick={() => changePage(page)}
                key={page}
                className={currentPage === page ? 'page page_current' : 'page'}
                >
                    {page}
                </span>
            )}
        </div>
    );
});

export default Pagination;