import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        console.log(event.target.value)
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className= 'expenses-filter'>
            <div className= 'expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option>'2023'</option>
                    <option>'2022'</option>
                    <option>'2021'</option>
                    <option>'2020'</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;