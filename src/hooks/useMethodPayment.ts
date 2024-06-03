export function useMethodPayment() {

  const methodPayment = [
    {
      value: "PIX",
      label: "Pix",
    },
    {
      value: "CARTAO_CREDITO",
      label: "Cartão Crédito",
    },
    {
      value: "CARTAO_DEBITO",
      label: "Catão Débito",
    },
    {
      value: "DINHERIO",
      label: "Dinheiro",
    },
  ];

  return {
    methodPayment
  }
}
