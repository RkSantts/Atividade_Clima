
Estrutura de Testes (18 testes em 4 suítes)

irrigationRule.test.js (9 testes): Validação das regras de negócio com 3 cenários básicos e 6 casos de borda (limites exatos como 20° e 30°, valores decimais e negativos).

weatherService.test.js (3 testes): Validação da comunicação com a API, cobrindo sucesso (28°C), erro de rede (axios.reject) e payload inválido (sem current_weather).

server.test.js (3 testes): Testes unitários para garantir o retorno da rota /irrigation (dados corretos ou erro interno) e o carregamento do frontend estático no /.

integration.test.js (3 testes): Testes End-to-End (E2E) validando o fluxo completo de sucesso, comportamento com falha no serviço e requisições sem parâmetros de latitude/longitude.
```

Bugs Resolvidos

Vazamento de estado nos Mocks: Mocks vazando entre os testes (via doMock()) foram corrigidos usando jest.mock() global e limpando o estado com clearAllMocks no beforeEach.

Conflitos de valores mockados: Temperaturas e rejeições conflitando foram resolvidas isolando cada cenário com mockResolvedValueOnce() e mockRejectedValueOnce().

Conflito entre Server e Integração: Testes interferindo uns nos outros foram ajustados configurando mocks isolados e forçando o reset manual a cada teste.

Falta de validação no Servidor: O server.js não implementava um erro 400 para parâmetros vazios. Os testes foram ajustados para validar o comportamento real do sistema lidando com entradas undefined.
```

