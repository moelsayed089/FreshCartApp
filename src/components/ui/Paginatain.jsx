import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const NumPage = [1, 2, 3, 4]

function Pagination({ pageNumber, result, curntPage, onClickPrev, onClickNext, OnPageNumberClick }) {
    return (
        <div className="flex items-center justify-between border-t  border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1  justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{curntPage}</span> to <span className="font-medium">{pageNumber}</span> of{' '}
                        <span className="font-medium">{result}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate  inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            onClick={onClickPrev}
                            disabled={curntPage === 1}
                            className="relative inline-flex disabled:cursor-not-allowed items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {NumPage.map((num) => {
                            return <button key={num}

                                onClick={() => OnPageNumberClick(num)}
                                className="relative inline-flex hover:bg-green-600 hover:text-white duration-200  items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                            >
                                {num}
                            </button>
                        })}

                        <button
                            onClick={onClickNext}
                            disabled={curntPage === pageNumber}
                            className="relative inline-flex  disabled:cursor-not-allowed items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination