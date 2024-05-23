async function init() {
  if (!navigator.gpu) throw Error('WebGPU not supported.');

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) throw Error('No WebGPU adapter available.');

  const device = await adapter.requestDevice();
  if(!device) throw Error('No WebGPU logical device');
}

init();

