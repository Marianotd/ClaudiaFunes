import React, { useState } from 'react'
import ItemList from '../../components/toCheck/ItemList';
import ReactPaginate from 'react-paginate'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function PaginatedItems({ itemsPerPage, items }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div
            className='flex flex-col items-center gap-5 px-4 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        >
            <ItemList data={currentItems} />

            <ReactPaginate
                className='md:col-span-2 lg:col-span-3 xl:col-span-4 flex items-center justify-center gap-4'
                pageClassName="hover:bg-main ease-out duration-300 border border-textMain rounded-full px-4 py-2"
                activeClassName="bg-main font-medium"
                previousClassName="hover:text-main text-3xl"
                nextClassName="hover:text-main text-3xl"
                breakClassName="text-gray-700"
                breakLinkClassName="px-3 py-2"
                breakLabel={'...'}
                nextLabel={<GrNext />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<GrPrevious />}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}
