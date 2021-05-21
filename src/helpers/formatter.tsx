const htmlDecode = (input: string) => {
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const objectToQuery = (object: {[key: string]: any}) => {
  let queries = []
  for (const [key, value] of Object.entries(object)) {
    if(Array.isArray(object[key])) object[key].length > 0 && queries.push(`${key}=${value}`)
    else object[key] && queries.push(`${key}=${value}`)
  }
  return queries.join('&')
}

const formatter = {
  htmlDecode,
  objectToQuery
}

export default formatter