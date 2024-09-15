
export default function handleLogin(values: { email: string; password: string }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}