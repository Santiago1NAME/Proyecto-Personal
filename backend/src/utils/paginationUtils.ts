const generatePaginationInfo = (page: string, limit: string, totalPage: number, totalItems: number) => {
    const totalPages = Math.ceil(totalItems / parseInt(limit));

    const paginationInfo = {
      totalItems: totalItems,
      totalPage: totalPage,
      currentPage: parseInt(page),
      itemsPerPage: parseInt(limit),
      totalPages: totalPages,
      previousPage: parseInt(page) > 1 ? parseInt(page) - 1 : null,
      nextPage: parseInt(page) < totalPages ? parseInt(page) + 1 : null,
      firstPage: 1,
      lastPage: totalPages,
    };

    return paginationInfo;
  };

export { generatePaginationInfo }