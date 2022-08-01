export const formatPeso = ( ammount:number ) => {
  const format = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  return format.format(ammount)
}