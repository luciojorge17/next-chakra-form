export function converterParaNumero(string) {
    return string.replace(/[^\d,]+/g, '')
}