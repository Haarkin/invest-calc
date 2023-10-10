
import CalculationForm from './components/CalculationForm';
import ResultTable from './components/ResultTable';
import logo from './assets/investment-calculator-logo.png';
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState(null)
    
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
};
const yearlyData = [];

  if (userInput) {

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
}
  

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <CalculationForm onCalculate={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && <p className='table-deny'>No investment yet.</p>}
      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
