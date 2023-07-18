import React, {useState} from 'react'

const usePagination = (items, itemsOnPage) => {
  const pages = Math.ceil(items / itemsOnPage)
  const [currentPage, setCurrentPage] = useState(1)
  const currentRange = currentPage * itemsOnPage

  const goForward = () => {
    const possibleNewValue = currentPage + 1
    if(possibleNewValue > pages) {
      setCurrentPage(1)
    }else {
      setCurrentPage(possibleNewValue)
    }
  }

  const goBackward = () => {
    const possibleNewValue = currentPage - 1
    if(possibleNewValue < 1) {
      setCurrentPage(pages)
    }else {
      setCurrentPage(possibleNewValue)
    }
  }

  const goToPage = (page) => {
    setCurrentPage(page)
  }

  return (
    {
      currentPage,
      pages,
      goBackward,
      goForward,
      goToPage,
      currentRange
    }
  )
}

export default usePagination