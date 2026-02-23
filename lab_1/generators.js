export function* colorCycleGenerator(colors = ["red", "green", "blue"]) {
  let index = 0;
  while (true) {
    yield colors[index]; [span_7](start_span)[span_8](start_span)
    index = (index + 1) % colors.length;
  }
}