console.log('Starting background worker...');

function processJob() {
  console.log(`Processing job at ${new Date().toISOString()}`);
}

setInterval(processJob, 30000);

console.log('Background worker started successfully');

process.on('SIGTERM', () => {
  console.log('Worker shutting down gracefully');
  process.exit(0);
});
