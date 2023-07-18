import React, {useState} from 'react'

const usePagination = (items, itemsOnPage = 5, maxNumberOfButtons = 5) => {
  const pages = Math.ceil(items / itemsOnPage)
  const [currentPage, setCurrentPage] = useState(1)
  const currentRange = currentPage * itemsOnPage

  const itemStartPoint = currentRange - itemsOnPage + 1
  const itemEndPoint = currentRange

  const diff = currentPage - Math.ceil(maxNumberOfButtons / 2)
  let newStartingPoint = diff < 1 ? 0 : diff
  let newEndingPoint = newStartingPoint + maxNumberOfButtons

  if(maxNumberOfButtons < pages){
    const L = Array.from(new Array(pages)).slice(newStartingPoint, newEndingPoint)
    if(L.length < maxNumberOfButtons) {
      newStartingPoint = Array.from(new Array(pages)).length - maxNumberOfButtons
      newEndingPoint = Array.from(new Array(pages)).length
    }
  }

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
      currentPage, // current section
      pages, // number of sections the list has been split into
      goBackward, // go to the next consecutive section 
      goForward, // go to the previous consecutive section 
      goToPage, // go to any section given the section number
      itemEndPoint, // 11 in e.g 11-20
      itemStartPoint, // 20 in e.g 
      newStartingPoint, // the visible first pagination button (inclusive)
      newEndingPoint, // the visible end pagination button (exclusive)
    }
  )
}

export default usePagination