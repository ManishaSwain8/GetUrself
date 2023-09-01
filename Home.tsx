import LoadingSpinnerButton from "Button"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import "./nodee.css"

export default function Home() {
  const [record, setRecords] = useState([])
  var arr = []
  const [loading, setLoading] = useState(false)
  return (
    <div className="hero">
      <img
        className="maplogo"
        src="https://st4.depositphotos.com/1842549/21055/i/450/depositphotos_210552770-stock-photo-pin-location-icon-internet-button.jpg"
      />
      <div>
        <LoadingSpinnerButton
          title="My loaction"
          loading={loading}
          onClick={() => {
            //used for SyncLoader
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 1000)
            fetch("https://ipinfo.io/json?token=yourtoken") //token removed
              .then((response) => response.json()) //fetched the json object using token from IPINFO
              .then((jsonResponse) => {
                arr.push({
                  city: jsonResponse.city,
                  country: jsonResponse.country, //converted the fetched json data into array to use map function easily
                  region: jsonResponse.region
                })
                setRecords(arr)
                console.log(arr)
              })
          }}></LoadingSpinnerButton>
      </div>

      {Array.isArray(record) ? ( //displays the fetched json object that is converted to array above.
        record.map((records) => {
          return (
            <div className="des-bg">
              <div key={uuidv4()} className="description">
                <p>Your country is : {records.country}</p>
                <p>Your state is : {records.region}</p>
                <p>Your city is : {records.city}</p>
              </div>
            </div>
          )
        })
      ) : (
        <p>Not found</p>
      )}
    </div>
  )
}
