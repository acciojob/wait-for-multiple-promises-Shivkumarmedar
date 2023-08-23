//your JS code here. If required.
    function waitRandomTime(min, max) {
      const delay = Math.random() * (max - min) + min;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(delay.toFixed(3));
        }, delay * 1000);
      });
    }

    const promises = [
      waitRandomTime(1, 3),
      waitRandomTime(1, 3),
      waitRandomTime(1, 3)
    ];

    Promise.all(promises)
      .then(times => {
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        times.forEach((time, index) => {
          const row = document.createElement('tr');
          const promiseCell = document.createElement('td');
          promiseCell.textContent = `Promise ${index + 1}`;
          const timeCell = document.createElement('td');
          timeCell.textContent = time;

          row.appendChild(promiseCell);
          row.appendChild(timeCell);
          tableBody.appendChild(row);
        });

        const totalRow = document.createElement('tr');
        const totalPromiseCell = document.createElement('td');
        totalPromiseCell.textContent = 'Total';
        const totalTimeCell = document.createElement('td');
        const totalTime = times.reduce((total, time) => total + parseFloat(time), 0);
        totalTimeCell.textContent = totalTime.toFixed(3);

        totalRow.appendChild(totalPromiseCell);
        totalRow.appendChild(totalTimeCell);
        tableBody.appendChild(totalRow);
      });