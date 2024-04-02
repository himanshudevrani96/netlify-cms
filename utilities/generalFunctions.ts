import BigNumber from 'bignumber.js'

export const weiToEth = (amt: string, decimal?: number) => {
  //   if (amt) {
  const tokenDecimal = decimal ? decimal : 18
  const BigNumVal = new BigNumber(amt)
  // const diff = new BigNumber(10).pow(tokenDecimal)
  const diff = new BigNumber(10).exponentiatedBy(tokenDecimal)
  const ethVal = BigNumVal.dividedBy(diff)
  return ethVal
  //   }
  //   return amt
}

export const ethToWei = (amt: string, decimal?: number) => {
  //   if (amt) {
  const tokenDecimal = decimal ? decimal : 18
  const BigNumVal = new BigNumber(amt)
  // const diff = new BigNumber(10).pow(tokenDecimal)
  const diff = new BigNumber(10).exponentiatedBy(tokenDecimal)
  const weiVal = BigNumVal.multipliedBy(diff)
  return weiVal
  //   }
  //   return amt
}

export const etherToWei = (value: string, decimal: number) => {
  return new BigNumber(value).times(10 ** decimal).toFixed()
}
export const weiToEther = (value: string, decimal: number) => {
  return new BigNumber(value).dividedBy(10 ** decimal).toFixed()
}

// export const formatNumber = (num: any) => {
//   if (num >= 1000000000) {
//     return new BigNumber(num / 1000000000).decimalPlaces(2).toString() + 'B'
//     // return (num / 1000000000).toFixed(2) + 'B'
//   } else if (num >= 1000000) {
//     return new BigNumber(num / 1000000).decimalPlaces(2).toString() + 'M'
//     // return (num / 1000000).toFixed(2) + 'M'
//   } else if (num < 1000) {
//     return new BigNumber(num).decimalPlaces(2).toString()
//   } else {
//     return Math.round(num).toLocaleString()
//   }
// }

export const formatNumber = (num: any) => {
  if (num >= 1000000000) {
    let returnValue = new BigNumber(num / 1000000000).decimalPlaces(2).toString()
    returnValue = returnValue.split('.')?.[1]?.length === 1 ? `${returnValue}0` : returnValue // '2.3'.split('.')=['2', '3'], '2.'.split('.')=['2', ''], '2'.split('.')=['2']
    return returnValue + 'B'
    // return new BigNumber(num / 1000000000).decimalPlaces(2).toString() + 'B'
    // return (num / 1000000000).toFixed(2) + 'B'
  } else if (num >= 1000000) {
    let returnValue = new BigNumber(num / 1000000).decimalPlaces(3).toString()
    returnValue = returnValue.split('.')?.[1]?.length === 1 ? `${returnValue}0` : returnValue // '2.3'.split('.')=['2', '3'], '2.'.split('.')=['2', ''], '2'.split('.')=['2']
    return Math.floor(parseFloat(returnValue) * 100) / 100 + 'M'
    // return new BigNumber(num / 1000000).decimalPlaces(2).toString() + 'M'
    // return (num / 1000000).toFixed(2) + 'M'
  } else if (num < 1000) {
    let returnValue = new BigNumber(num).decimalPlaces(2).toString()
    returnValue = returnValue.split('.')?.[1]?.length === 1 ? `${returnValue}0` : returnValue // '2.3'.split('.')=['2', '3'], '2.'.split('.')=['2', ''], '2'.split('.')=['2']
    return returnValue
    // return new BigNumber(num).decimalPlaces(2).toString()
  } else {
    return Math.round(num).toLocaleString()
  }
}

export const tokenFormatNumber = (num: any) => {
  if (num >= 0) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + 'B'
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M'
    }
    let [intPart, decPart] = new BigNumber(num)?.toFixed().split('.')
    if (isNaN(+decPart)) {
      decPart = '0'
    }
    decPart = decPart.slice(0, 2)
    if (intPart.length > 3) {
      intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    if (Number(decPart) === 0) {
      return intPart
    } else if (
      +decPart.slice(0, 1) >= 5 &&
      intPart[intPart.length - 1] === '9' &&
      intPart.length > 3
    ) {
      return Math.round(num).toLocaleString()
    } else if (Number(decPart) < 10) {
      if (decPart.slice(0, 1) === '0') {
        return `${intPart}.0${Number(decPart)}`
      } else {
        return `${intPart}.${Number(decPart)}0`
      }
    } else {
      // return `${intPart}.${new BigNumber().toFixed().split('.')[1].slice(0,2)}`
      return `${intPart}.${Number(decPart)}`
    }
  }
}
