const energyPrices = {
    elec_price: 0.27,
    gas_price: 0.07,
  };
  
  const co2Values = {
    elec_co2: 0.19338,
    gas_co2: 0.20227,
  };
  
  function runningCosts(watt, size, price) {
    return (watt * size * price).toFixed(2);
  }
  
  function savingVsRad(watt, size, cost, r_watt) {
    const saving = r_watt * size * energyPrices.gas_price - watt * size * cost;
    return saving < 0 ? '' : `£${saving.toFixed(2)}`;
  }
  
  function energyUsage(watt, size) {
    return (watt * size).toFixed(0);
  }
  
  function co2Reduction(watt_r, size, watt_ufh, price, co2UFH) {
    const co2red =
      (energyUsage(watt_r, size) * co2Values.gas_co2) -
      (energyUsage(watt_ufh, size) * co2UFH);
    return co2red < 0 ? '' : co2red.toFixed(1);
  }
  
  export { energyPrices, co2Values, runningCosts, savingVsRad, energyUsage, co2Reduction };
  