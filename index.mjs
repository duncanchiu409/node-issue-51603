// ./main.mjs
process.on('uncaughtException', () => console.log('uncaught'));
try {
    await import(`data:text/javascript,
        import "data:text/javascript,console.log('before')";
        import "main.mjs.cjs";
    `);
}
catch { console.log('caught'); }