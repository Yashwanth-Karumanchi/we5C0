function plot(dates, temps){
    console.log(dates.length)
    console.log(temps)

    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [dates[0], dates[1], dates[2], dates[3], dates[4]],
      datasets: [{
        label: '# of Votes',
        data: [temps[0], temps[1], temps[2], temps[3], temps[4]],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}