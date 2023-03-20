/*const assert = require('assert');
import { calculateProForma } from "../modules/calculator-functions";
describe('calculateProForma', () => {
  it('should calculate correct values for all outputs', () => {
    // Set up input values
    const monthlyRentInput = { value: '1000' };
    const propManagementInput = { value: '8' };
    const propTaxInput = { value: '2000' };
    const propVacancyInput = { value: '5' };
    const propMaintenanceInput = { value: '10' };
    const salePriceInput = { value: '250000' };
    const propInsuranceInput = { value: '150' };
    const propUtilitiesInput = { value: '100' };

    // Call function with input values
    const {
      grossRentOutput,
      propManagementOutput,
      propTaxOutput,
      propVacancyOutput,
      propMaintenanceOutput,
      propInsuranceOutput,
      propUtilitiesOutput,
      totalOpexOutput,
      monthlyNoiOutput,
      annualNoiOutput,
      capRateOutput
    } = calculateProForma(
      monthlyRentInput,
      propManagementInput,
      propTaxInput,
      propVacancyInput,
      propMaintenanceInput,
      salePriceInput,
      propInsuranceInput,
      propUtilitiesInput
    );

    // Assert output values
    assert.strictEqual(grossRentOutput, '$1,000.00');
    assert.strictEqual(propManagementOutput, '$80.00');
    assert.strictEqual(propTaxOutput, '$166.67');
    assert.strictEqual(propVacancyOutput, '$50.00');
    assert.strictEqual(propMaintenanceOutput, '$100.00');
    assert.strictEqual(propInsuranceOutput, '$150.00');
    assert.strictEqual(propUtilitiesOutput, '$100.00');
    assert.strictEqual(totalOpexOutput, '$646.67');
    assert.strictEqual(monthlyNoiOutput, '$353.33');
    assert.strictEqual(annualNoiOutput, '$4,240.00');
    assert.strictEqual(capRateOutput, '1.70%');
  });
});*/
