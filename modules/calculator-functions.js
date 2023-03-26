//Main-input-table rent and price inputs
const monthlyRentInput = document.getElementById('monthly-rent');
const salePriceInput = document.getElementById('sale-price');

//Main-input-exp inputs
const propTaxInput = document.getElementById('prop-tax');
const propInsuranceInput = document.getElementById('prop-ins');
const propUtilitiesInput = document.getElementById('prop-utilities');
const propManagementInput = document.getElementById('prop-mngmt');
const propVacancyInput = document.getElementById('prop-vacancy');
const propMaintenanceInput = document.getElementById('prop-maintenance');

//Pro forma outputs
const grossRentOutput = document.getElementById('gross-rent');
const propManagementOutput = document.getElementById('exp-1');
const propTaxOutput = document.getElementById('exp-2');
const propVacancyOutput = document.getElementById('exp-3');
const propMaintenanceOutput = document.getElementById('exp-4');
const propInsuranceOutput = document.getElementById('exp-5');
const propUtilitiesOutput = document.getElementById('exp-6');
const totalOpexOutput = document.getElementById('total-Opex')
const monthlyNoiOutput = document.getElementById('noi-monthly')
const annualNoiOutput = document.getElementById('noi-annual')
const capRateOutput = document.getElementById('cap-rate')

