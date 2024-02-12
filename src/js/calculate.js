export function calculate(expression) {
    try {
      if (expression === "") {
        throw new Error("Expressão vazia");
      }
      return eval(expression);
    } catch (error) {
      console.error("Erro ao calcular:", error);
      return "Erro";
    }
  }
  
