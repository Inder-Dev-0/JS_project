const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class= 'color'>
            <table>
                <tr>
                    <th>key</th>
                    <th>keyCode</th>
                    <th>code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'spacce' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>`
})