import React from 'react'
import Card from '../UI/Card'
import './ExpenseDate';
import "./ExpenseItem.css"

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    let title = props.title;

    const clickHandler = () => {
        title = 'Updated';
        console.log(title);
    }

    return (
        <Card className='expense-item'>
<ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick ={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;