//Function to format numbers to USD
function formatNumber(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

//Function to calculate pro forma
 function calculateProForma() {
    //Get input values
    const monthlyRent = parseFloat(monthlyRentInput.value);
    const monthlyRentValue = isNaN(monthlyRent) ? 0 : monthlyRent;

    const propManagement = parseFloat(propManagementInput.value);
    const propManagementValue = isNaN(propManagement) ? 0 : propManagement;

    const propTax = parseFloat(propTaxInput.value);
    const propTaxValue = isNaN(propTax) ? 0 : propTax;

    const propVacancy = parseFloat(propVacancyInput.value);
    const propVacancyValue= isNaN(propVacancy) ? 0 : propVacancy;

    const propMaintenance = parseFloat(propMaintenanceInput.value);
    const propMaintenanceValue = isNaN(propMaintenance) ? 0 : propMaintenance;

    const salePrice = parseFloat(salePriceInput.value);
    
    const propInsurance = parseFloat(propInsuranceInput.value);
    const propInsuranceValue = isNaN(propInsurance) ? 0 : propInsurance;

    const propUtilities = parseFloat(propUtilitiesInput.value);
    const propUtilitiesValue = isNaN(propUtilities) ? 0 : propUtilities;


    //Calculate outputs
    const grossRents = monthlyRentValue;
    const propManagementCalc = (propManagementValue / 100) * grossRents;
    const propTaxCalc = propTaxValue / 12;
    const propVacancyCalc = (propVacancyValue / 100 ) * grossRents;
    const propMaintenanceCalc = (propMaintenanceValue / 100) * grossRents;
    const propInsuranceCalc = propInsuranceValue;
    const propUtilitiesCalc = propUtilitiesValue;
    const totalOpexCalc = propManagementCalc + propTaxCalc + propInsuranceCalc + propUtilitiesCalc + propVacancyCalc + propMaintenanceCalc;
    const monthlyNoiCalc = grossRents - totalOpexCalc;
    const annualNoiCalc = monthlyNoiCalc * 12;
    const capRateCalc = (annualNoiCalc / salePrice) * 100;

    //Format results to USD
    const formattedGrossRents = formatNumber(grossRents);
    const formattedManagement = formatNumber(propManagementCalc);
    const formattedTax = formatNumber(propTaxCalc);
    const formattedVacancy = formatNumber(propVacancyCalc);
    const formattedMaintenance = formatNumber(propMaintenanceCalc);
    const formattedInsurance = formatNumber(propInsuranceCalc);
    const formattedUtilities = formatNumber(propUtilitiesCalc);
    const formattedTotalOpex = formatNumber(totalOpexCalc);
    const formatteMonthlyNoi = formatNumber(monthlyNoiCalc);
    const formattedAnnualNoi = formatNumber(annualNoiCalc);
    

    //Update Output Fields
    grossRentOutput.textContent = `${formattedGrossRents}`;
    propManagementOutput.textContent = `${formattedManagement}`;
    propTaxOutput.textContent = `${formattedTax}`;
    propVacancyOutput.textContent = `${formattedVacancy}`;
    propMaintenanceOutput.textContent = `${formattedMaintenance}`;
    propInsuranceOutput.textContent = `${formattedInsurance}`;  
    propUtilitiesOutput.textContent = `${formattedUtilities}`;  
    totalOpexOutput.textContent = `${formattedTotalOpex}`; 
    monthlyNoiOutput.textContent = `${formatteMonthlyNoi}`; 
    annualNoiOutput.textContent = `${formattedAnnualNoi}`; 
    capRateOutput.textContent = `${capRateCalc.toFixed(2)}%`;
}

// Event listeners For Input Fields
monthlyRentInput.addEventListener('input', calculateProForma);
salePriceInput.addEventListener('input', calculateProForma);
propTaxInput.addEventListener('input', calculateProForma);
propInsuranceInput.addEventListener('input', calculateProForma);
propUtilitiesInput.addEventListener('input', calculateProForma);
propManagementInput.addEventListener('input', calculateProForma);
propVacancyInput.addEventListener('input', calculateProForma);
propMaintenanceInput.addEventListener('input', calculateProForma);




































//Mortgage Calculator
//Inputs
const downPaymentInput = document.getElementById('prop-dp');
const intRateInput = document.getElementById('prop-int');
const loanTermInput = document.getElementById('prop-loan');
const closingCostInput = document.getElementById('prop-closing');


//Outputs
const salePriceOutput = document.getElementById("sale-price2");
const downPmtOutput = document.getElementById("down-pmt");
const closingCostOutput = document.getElementById("closing-cost");
const ltvRatioOutput = document.getElementById("ltv-ratio");
const principalOutput = document.getElementById("principal");
const intOutput = document.getElementById("int");
const loanTermOutput = document.getElementById("loan-term");
const monthlyMortgageOutput = document.getElementById("monthly-mortgage");
const monthlyProfitOutput = document.getElementById("monthly-profit");
const annualProfitOutput = document.getElementById("annual-profit");
const annualROIOutput = document.getElementById("annual-ROI");

    
function calculateMortgageCalculator() {
    //Get Input Values
    const downPayment = parseFloat(downPaymentInput.value);
    const downPaymentValue = isNaN(downPayment) ? 0 : downPayment;

    const intRate = parseFloat(intRateInput.value);
    const intRateValue = isNaN(intRate) ? 0 : intRate;

    const loanTerm = parseFloat(loanTermInput.value);
    const loanTermValue = isNaN(loanTerm) ? 0 : loanTerm;

    const closingCost = parseFloat(closingCostInput.value);
    const closingCostValue = isNaN(closingCost) ? 0 : closingCost;

    //Variables needed for monthly mortgage payment
    const monthlyIntRate = (intRateValue / 100) / 12;
    const numberOfPayments = loanTermValue * 12;
    const discountFactor = (Math.pow(1 + monthlyIntRate, numberOfPayments) - 1) /
    (monthlyIntRate * Math.pow(1 + monthlyIntRate, numberOfPayments));




//////Needed to add these variables again in order to calculate the monthly net profit which includes monthlyNOI in the formula
    const monthlyRent = parseFloat(monthlyRentInput.value);
    const monthlyRentValue = isNaN(monthlyRent) ? 0 : monthlyRent;
    
    const propManagement = parseFloat(propManagementInput.value);
    const propManagementValue = isNaN(propManagement) ? 0 : propManagement;
    
    const propTax = parseFloat(propTaxInput.value);
    const propTaxValue = isNaN(propTax) ? 0 : propTax;
    
    const propVacancy = parseFloat(propVacancyInput.value);
    const propVacancyValue= isNaN(propVacancy) ? 0 : propVacancy;
    
    const propMaintenance = parseFloat(propMaintenanceInput.value);
    const propMaintenanceValue = isNaN(propMaintenance) ? 0 : propMaintenance;
    
    
        
    const propInsurance = parseFloat(propInsuranceInput.value);
    const propInsuranceValue = isNaN(propInsurance) ? 0 : propInsurance;
    
    const propUtilities = parseFloat(propUtilitiesInput.value);
    const propUtilitiesValue = isNaN(propUtilities) ? 0 : propUtilities;
    
    
    
    
    const salePrice = parseFloat(salePriceInput.value);
    const grossRents = monthlyRentValue;
    const propManagementCalc = (propManagementValue / 100) * grossRents;
    const propTaxCalc = propTaxValue / 12;
    const propVacancyCalc = (propVacancyValue / 100 ) * grossRents;
    const propMaintenanceCalc = (propMaintenanceValue / 100) * grossRents;
    const propInsuranceCalc = propInsuranceValue;
    const propUtilitiesCalc = propUtilitiesValue;
    const totalOpexCalc = propManagementCalc + propTaxCalc + propInsuranceCalc + propUtilitiesCalc + propVacancyCalc + propMaintenanceCalc;
    const monthlyNoiCalc = grossRents - totalOpexCalc;
    const annualNoiCalc = monthlyNoiCalc * 12;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Calculate Outputs
    //const salePrice = parseFloat(salePriceInput.value);
    const ltvCalc = 100 - downPaymentValue;
    const downPaymentCalc = (downPaymentValue / 100) * salePrice;
    const closingCostCalc = closingCostValue;
    const principalCalc = salePrice - downPaymentCalc;
    const intRateCalc = intRateValue / 100;
    const loanTermCalc = loanTermValue;
    const monthlyMortgageCalc = principalCalc / discountFactor;
    const monthlyNetCalc = monthlyNoiCalc - monthlyMortgageCalc;
    const annualizedNetCalc = monthlyNetCalc * 12;
    const annualizedRoiCalc = annualizedNetCalc / (downPaymentCalc + closingCostCalc) * 100;

    //Format Outputs
    const formattedSalePrice = isNaN(salePrice) ? '$0.00' : formatNumber(salePrice);
    const formattedDownPayment = isNaN(downPaymentCalc) ? '$0.00' : formatNumber(downPaymentCalc);
    const formattedPrincipal = isNaN(principalCalc) ? '$0.00' : formatNumber(principalCalc);
    const formattedMonthlyMortgage = isNaN(monthlyMortgageCalc) ? '$0.00' : formatNumber(monthlyMortgageCalc);
    const formattedMonthlyNet = isNaN(monthlyNetCalc) ? '$0.00' : formatNumber(monthlyNetCalc);
    const formattedAnnualizedNet = isNaN(annualizedNetCalc) ? '$0.00' : formatNumber(annualizedNetCalc);
    const formattedClosingCost = formatNumber(closingCostCalc);
    const formattedannualRoi = isNaN(annualizedRoiCalc) ? '0%' : annualizedRoiCalc;
 
    //Update Output Fields
    salePriceOutput.textContent = `${formattedSalePrice}`;
    downPmtOutput.textContent = `${formattedDownPayment}`;
    closingCostOutput.textContent = `${formattedClosingCost}`;
    ltvRatioOutput.textContent = `${ltvCalc}%`;
    principalOutput.textContent = `${formattedPrincipal}`;
    intOutput.textContent = `${(intRateCalc * 100)}%`;
    loanTermOutput.textContent = `${loanTermCalc}`;
    monthlyMortgageOutput.textContent = `${formattedMonthlyMortgage}`;
    monthlyProfitOutput.textContent = `${formattedMonthlyNet}`;
    annualProfitOutput.textContent = `${formattedAnnualizedNet}`;
    annualROIOutput.textContent = `${formattedannualRoi.toFixed(2)}%`;

    //To Remove NaN From Output While Calculating
    
};


downPaymentInput.addEventListener('input', calculateMortgageCalculator);
intRateInput.addEventListener('input', calculateMortgageCalculator);
loanTermInput.addEventListener('input', calculateMortgageCalculator);
closingCostInput.addEventListener('input', calculateMortgageCalculator);