export function clearEmptyChild(arr) {
  return arr.map(item => {
    if (item.children && item.children.length === 0) {
      delete item.children
      return item
    } else if (item.children && item.children.length !== 0) {
      item.children = clearEmptyChild(item.children)
      return item
    } else {
      return item
    }
  })
}

export function objAValueToBValue(obja, objb) {
  const keyArr = Object.keys(obja)
  const set = new Set(Object.keys(objb))
  keyArr.forEach(key => {
    if (set.has(key)) {
      objb[key] = obja[key]
    }
  })
  return objb
}