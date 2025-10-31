/*
=== STATUS CODES ===
2XX - Successful
4XX - Client error (400, 403, 404)
5XX - Server error
*/
/*
// GET
// >>> For a specific GET, the id is in the URL
const resp = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'sec-ch-ua-platform': 'macOS',
        'X-API-KEY': apiKey
    }
})
const status = resp.status
const jsObject = await resp.json() // Esto es otra promesa

// POST
// PUT (for updating entire resources)
// PATCH (intended to partially modify a resource, not that common)
// >>> Usually, the id is in the URL
const resp = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
    },
    body: JSON.stringify(data)
})

// DELETE
// >>> For a specific DELETE, the id is in the URL
await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
        'X-API-KEY': apiKey
    }
})
*/

/**
 * PASTE JSON AS CODE
 * VSCode Extension that convert JSON data into strongly-typed classes (or interfaces) for a selected programming language.
 */