export function wrappedErrorMessage(e: Error): RegExp {
  const escapedMessage = e.message.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  return new RegExp(escapedMessage);
}
