import React, { useState} from 'react'
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        // console.log('Expenses.js');
        // console.log(selectedYear);
    }
    return (
        <div>

        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
            {props.items.map((expense) => (
                <ExpenseItem
                    key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
                />
            ))}

        </Card>
        </div>
    )
}

export default Expenses