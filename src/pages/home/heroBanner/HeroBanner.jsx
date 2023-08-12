import React, { useState } from "react"

import "./style.scss"
import { useNavigate } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import Img from "../../../components/lazyLoadImage/img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import { useSelector } from "react-redux"

const HeroBanner = () => {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const { url } = useSelector(state => state.home)
  const navigate = useNavigate()

  const { data, loading } = useFetch("/movie/upcoming")

  useFetch(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)
  }, [data])

  const searchQueryHandler = event => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img src={background} />
      </div>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={e => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
