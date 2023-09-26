import Expenses from  './components/Expenses';

function App() {

  const expenses = [
    {id: 'e1', title: 'Title 1', amount: 100, date: new Date(2023,9,25)},
    {id: 'e2', title: 'Title 2', amount: 200, date: new Date(2023,9,26)},
    {id: 'e3', title: 'Title 3', amount: 300, date: new Date(2023,9,27)},
    {id: 'e4', title: 'Title 4', amount: 400, date: new Date(2023,9,28)},
  ];
  return (
    <div>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;
