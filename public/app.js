async function registerConsumption() {
  const userId = document.getElementById('userId').value;
  const consumptionAmount = parseFloat(document.getElementById('consumptionAmount').value);
  const readingDate = document.getElementById('readingDate').value;

  if (!userId || !consumptionAmount || !readingDate) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const response = await fetch('/consumption', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, consumptionAmount, readingDate }),
  });

  if (response.ok) {
    alert("Consumo registrado com sucesso!");
    document.getElementById('consumptionForm').reset();
  } else {
    alert("Erro ao registrar consumo.");
  }
}

async function fetchConsumptionHistory() {
  const userId = document.getElementById('historyUserId').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  if (!userId || !startDate || !endDate) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const response = await fetch(`/consumption/history?userId=${userId}&startDate=${startDate}&endDate=${endDate}`);
  const data = await response.json();

  const historyTable = document.getElementById('historyTable');
  historyTable.innerHTML = '';

  if (data.length === 0) {
    historyTable.innerHTML = 'Nenhum registro encontrado para o período especificado.';
  } else {
    data.forEach(record => {
      const row = document.createElement('div');
      row.textContent = `Data: ${record.readingDate} | Consumo: ${record.consumptionAmount} m³`;
      historyTable.appendChild(row);
    });
  }
}

async function checkHighConsumptionAlert() {
  const userId = document.getElementById('alertUserId').value;

  if (!userId) {
    alert("Por favor, insira o ID do usuário.");
    return;
  }

  const response = await fetch(`/consumption/alert?userId=${userId}`);
  const data = await response.json();

  const alertMessage = document.getElementById('alertMessage');
  if (data.alert) {
    alertMessage.textContent = 'Alerta: O consumo atual está acima do último mês.';
  } else {
    alertMessage.textContent = 'Nenhum alerta de consumo elevado.';
  }
}
