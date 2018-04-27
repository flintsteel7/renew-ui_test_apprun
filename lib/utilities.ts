const toggle_visibility = (element: HTMLElement) => {
  if (element.style.visibility !== "visible") {
    element.style.visibility = "visible"
  } else {
    element.style.visibility = "hidden"
  }
}

const drag_horiz_resizer = (panel: string, x: number, grid_element: HTMLElement) => {
  const areas = ["far-left", "", "left", "", "", "right", ""]
  let columns = grid_element.style.gridTemplateColumns.split(' ')
  columns[areas.indexOf(panel)] = `${x - 1}px`
  grid_element.style.gridTemplateColumns = columns.join(' ')
}

export {drag_horiz_resizer, toggle_visibility}
