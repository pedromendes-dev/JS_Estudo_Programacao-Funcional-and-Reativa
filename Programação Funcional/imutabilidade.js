// 2. Imutabilidade:


// ❌ MUTÁVEL (modifica original)

const numeros = [1, 2, 3];
numeros.push(4);  // Altera o array original  

// ✅ IMUTÁVEL (cria novo)

// const numerosOriginal = [1, 2, 3];
// const novosNumeros = [...numerosOriginal, 4];  // Cria novo array
// // numerosOriginal continua [1, 2, 3]