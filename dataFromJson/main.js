async function usersData() {
    try {
        const response = await fetch('users.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();

        const table = document.querySelector('tbody');
        table.innerHTML = '';

        data.forEach(item => {
            // console.log(item['name']);
            const row = document.createElement('tr');
            table.appendChild(row);
            
            Object.keys(item).forEach(element => {
                const td = document.createElement('td');
                td.className = element;
                td.innerHTML = item[element];
                row.appendChild(td);
            });
        });
    } catch (error) {
        console.log(error);
    }
}
usersData();