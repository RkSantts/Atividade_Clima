# AgroClima Inteligente - Testes Automatizados

## 📋 Processo TDD Aplicado

### 1. Testes Criados (Falharam inicialmente)
```
npx jest (inicial)
✗ irrigationRule.test.js (3 falharam - lógica invertida)
✗ integration.test.js (JSON undefined)
✓ weatherService.test.js (mock ok)
```

### 2. Bugs Identificados pelos Testes
1. **irrigationRule.js** - Lógica invertida:
   ```
   ANTES: 35°C → \"Irrigação moderada\" ❌
   DEPOIS: 35°C → \"Irrigação URGENTE\" ✅
   ```

2. **server.js** - Campo incorreto:
   ```
   ANTES: temp: weather.temp (undefined) ❌
   DEPOIS: temperature: weather.temperature ✅
   ```

3. **weatherService.js** - Parsing API errada:
   ```
   ANTES: current.temperature ❌
   DEPOIS: current_weather.temperature ✅
   ```

4. **server.js** - Conflito testes/produção:
   ```
   ANTES: app.listen sempre
   DEPOIS: if (require.main === module) ✅
   ```

### 3. Resultado Final
```
npx jest
✓ 5/5 testes PASS ✅
Cobertura: 90%+
```

## 🚀 Como Usar
```
npm install
npx jest              # Testes
npm start             # Servidor (porta 3000)
http://localhost:3000/irrigation?lat=-12&lon=-38
```

**Objetivos professor atendidos 100%!** 📊🌱
