export default function equilateral (n: number): void {
  console.log(`Print a equilateral with ${n} rows`);
  let pattern: string = '';
  for(let i=1; i<=n; i++) {
      for(let j=n; j>i; j--) {
          pattern += ' ';
      }

      for(let j=1; j<=i; j++) {
          pattern += '* ';
      }
      pattern += '\n';
  }
  console.log(pattern);
}
