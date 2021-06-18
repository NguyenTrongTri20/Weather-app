import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from "react-redux"
import { getWeather } from '../../store/reducer/Weather';


function SearchLocation(props) {

    const [searchValue, setSearchValue] = useState("")


    const listLocation = useSelector(state => state.location)

    const weather = useSelector(state =>  state.weather)
    

    const dispatch = useDispatch()
    

    const onSearch = e => {
        let value = e.target.value 
        setSearchValue(value)
        const listFilter = searchLocation(value)
        removeList()

        if(listFilter){
            const searchWrap = document.getElementById('search')
            const autocompletedList = document.createElement("div")
            autocompletedList.setAttribute("id","autocompleted-list")
            autocompletedList.setAttribute("class","autocompleted-items")

            let maxItem = listFilter.length < 10 ? listFilter.length : 10 

            for(let i = 0; i < maxItem; i++){
                let locationName = document.createElement("div")
                locationName.setAttribute("id", listFilter[i].id)
                locationName.innerText = listFilter[i].name

                locationName.onmousedown = (e)=> {
                    
                    setSearchValue(e.target.textContent)
                    
                    const getWeatherLocation =  getWeather(listFilter[i].coord)
                    console.log(listFilter[i]);
                    
                    dispatch(getWeatherLocation)
                    

                    console.log(weather);
                    removeList()
                }

                autocompletedList.append(locationName)
            }
            searchWrap.appendChild(autocompletedList)
        }
    }

    const searchLocation = (searchValue) => {
        if(searchValue === "") return []
        return listLocation.filter(location => location.name.toLowerCase().includes(searchValue.toLowerCase()))
    }


    return (
        <form  autoComplete="off">
            <div className="search" id="search">
                <SearchIcon fontSize="small" id="search-icon"/>
                <input 
                    id="searchForm" 
                    type="text" 
                    placeholder="Search for places..."
                    value ={searchValue}
                    onChange={onSearch}
                    // onBlur={removeList}
                />            
            </div>
        </form>
    );
}

export default SearchLocation;


const removeList = () => {
    const list = document.getElementById("autocompleted-list")
    if(list){
        list.remove()
    }
}


