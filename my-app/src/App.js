import ExpenseItem from  './components/ExpenseItem';

function App() {

  const expeses = [
    {id: 'e1', title: 'Title 1', amount: 100, date: new Date(2023,9,25)},
    {id: 'e2', title: 'Title 2', amount: 200, date: new Date(2023,9,26)},
    {id: 'e3', title: 'Title 3', amount: 300, date: new Date(2023,9,27)},
    {id: 'e4', title: 'Title 4', amount: 400, date: new Date(2023,9,28)},
  ];
  return (
    <div>
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem title={expeses[0].title} amount={expeses[0].amount} date={expeses[0].date}></ExpenseItem>
        <ExpenseItem title={expeses[1].title} amount={expeses[1].amount} date={expeses[1].date}></ExpenseItem>
        <ExpenseItem title={expeses[2].title} amount={expeses[2].amount} date={expeses[2].date}></ExpenseItem>
        <ExpenseItem title={expeses[3].title} amount={expeses[3].amount} date={expeses[3].date}></ExpenseItem>
      </div>
      
    </div>
  );
}

export default App;
