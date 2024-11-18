# Projeto Consumo de Agua com Front-End 🌊

Este projeto é uma API desenvolvida em **NestJS** com **MongoDB**, focada no monitoramento do consumo de água em uma comunidade. Ele visa promover a conscientização sobre o uso eficiente da água, trabalho de conclusão curso de WebMobile Mackenzie.

## 🚀 Funcionalidades

- **Registro de consumo mensal de água:**
  - Identificador do usuário.
  - Quantidade de água consumida.
  - Data da leitura.

- **Consulta de histórico de consumo:**
  - Permite verificar o histórico em um intervalo de datas especificado.

- **Alertas de consumo elevado:**
  - Gera alertas caso o consumo atual exceda significativamente o consumo do mês anterior.

- **Interface Web:**
  - Página em **HTML/CSS/JavaScript**.
  - Layout responsivo com:
    - **Logo da Sabesp**.
    - Bordas arredondadas.
    - Botões interativos que mudam de cor ao passar o cursor.
  - Botão para consultar o ID de um usuário e seu histórico de consumo.

---

## 🛠️ Tecnologias Utilizadas

- **Back-End:**
  - [NestJS](https://nestjs.com/)
  - [MongoDB Atlas](https://www.mongodb.com/atlas)

- **Front-End:**
  - HTML5, CSS3 e JavaScript.
---

```bash
water-consumption/
├── src/
│   ├── app.module.ts              # Módulo principal da aplicação
│   ├── main.ts                    # Arquivo principal para inicializar o servidor
│   ├── consumption/
│   │   ├── consumption.controller.ts   # Controlador das rotas de consumo
│   │   ├── consumption.service.ts      # Lógica de negócio para consumo
│   │   ├── consumption.module.ts       # Módulo de consumo
│   │   ├── dto/
│   │   │   ├── create-consumption.dto.ts  # DTO para criação de consumo
│   │   │   ├── update-consumption.dto.ts  # DTO para atualização de consumo
│   │   ├── schemas/
│   │       ├── consumption.schema.ts    # Definição do esquema do MongoDB
│   │
│   ├── alerts/
│   │   ├── alerts.controller.ts       # Controlador das rotas de alertas
│   │   ├── alerts.service.ts          # Lógica de negócio para alertas
│   │   ├── alerts.module.ts           # Módulo de alertas
│   │
│   └── common/
│       ├── pipes/                     # Pipes personalizados (se necessário)
│       ├── filters/                   # Filtros de exceção (Ex: Error handling)
│       ├── interceptors/              # Interceptadores (se necessário)
│       ├── decorators/                # Decoradores customizados
│
├── public/                            # Arquivos estáticos para a interface web
│   ├── index.html                     # Página inicial (HTML)
│   ├── styles.css                     # Estilos da interface
│   ├── scripts.js                     # Lógica da interface (JavaScript)
│
├── test/
│   ├── consumption.e2e-spec.ts        # Testes end-to-end para consumo
│   ├── alerts.e2e-spec.ts             # Testes end-to-end para alertas
│   └── jest-e2e.json                  # Configuração do Jest para testes E2E
│
├── node_modules/                      # Dependências do projeto (gerado pelo npm)
├── dist/                              # Arquivos transpilados pelo TypeScript
├── .env                               # Variáveis de ambiente (opcional)
├── .gitignore                         # Arquivos e pastas a serem ignorados pelo Git
├── nest-cli.json                      # Configuração do NestJS CLI
├── package.json                       # Dependências e scripts do projeto
├── package-lock.json                  # Versões exatas das dependências
├── tsconfig.json                      # Configuração do TypeScript
└── README.md                          # Documentação do projeto
```

## 🔧 Imagens do Projeto

![image](https://github.com/user-attachments/assets/7b3eddc0-7ec0-4465-b8ed-d89c3f07f1ba)

## 🔧 Alerta de consumo

![image](https://github.com/user-attachments/assets/22ec5fe4-15ab-4c28-8680-db9be4c9baa9)

## Registro no BD

![image](https://github.com/user-attachments/assets/e4c29dce-7017-4beb-bb1a-5f15f5449ad8)



