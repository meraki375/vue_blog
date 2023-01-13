const prepare = async () => {
  const vertText2 = await fetchText(`src/components/timeBreach/vert2.glsl?v=${Math.random()}`);
  const vertexShader2 = vertText2;
  window.vertexShader2 = vertexShader2;
  const fragText2 = await fetchText(`src/components/timeBreach/frag2.glsl?v=${Math.random()}`);
  const fragmentShader2 = fragText2;
  window.fragmentShader2 = fragmentShader2;
};
const fetchText = (url) => fetch(url).then((res) => res.text())
export { prepare }