export default function tF(text) {
  return text.replace(/&quot;/g, '"')
    .replace(/&#039;/g, '\'')
    .replace(/&deg;/g, '°')
    .replace(/&amp;/g, '&')
    .replace(/&uuml;/g, 'ü')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&rsquo;/g, '\'')
    .replace(/&acirc;/g, 'â');
}
