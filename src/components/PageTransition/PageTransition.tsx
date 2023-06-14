import { useState } from 'react';

export const PageTransition = (startPage: string) => {
  const [currentPage, setCurrentPage] = useState(startPage);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(null);

  const transitionToPage = (newPage: any) => {
    setIsLoading(true)
    setNextPage(newPage);
  }
  const handleLoaded = () => {
    if (isLoading && nextPage) {
        setCurrentPage(nextPage);
        setNextPage(null);
        setIsLoading(false);
    }
  }

  return {currentPage, isLoading, transitionToPage, handleLoaded}
}
