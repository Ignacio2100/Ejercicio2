function Comparador() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").textContent = "Por favor, ingresa dos números válidos.";
      return;
    }
  
    if (num1 === num2) {
      document.getElementById("result").textContent = "Los números son iguales.";
    } else if (num1 > num2) {
      document.getElementById("result").textContent = `El número ${num1} es mayor que ${num2}.`;
    } else {
      document.getElementById("result").textContent = `El número ${num2} es mayor que ${num1}.`;
    }
  }