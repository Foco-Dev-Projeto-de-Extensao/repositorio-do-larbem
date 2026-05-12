# 📋 Especificação de Requisitos - Lar Bem Elizabeth

Este documento detalha os requisitos funcionais e não funcionais para o desenvolvimento do site institucional, garantindo o alinhamento entre as necessidades da instituição e a implementação técnica.

---

## 🛠️ Requisitos Funcionais (RF)
*Descrevem as funcionalidades e serviços que o sistema deve oferecer.*


| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF01** | **Catálogo do Bazar** | O sistema deve exibir uma galeria com fotos, descrições e preços (opcional) dos itens disponíveis no bazar solidário. |
| **RF02** | **Formulário de Contato** | O site deve disponibilizar um formulário para envio de mensagens (Nome, E-mail, Assunto e Mensagem). |
| **RF03** | **Botão de WhatsApp** | Deve haver um link direto ou botão flutuante para iniciar uma conversa imediata com a instituição. |
| **RF04** | **Geolocalização** | Integração com a API do Google Maps para exibir a localização exata da sede em Recife/PE. |
| **RF05** | **Informativo de Doações** | Seção dedicada com dados para PIX, lista de materiais prioritários e horários de coleta. |
| **RF06** | **Validação de Dados** | O JavaScript deve validar se o campo de e-mail é válido antes de permitir o envio do formulário. |

---

## 🏗️ Requisitos Não Funcionais (RNF)
*Descrevem as restrições, qualidades e atributos de sistema.*


| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RNF01** | **Responsividade** | A interface deve ser adaptável a diferentes tamanhos de tela (Mobile-First). |
| **RNF02** | **Desempenho** | O carregamento da página inicial deve ocorrer em menos de 3 segundos. |
| **RNF03** | **Estilo Visual** | O design deve seguir fielmente o estilo **Neubrutalismo** e a paleta de cores (`#ba5bff`, `#ff6eaf`, `#ff9800`). |
| **RNF04** | **Acessibilidade** | Garantir contraste adequado entre fontes e fundos, conforme as diretrizes WCAG. |
| **RNF05** | **Compatibilidade** | O site deve ser funcional nos navegadores Chrome, Firefox, Edge e Safari. |
| **RNF06** | **Hospedagem** | O deploy deve ser realizado em plataforma de integração contínua (ex: GitHub Pages ou Vercel). |

---
> **Nota:** Este documento serve como guia para a equipe de desenvolvimento (Amanda, Mozart, Marcos e Diego) e para a validação final do projeto de extensão.
