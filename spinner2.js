const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
    if (i === spinner.length - 1) {
      process.stdout.write(`\n`);
    }
  }, i * 500);
}