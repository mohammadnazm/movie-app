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
    console.log("apiTesting=", apiTesting())
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const apiTesting = async () => {
    await fetchDataFromApi("/movie/popular").then(res => {
      console.log("res=", res)
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <div className="App" style={{ color: "white", fontSize: "3rem" }}>
      App {url.total_pages}
    </div>
  )
}

export default App
