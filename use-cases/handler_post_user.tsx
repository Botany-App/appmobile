export default async function HandlePostUser(formValues: {
  name: string;
  email: string;
  password: string;
}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
