// ./main.mjs
process.on('uncaughtException', ()=>console.log('uncaught'));
try {
    await import(`data:text/javascript,
        import "data:text/javascript,console.log('before')";
        import "${import.meta.url}.cjs";
    `);
}
catch { console.log('caught'); }