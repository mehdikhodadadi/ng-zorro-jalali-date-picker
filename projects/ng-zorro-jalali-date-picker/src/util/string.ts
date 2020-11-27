 

/**
 * Much like lodash.
 */
export function padStart(toPad: string, length: number, element: string): string {
  if (toPad.length > length) {
    return toPad;
  }

  const joined = `${getRepeatedElement(length, element)}${toPad}`;
  return joined.slice(joined.length - length, joined.length);
}

export function padEnd(toPad: string, length: number, element: string): string {
  const joined = `${toPad}${getRepeatedElement(length, element)}`;
  return joined.slice(0, length);
}

export function getRepeatedElement(length: number, element: string): string {
  return Array(length).fill(element).join('');
}
