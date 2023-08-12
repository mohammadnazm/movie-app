import React, { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import { useSelector, useDispatch } from "react-redux"
import { getApiConfiguration } from "./store/homeSlice.js"

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector(state => state.home)
  console.log(url)

  useEffect(() => {
    apiTesting()
  }, [])

  const apiTesting = async () => {
    await fetchDataFromApi("/movie/popular").then(res => {
      console.log("res=", res)
      dispatch(getApiConfiguration(res))
    })
  }

  return <div className="App">App {url?.total_pages}</div>
}

export default App
