export async function encodeSHA256(message) {
    // Convertir el mensaje a un Uint8Array
    const msgBuffer = new TextEncoder().encode(message);
    
    // Hacer hash del mensaje
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    
    // Convertir el ArrayBuffer a un Array de bytes
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    
    // Convertir los bytes a una cadena hexadecimal
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return hashHex;
}