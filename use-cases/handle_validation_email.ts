export default async function handleValidationEmail(codeValues: {
  n1: string;
  n2: string;
  n3: string;
  n4: string;
}) {
  const { n1, n2, n3, n4 } = codeValues;
  if (
    n1.length !== 1 ||
    n2.length !== 1 ||
    n3.length !== 1 ||
    n4.length !== 1
  ) {
    throw new Error("Código de validação inválido");
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}
