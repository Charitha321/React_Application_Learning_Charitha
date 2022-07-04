
import ExpenseDate from './Expenses/ExpenseDate.js.js';
import './Expenses/ExpenseItem.css';

function ExpenseItem(props){
    return(
    <card className='maindiv'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='Innerdiv'>
            <h2>{props.title}</h2>
            <div>{props.amount}</div>
        </div>
    </card>
    );
}

export default ExpenseItem;