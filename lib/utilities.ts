const toggle_visibility = (element: HTMLElement) => {
  if (element.style.visibility !== "visible") {
    element.style.visibility = "visible"
  } else {
    element.style.visibility = "hidden"
  }
}

export {toggle_visibility}
