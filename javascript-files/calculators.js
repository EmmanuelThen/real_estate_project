//import { formatNumber } from "./modules/utilities";
//Cap rate calculator
const propertyValueInput = document.getElementById('property-value');
const noiInput = document.getElementById('net-operating-income');
const capRateOutput = document.getElementById('cap-rate');


function calculateCapRate() {
  const propertyValue = parseFloat(propertyValueInput.value);
  const noi = parseFloat(noiInput.value);

  if (isNaN(propertyValue) || isNaN(noi)) {
    capRateOutput.textContent = '';
    return;
  }

  const capRate = noi / propertyValue * 100;
  capRateOutput.textContent = `${capRate.toFixed(2)} %`;
  

  if (capRate > 6) {
    capRateOutput.style.color = 'rgba(0, 230, 165)';
    capRateOutput.style.fontWeight = 'bolder';
  } else if ((capRate > 3) && (capRate <= 6)) {
    capRateOutput.style.color = 'yellow';
  } else if (capRate <= 3) {
    capRateOutput.style.color = 'red';
  }
}

propertyValueInput.addEventListener('input', calculateCapRate);
noiInput.addEventListener('input', calculateCapRate);


//NOI calculator
const grossIncomeInput = document.getElementById('gross-income');
const OpexInput1 = document.getElementById('exp-1');
const OpexInput2 = document.getElementById('exp-2');
const OpexInput3 = document.getElementById('exp-3');
const OpexInput4 = document.getElementById('exp-4');
const OpexInput5 = document.getElementById('exp-5');
const OpexInput6 = document.getElementById('exp-6');
const OpexOutput = document.getElementById('total-Opex');
const noiOutput = document.getElementById('net-operating-income');
const annualNoiOutput = document.getElementById('net-operating-income-annual')

function calculateNOI() {
  //console.log("Calculating NOI...");
  const grossIncome = parseFloat(grossIncomeInput.value);
  let OpexTotal = 0;

  for (let i = 1; i <= 6; i++) {
    const OpexValue = parseFloat(document.getElementById(`exp-${i}`).value);
    if (!isNaN(OpexValue)) {
      OpexTotal += OpexValue;
    }
  }


  const netOperatingIncome = (grossIncome - OpexTotal);
  const annualNoi = (netOperatingIncome * 12)
  /*console.log("Gross Income:", grossIncome);
  console.log("OpexTotal:", OpexTotal);
  console.log("Net Operating Income:", netOperatingIncome);
  console.log("annual NOI:", annualNoi);*/
  OpexOutput.textContent = `$${OpexTotal.toFixed(2)}`;
  noiOutput.textContent = `$${netOperatingIncome.toFixed(2)}`;
  annualNoiOutput.textContent = `$${annualNoi.toFixed(2)}`;

}



// Dont forget to fix why monthly NOI is not showing up
grossIncomeInput.addEventListener('input', calculateNOI);
OpexInput1.addEventListener('input', calculateNOI);
OpexInput2.addEventListener('input', calculateNOI);
OpexInput3.addEventListener('input', calculateNOI);
OpexInput4.addEventListener('input', calculateNOI);
OpexInput5.addEventListener('input', calculateNOI);
OpexInput6.addEventListener('input', calculateNOI);

