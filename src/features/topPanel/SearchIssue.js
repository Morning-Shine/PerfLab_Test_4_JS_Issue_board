import React, { useRef } from "react";
import './SearchIssue.css';
import { debounce } from "lodash";

export default function ({ setSearchInputValue }) {

    let handlerInputDebounse = useRef(
        debounce(e => {
            console.log('console.log from search', e);
            setSearchInputValue(e);
        }, 500)).current;

    function handleChange(e) {
        handlerInputDebounse(e.target.value)
    }

    return (
        <form className="search__form">
            <p>
                <input
                    onChange={handleChange}
                    type="search"
                    name="q"
                    placeholder="Search"
                    className="form__input"
                />
                {/* <input
                onClick={handleChange()}
                    type="submit"
                    value="Search"
                    className="form__button"
                /> */}
            </p>
        </form>
    )
}
