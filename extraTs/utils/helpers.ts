export function validateEmail(email: string): boolean {
  const regex = /^([A-Za-z0-9 \-\.])+\@(successive.tech)/;
  return regex.test(email);
}
