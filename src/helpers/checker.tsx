// check if store object is fetched and not empty
const isFetched = ({
  data,
  loading
} : {
  data?: any
  loading: boolean
}) => {
  if(loading) return false
  if(Array.isArray(data)) return data.length > 0
  return !!data
}

const checked = {
  isFetched
}

export default checked