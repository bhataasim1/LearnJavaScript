
document.body.addEventListener('keydown', (e) => {
    const table = document.body.innerHTML = `
        <table>
            <tr>
                <th>KeyName</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key == ' ' ? e.key ='Space': e.key}</td>
                <td>${e.keyCode}</td>
                <td> ${e.code} </td>
            </tr>
        </table>
    `;
})